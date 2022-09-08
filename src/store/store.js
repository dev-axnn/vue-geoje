import { createStore } from 'vuex';
import axios from 'axios';
// vuex 는 데이터를 보관, 업데이트, 참조, 갱신한다. (공통 데이터 저장소 state.)

export default createStore({
  state: {
    menuDataArr: [],
    visualDataArr: [],
    comuInfoArr: [],
    comuNewsArr: [],
    galleryArr: [],
    movieData: []
  },

  actions: {
    fetchGetMenu({commit}){
      axios.get('./data/menu.json')
      .then(res => {
        // console.log(res.data)
        commit('UPDATE_MENU_DATA', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchGetVisual({commit}){
      axios.get('./data/visual.json')
      .then(res => {
        commit('UPDATE_VISUAL_DATA', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchComuInfo({commit}){
      axios.get('./data/comuinfo.json')
      .then(res => {
        commit('UPDATE_INFO_DATA', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchComuNews({commit}){
      axios.get('./data/comunews.json')
      .then(res => {
        commit('UPDATE_NEWS_DATA', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchGallery({commit}){
      axios.get('./data/gallery.json')
      .then(res => {
        commit('UPDATE_GAL_DATA', res.data)
      })
      .catch(err => console.log(err))
    },
    fetchGetMovie({commit}){
      axios.get('./data/movie.json')
      .then(res => {
        commit('UPDATE_MOVIE_DATA', res.data)
      })
      .catch(err => console.log(err))
    }
  },

  mutations: {
    // Menu Data(state) Update
    UPDATE_MENU_DATA(state, payload){
      state.menuDataArr = payload
    },
    UPDATE_VISUAL_DATA(state, payload){
      state.visualDataArr = payload
    },
    UPDATE_INFO_DATA(state, payload){
      state.comuInfoArr = payload
    },
    UPDATE_NEWS_DATA(state, payload){
      state.comuNewsArr = payload
    },
    UPDATE_GAL_DATA(state, payload){
      state.galleryArr = payload
    },
    UPDATE_MOVIE_DATA(state, payload){
      state.movieData = payload
    }
  },

  getters: {
    menuData(state){
      return state.menuDataArr
    },
    visualData(state){
      return state.visualDataArr
    },
    infoData(state){
      return state.comuInfoArr
    },
    newsData(state){
      return state.comuNewsArr
    },
    galleryData(state){
      return state.galleryArr
    },
    movieData(state){
      return state.movieData
    }
  }
});