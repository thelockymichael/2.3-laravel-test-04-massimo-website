// require('./bootstrap');

require('alpinejs');

import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"

const app = createApp({})

app.component('hello-world', App)

app.use(router)

app.use(store)

app.mount('#app')

// require('./bootstrap');

// require('alpinejs');

// import { createApp } from "vue"
// import router from "./router"
// import store from "./store"
// import CompaniesIndex from "./components/companies/CompaniesIndex.vue"

// createApp({
//     components: {
//         CompaniesIndex
//     }
// }).use(store).use(router).mount("#app")



// import { createApp } from "vue";
// import router from './router'
// import CompaniesIndex from './components/companies/CompaniesIndex'

// createApp({
//     components: {
//         CompaniesIndex
//     }
// }).use(router).mount('#app')
