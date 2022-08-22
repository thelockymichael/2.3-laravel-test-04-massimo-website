<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FlightsResponse extends Model
{
    use HasFactory;

    protected $fillable = [
        'success',
        'currency',
    ];

    public function travelPlaces() {
        return $this->hasMany(TravelPlace::class);
    }
}
