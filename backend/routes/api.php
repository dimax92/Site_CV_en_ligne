<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CVController;
use App\Http\Controllers\API\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get("/cv", [CVController::class, "index"]);
Route::get("/image/{id}", [CVController::class, "image"]);
Route::get("/cv/{id}", [CVController::class, "show"]);
Route::get("/search/{search}", [CVController::class, "search"]);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/mail', [CVController::class, "envoiMail"]);

//Protecting Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post("/formulairecv/{id}", [CVController::class, "store"]);
    Route::get("/modificationcv/{id}", [CVController::class, "showModification"]);
    Route::post("/cv/{id}", [CVController::class, "update"]);
    Route::post("/suppression/{id}", [CVController::class, "destroy"]);
    Route::post('/updateprofil/{id}', [AuthController::class, 'update']);
    Route::post('/suppressionprofil/{id}', [AuthController::class, 'destroy']);
});