<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProduitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            "nom" => $this->faker->name(),
            "description" => $this->faker->paragraph($nbSentences = 2, $variableNbSentences = true),
            "prix" => $this->faker->randomNumber(4),
        ];
    }
}
