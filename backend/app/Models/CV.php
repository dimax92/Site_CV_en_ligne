<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CV extends Model
{
    use HasFactory;
    protected $fillable = ["user_id", "image", "nomimage", "prenom", "nom", "mail", "telephone", "adresse", "naissance", "langues", "qualites", "interets", "profil", "experiences", "formations", "competences"];
}
