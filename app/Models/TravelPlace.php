<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TravelPlace extends Model
{
    use HasFactory;

    protected $fillable = [
        'origin',
        'destination',
        'origin_airport',
        'destination_airport',
        'price',
        'airline',
        'flight_number',
        'departure_at',
        'return_at',
        'transfers',
        'return_transfers',
        'duration',
        'link',
    ];

    public function flightsResponse() { 
        return $this->belongsTo(FlightsResponse::class);
    }
}
