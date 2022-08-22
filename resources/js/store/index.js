import { createStore } from "vuex"
import moment from "moment";
import axiosClient from "../axios"
import createPersistedState from "vuex-persistedstate"
import utils from "../utils";

const dummyPopTravelPlaces = [
  {
    id: 1,
    destinationName: "London",
    startingLocation: "Helsinki",
    flightTicketPrice: 200,
    urlImage: "dsadas"
  }
]

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
    dashboard: {
      loading: false,
      data: {}
    },
    currentSurvey: {
      loading: false,
      data: {}
    },
    surveys: {
      loading: false,
      links: [],
      data: []
    },
    popTravelPlaces: {
      loading: false,
      links: [],
      data: []
    },
    searchTravelPlaces: {
      loading: false,
      links: [],
      data: []
    },
    questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
    notification: {
      show: false,
      type: null,
      message: null
    }
  },
  getters: {},
  actions: {
    getDashboardData({commit}) {
      commit('dashboardLoading', true)
      return axiosClient.get(`/dashboard`)
      .then((res) => {
        commit('dashboardLoading', false)
        commit('setDashboardData', res.data)
      })
      .catch((err) => {
        commit('dashboardLoading', false)
        throw err
      })
    },
    getSurvey({ commit }, id) {
      commit('setCurrentSurveyLoading', true)
      return axiosClient
        .get(`/survey/${id}`)
        .then((res) => {
          commit("setCurrentSurvey", res.data)
          commit("setCurrentSurveyLoading", false)
          return res
        })
        .catch((err) => {
          commit("setCurrentSurveyLoading", false)
          throw err
        })
    },
    saveSurvey({ commit }, survey) {
      delete survey.image_url
      
      let response
      if (survey.id) {
        response = axiosClient
          .put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit("setCurrentSurvey", res.data)
            return res
          })
      } else {
        response = axiosClient.post("/survey", survey).then((res) => {
          commit('setCurrentSurvey', res.data)
          return res
        })
      }

      return response
    },
    deleteSurvey({}, id) {
      return axiosClient.delete(`/survey/${id}`)
    },
    getSurveys({ commit }, { url = null } = {}) {
      url = url || '/survey'
      commit("setSurveysLoading", true)
      return axiosClient.get(url).then((res) => {
        commit("setSurveysLoading", false)
        commit("setSurveys", res.data);

        // TODO Add destination city
        // TODO Add origin city
        // TODO 
        return res;
      })
    },
    getPopTravelPlaces({ commit }, { url = null } = {}) {
      // TODO 1. Search for the cheapest flights
      // https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=HEL&departure_at=2022-08-19&return_at=2022-08-26&unique=false&sorting=price&direct=false&currency=eur&limit=30&page=1&one_way=true&token=1f372b7e31cfc49a54929bd7ba77469c
      commit("setPopTravelPlacesLoading", true)

      const departureAt = moment(new Date()).format("YYYY-MM-DD")

      console.log("DATE", departureAt);
      
      url = "/cheapest-tickets"
      return axiosClient.get(url, {
        params: {
          departure_at: departureAt
        }
      }).then((res) => {
        commit("setPopTravelPlacesLoading", false)
        console.log("popTravelPlaces", res.data.data);
        commit("setPopTravelPlaces", res.data.data.slice(0, 3))

        console.log("PERKELE", utils.convertIATAToCityAndCountry("STN"))
        console.log("PERKELE", utils.convertIATAToCityAndCountry("HEL"))
        console.log("PERKELE", utils.convertIATAToCityAndCountry("AAL"))
        
        return res;
      }).catch(function (error) {
        console.error(error)
      })
    },
    // saveSurveyAnswer({ commit }, { surveyId, answers }) {
    searchForTravelPlaces({ commit }, { destinationName = 'not specified', url = null } = {}) {
      // TODO 1. Search for the cheapest flights
      // https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=HEL&departure_at=2022-08-19&return_at=2022-08-26&unique=false&sorting=price&direct=false&currency=eur&limit=30&page=1&one_way=true&token=1f372b7e31cfc49a54929bd7ba77469c
      console.log("destinationName 23", destinationName);
      commit("setSearchTravelPlacesLoading", true)

      const departureAt = moment(new Date()).format("YYYY-MM-DD")
      console.log("DATE", departureAt);

      url = "/search-flights-by-destination"
      return axiosClient.get(url, {
          params: {
            departure_at: departureAt,
            destination: destinationName
          }
        }).then((res) => {
        commit("setSearchTravelPlacesLoading", false)
        console.log("123-LOLLERO", res.data)
        commit("setSearchTravelPlaces", res.data.data)

        console.log("PERKELE", utils.convertIATAToCityAndCountry("STN"))
        console.log("PERKELE", utils.convertIATAToCityAndCountry("HEL"))
        console.log("PERKELE", utils.convertIATAToCityAndCountry("AAL"))
        
        return res;
      }).catch(function (error) {
        console.error(error)
      })
    },
    getSurveyBySlug({ commit }, slug) {
      commit("setCurrentSurveyLoading", true);
      return axiosClient
        .get(`/survey-by-slug/${slug}`)
        .then((res) => {
          commit("setCurrentSurvey", res.data);
          commit("setCurrentSurveyLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentSurveyLoading", false);
          throw err;
        });
    },
    saveSurveyAnswer({ commit }, { surveyId, answers }) {
      return axiosClient.post(`/survey/${surveyId}/answer`, { answers });
    },
    register({ commit }, user) {
      return axiosClient.post('/register', user)
      .then(({ data }) => {
        commit("setUser", data)
        return data
      })
    },
    login({ commit }, user) {
      return axiosClient.post('/login', user)
        .then(({ data }) => {
          commit("setUser", data)
          return data
        })
    },
    logout({ commit }) {
      return axiosClient.post("/logout")
        .then(response => {
          commit('logout')
          return response
        })
    }
  },
  mutations: {
    // DASHBOARD LOADING
    dashboardLoading: (state, loading) => {
      state.dashboard.loading = loading;
    },
    // SET DASHBOARD DATA
    setDashboardData: (state, data) => {
      state.dashboard.data = data;
    },
    // CURRENT SURVEY
    setCurrentSurveyLoading: (state, loading) => {
      state.currentSurvey.loading = loading
    },
    setCurrentSurvey: (state, survey) => {
      state.currentSurvey.data = survey.data
    },
    // SURVEYS
    setSurveysLoading: (state, loading) => {
      state.surveys.loading = loading
    },
    setSurveys: (state, surveys) => {
      state.surveys.links = surveys.meta.links
      state.surveys.data = surveys.data
    },
    // POPULAR TRAVEL PLACES
    setPopTravelPlacesLoading: (state, loading) => {
      state.popTravelPlaces.loading = loading
    },
    setPopTravelPlaces: (state, popTravelPlaces) => {
      state.popTravelPlaces.data = popTravelPlaces
    },
    // SEARCH TRAVEL PLACES
    setSearchTravelPlacesLoading: (state, loading) => {
      state.searchTravelPlaces.loading = loading
    },
    setSearchTravelPlaces: (state, searchTravelPlaces) => {
      state.searchTravelPlaces.data = searchTravelPlaces
    },
    // LOG OUT
    logout: state => {
      state.user.token = null
      state.user.data = {}
      sessionStorage.removeItem('TOKEN')
    },
    // SET USER
    setUser: (state, userData) => {
      state.user.token = userData.token
      state.user.data = userData.user
      sessionStorage.setItem('TOKEN', userData.token)
    },
    notify: (state, {message, type}) => {
      state.notification.show = true
      state.notification.type = type
      state.notification.message = message
      setTimeout(() => {
        state.notification.show = false
      }, 3000)
    },
  },
  modules: {}
});

export default store;