<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/koko/{id}', "App\Http\Controllers\TestController@test");

Route::get('/create', "App\Http\Controllers\DatabaseController@create");

Route::post('/salut', "App\Http\Controllers\DatabaseController@store")->name("create.store");