<?php

namespace App\Http\Controllers;

use App\Http\Resources\SurveyAnswerResource;
use App\Http\Resources\SurveyResourceDashboard;
use App\Models\Survey;
use App\Models\SurveyAnswer;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;

class PopTravelPlaceController extends Controller
{
    public function cheapestPrices(Request $request) {
        
        $departure_at = $request->departure_at;
        error_log("Some message here.");
        error_log($departure_at);
        
        // 2022-08-22
        $url = 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=HEL&return_at=2022-08-26&unique=false&sorting=price&direct=false&currency=eur&limit=30&page=1&departure_at=';

        // $response = Http::get("https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=HEL&departure_at=2022-08-22&return_at=2022-08-26&unique=false&sorting=price&direct=false&currency=eur&limit=30&page=1&one_way=true&token=1f372b7e31cfc49a54929bd7ba77469c");
        
        $token_start = '&token=';
        $token = config('secrets.aviasales_token');
        
        $fullToken = $token_start.$token;

        $response = Http::get($url.$departure_at.$fullToken);

        if ($response->status() !== 200) {
            return response("Invalid request.", 400);
        }

        $jsonResponse = $response->json();

        return $jsonResponse;
    }

    public function searchFlightsByDestination(Request $request) {
        $url = 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=HEL&unique=false&sorting=price&direct=false&currency=eur&limit=30&page=1&return_at=2022-08-26&destination=';
        $departure_at_url = "&departure_at=";

        $departure_at = $request->departure_at;
        $destination = $request->destination;

        $token_start = '&token=';
        $token = config('secrets.aviasales_token');
        
        $fullToken = $token_start.$token;
        error_log("Some message here.");
        error_log($destination);
        error_log($departure_at);

        error_log($url.$destination.$departure_at_url.$departure_at.$fullToken);

        $response = Http::get($url.$destination.$departure_at_url.$departure_at.$fullToken);
        
        if ($response->status() !== 200) {
            return response("Invalid request.", 400);
        }

        $jsonResponse = $response->json();

        return $jsonResponse;
    }

}
