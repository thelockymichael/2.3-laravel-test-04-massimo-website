<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">Travel</h1>
            </div>
        </template>
        <form class="mb-7" @submit="searchDestination">
            <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >Search</label
            >
            <div class="relative">
                <div
                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="search-travel-place"
                    v-model="searchObject.searchStr"
                    class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for travel destinations..."
                    required
                />
                <button
                    type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
        </form>
        <div v-if="searchTravelPlaces.loading" class="flex justify-center">
            Loading...
        </div>
        <div v-else>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                <PopTravelPlaceListItem
                    v-for="(popTravelPlace, ind) in searchTravelPlaces.data"
                    :key="ind"
                    :popTravelPlace="popTravelPlace"
                    class="opacity-0 animate-fade-in-down"
                    :style="{ animationDelay: `${ind * 0.1}s` }"
                    @delete="deleteSurvey(popTravelPlace)"
                />
            </div>
            <div class="flex justify-center mt-5">
                <nav
                    class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                ></nav>
            </div>
        </div>
        <!-- <div v-else>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                <h3>IT WORKS !!!</h3>
            </div>

            <div class="flex justify-center mt-5">
                <nav
                    class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                ></nav>
            </div>
        </div> -->
    </PageComponent>
</template>

<script setup>
import store from "../store";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PageComponent from "../components/PageComponent.vue";
import PopTravelPlaceListItem from "../components/PopTravelPlaceListItem.vue";

const route = useRoute();

let loading = ref(false);
let errorMsg = ref("");

const searchObject = {
    searchStr: "",
};

const searchTravelPlaces = computed(() => store.state.searchTravelPlaces);

console.log("route.destination", route.params.destination);
if (route.params.destination) {
    store
        .dispatch("searchForTravelPlaces", {
            destinationName: route.params.destination,
        })
        .then((response) => {
            loading = false;
            console.log("response data", response.data);
        })
        .catch((err) => {
            loading = false;
            console.log("ERR RESPONSE", err.response);
            // errorMsg.value = err.response.data.error;
        });
}

function searchDestination(ev) {
    ev.preventDefault();

    loading.value = true;

    // TODO Get destination with search keyword, eg. Riga
    console.log("SearchStr-123", searchObject.searchStr.toLowerCase());
    store
        .dispatch("searchForTravelPlaces", {
            destinationName: searchObject.searchStr.toLowerCase(),
        })
        .then((response) => {
            loading = false;
            console.log("response data", response.data);
        })
        .catch((err) => {
            loading = false;
            console.log("ERR RESPONSE", err.response);
            // errorMsg.value = err.response.data.error;
        });
    // router.push({
    //     name: "TravelSearchList",
    //     params: { destination: searchObject.searchStr.toLowerCase() },
    // });
}
</script>
