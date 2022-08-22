<template>
    <div
        class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]"
    >
        <img
            :src="
                utils.getUrlImageFromIATACode(
                    popTravelPlace.destination_airport
                )
            "
            alt=""
            class="w-full h-48 object-cover"
        />
        <h4 class="text-lg font-bold">
            {{
                utils
                    .convertIATAToCityAndCountry(
                        popTravelPlace.destination_airport
                    )
                    .split(",")[0]
            }}
        </h4>
        <div class="flex-col text-sm mb-1">
            <!--   class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" -->
            <svg
                class="h-6 w-6"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 487.744 487.744"
                style="enable-background: new 0 0 487.744 487.744"
                xml:space="preserve"
            >
                <g>
                    <g>
                        <path
                            style="fill: #010002"
                            d="M48.617,279.137l3.69-4.747l17.818,14.68l12.022,9.868c-7.072,7.096-10.575,13.461-8.34,17.997
			c1.609,3.251,5.706,4.91,12.193,4.91c5.389,0,12.307-1.13,20.183-3.178l0.073,0.057l0.301-0.146
			c13.737-3.609,30.466-10.039,47.658-18.517h0.008c0.008,0,0.008-0.008,0.008-0.008c0.073-0.041,0.146-0.065,0.219-0.106
			l1.829-0.902l-0.219-0.447c1.089-1.276,1.715-3.138,1.91-5.414l71.198-35.164l-34.733,74.848l48.836-24.117l77.725-96.08
			l94.478-46.658c0.285-0.146,0.52-0.35,0.797-0.504c13.802-7.129,15.42-8.982,42.651-24.5c33.327-18.988,28.588-29.32,28.588-29.32
			c-1.715-4.942-10.835-10.209-43.935-1.024c-2.609,0.723-5.625,0.74-8.576,0.455c-1.723,0.504-3.642,1.04-5.633,1.699
			c-1.569,0.52-3.154,1.097-4.739,1.886l-5.503,2.715l-18.346,9.063c-10.047,4.958-22.207,0.837-27.166-9.21
			c-2.845-5.755,1.87-8.754,8.291-11.201c-10.819,1.561-20.85,4.3-27.117,7.397l-63.988,31.62l-52.096-6.446l-36.066,17.81
			l27.361,18.663l-124.034,61.249l-31.108-9.624l0,0l-9.787-6.576l-6.17,1.642l-25.312-7.828L0,230.561l3.82,3.885l29.206,24.061
			L21.02,292.761L48.617,279.137z"
                        />
                        <rect
                            x="33.441"
                            y="361.789"
                            style="fill: #010002"
                            width="364.428"
                            height="20.321"
                        />
                    </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
            <div>
                {{
                    moment(popTravelPlace.departure_at).format("ddd, DD. MMMM")
                }}
            </div>
            <div>
                {{ popTravelPlace.origin }} - {{ popTravelPlace.destination }}
            </div>
        </div>
        <div class="flex-col text-sm mb-1">
            <svg
                class="h-6 w-6"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 15.331 15.331"
                style="enable-background: new 0 0 15.331 15.331"
                xml:space="preserve"
            >
                <g>
                    <g>
                        <path
                            style="fill: #030104"
                            d="M1.094,7.039L4.762,8.31l-1.82,1.025c-0.091,0.051-0.131,0.161-0.095,0.26
			c0.027,0.071,0.09,0.121,0.16,0.134C3.034,9.733,3.062,9.733,3.09,9.728l3.329-0.687c-0.021,0.218,0.125,0.42,0.344,0.461
			C6.84,9.517,6.915,9.508,6.984,9.483C7.04,9.531,7.106,9.566,7.182,9.581c0.231,0.044,0.455-0.108,0.498-0.34
			c0.003-0.015,0.003-0.029,0.004-0.044C7.822,9.16,7.933,9.055,7.978,8.915l4.699,0.887c-0.146,0.046-0.262,0.166-0.292,0.326
			c-0.044,0.231,0.108,0.455,0.34,0.498c0.231,0.044,0.454-0.108,0.498-0.34c0.03-0.16-0.035-0.315-0.154-0.41l0.813,0.153
			c0.626,0.118,1.11,0.335,1.229-0.291c-0.175-0.989-1.625-1.842-2.251-1.96L9.382,7.123L4.517,3.962
			C4.493,3.947,4.468,3.937,4.441,3.931C4.37,3.918,4.294,3.941,4.243,3.998C4.173,4.076,4.17,4.193,4.237,4.274l1.815,2.219
			L2.729,5.866c-0.23-0.62-0.496-1.347-0.769-2.122C1.178,1.525,0.534,2.636,0.479,2.928L0.008,6.576
			c-0.055,0.292,0.19,0.294,0.482,0.35L1.094,7.039L1.094,7.039z"
                        />
                        <rect
                            x="0.923"
                            y="12.372"
                            style="fill: #030104"
                            width="14.408"
                            height="0.568"
                        />
                    </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
            <div>
                {{ moment(popTravelPlace.return_at).format("ddd, DD. MMMM") }}
            </div>
            <div>
                {{ popTravelPlace.destination }} - {{ popTravelPlace.origin }}
            </div>
        </div>
        <!-- <div
            v-html="
                utils.convertIATAToCityAndCountry(
                    popTravelPlace.destination_airport
                )
            "
        ></div> -->

        <div class="flex justify-between items-center mt-3">
            <div class="flex items-center">
                <a
                    :href="searchFlightURL"
                    class="flex items-center justify-center rounded-full border border-transparent text-sm text-indigo-500"
                >
                    Hinnat alkaen {{ popTravelPlace.price }} €
                </a>
                <button
                    v-if="popTravelPlace.id"
                    type="button"
                    @click="emit('delete', popTravelPlace)"
                    class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import utils from "../utils";
import moment from "moment";

// function removeStr(str1) {
//     var string =

// }

const searchFlightURL = `https://www.aviasales.com${popTravelPlace.link}`;

const { popTravelPlace } = defineProps({
    popTravelPlace: Object,
});
const emit = defineEmits(["delete"]);
</script>
