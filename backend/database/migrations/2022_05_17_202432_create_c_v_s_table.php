<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCVSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('c_v_s', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->text("image");
            $table->text("nomimage");
            $table->text("prenom");
            $table->text("nom");
            $table->text("mail");
            $table->text("telephone");
            $table->text("adresse");
            $table->text("naissance");
            $table->text("langues");
            $table->text("qualites");
            $table->text("interets");
            $table->text("profil");
            $table->text("experiences");
            $table->text("formations");
            $table->text("competences");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('c_v_s');
    }
}
