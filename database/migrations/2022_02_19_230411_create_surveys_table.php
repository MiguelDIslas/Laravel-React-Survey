<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surveys', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('gender', 25);
            $table->string('age', 20);
            $table->string('continent', 10);
            $table->string('often_play', 25);
            $table->string('acquire_games', 25);
            $table->string('price', 20);
            $table->string('platform', 10);
            $table->string('company', 10);
            $table->string('console', 20);
            $table->string('prefer_play', 15);
            $table->boolean('adventure')->default(0);
            $table->boolean('action')->default(0);
            $table->boolean('arcade')->default(0);
            $table->boolean('logic')->default(0);
            $table->boolean('mmorpg')->default(0);
            $table->boolean('rpg')->default(0);
            $table->boolean('simulator')->default(0);
            $table->boolean('sports')->default(0);
            $table->boolean('strategy')->default(0);
            $table->boolean('competitive')->default(0);
            $table->string('most_anticipated', 35);
            $table->text('favorite_game')->nullable();

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
        Schema::dropIfExists('surveys');
    }
};
