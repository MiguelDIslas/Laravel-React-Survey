<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'gender', 'age', 'continent', 'often_play', 'acquire_games', 'price', 'platform', 'company', 'console', 'prefer_play', 'adventure', 'action', 'arcade', 'logic', 'mmorpg', 'rpg', 'simulator', 'sports', 'strategy', 'competitive', 'most_anticipated', 'favorite_game'];
}
