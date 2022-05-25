<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CV;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Validator;
USE App\Mail\TestMail;

class CVController extends Controller
{
    public function store(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            "user_id" => "unique:c_v_s",
            'donneesFichier' => 'required|mimes:jpeg,bmp,png',
            "prenom" => "required|string",
            "nom" => "required|string",
            'mail' => 'required|string|email|max:255',
            "telephone" => "required|numeric",
            "adresse" => "required|string",
            "naissance" => "required|string",
            "profil" => "required|string"
            ]
        );

        if($validator->fails()){
            return response()->json($validator->errors(), 401);       
        }

        $fileName = hash("sha256", uniqid()).".".$request->file("donneesFichier")->extension();
        Storage::disk("local")->putFileAs("images", $request->file("donneesFichier"), $fileName);
        $cv = CV::create([
            "user_id" => $id,
            "image" => $request->input("image"),
            "nomimage" => $fileName,
            "prenom" => $request->input("prenom"),
            "nom" => $request->input("nom"),
            "mail" => $request->input("mail"),
            "telephone" => $request->input("telephone"),
            "adresse" => $request->input("adresse"),
            "naissance" => $request->input("naissance"),
            "langues" => $request->input("langues"),
            "qualites" => $request->input("qualites"),
            "interets" => $request->input("interets"),
            "profil" => $request->input("profil"),
            "experiences" => $request->input("experiences"),
            "formations" => $request->input("formations"),
            "competences" => $request->input("competences")
        ]);
        return $cv;
    }

    public function Image($id)
    {
        $fileName = CV::findOrFail($id)->nomimage;
        $contents = Storage::get("images/".$fileName);
        return $contents;
    }

    public function show($id)
    {
        $cv = CV::findOrFail($id);
        return $cv;
    }

    public function showModification($id)
    {
        $cv = CV::firstWhere('user_id','=',$id);
        return $cv;
    }

    public function index()
    {
        return CV::all();
    }

    public function search($search)
    {
        return DB::select("SELECT * FROM `c_v_s` WHERE filtre_recherche(REPLACE('$search', '-', ' '), CONCAT(`prenom`, ' ', `nom`, ' ', transformation_objet(`competences`))) = 10 ");
    }

    public function update(Request $request, $id)
    {
        $cv = CV::firstWhere('user_id','=',$id);

        $validator = Validator::make($request->all(),[
            "prenom" => "required|string",
            "nom" => "required|string",
            'mail' => 'required|string|email|max:255',
            "telephone" => "required|numeric",
            "adresse" => "required|string",
            "naissance" => "required|string",
            "profil" => "required|string"
            ]
        );

        if($request->hasFile('donneesFichier')){
            $validatorFile = Validator::make($request->all(),[
                'donneesFichier' => 'required|mimes:jpeg,bmp,png'
                ]
            );
    
            if($validatorFile->fails() OR $validator->fails()){
                return response()->json([$validatorFile->errors(), $validator->errors()], 401);       
            }
            $nomImage = $cv->nomimage;
            $fileName = hash("sha256", uniqid()).".".$request->file("donneesFichier")->extension();
            Storage::delete("images/".$nomImage);
            Storage::disk("local")->putFileAs("images", $request->file("donneesFichier"), $fileName);
            $cv->update([
                "image" => $request->input("image"),
                "nomimage" => $fileName
            ]);
        }else{
            if($validator->fails()){
                return response()->json($validator->errors(), 401);       
            }
        }

        $cv->update([
            "prenom" => $request->input("prenom"),
            "nom" => $request->input("nom"),
            "mail" => $request->input("mail"),
            "telephone" => $request->input("telephone"),
            "adresse" => $request->input("adresse"),
            "naissance" => $request->input("naissance"),
            "langues" => $request->input("langues"),
            "qualites" => $request->input("qualites"),
            "interets" => $request->input("interets"),
            "profil" => $request->input("profil"),
            "experiences" => $request->input("experiences"),
            "formations" => $request->input("formations"),
            "competences" => $request->input("competences")
        ]);

        return $cv;
    }

    public function destroy($id)
    {
        $cv = CV::firstWhere('user_id','=',$id);
        $nomImage = $cv->nomimage;
        Storage::delete("images/".$nomImage);
        $cv->delete();
    }

    public function envoiMail(){
        Mail::to('test@mail.test')->send(new TestMail());
    }

}
