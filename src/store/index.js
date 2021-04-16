import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    FETCH_PRODUCTS (state, data) {
      state.products = data
    }
  },
  actions: {
    fetchProducts (context, payload) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCH_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    postProduct (context, payload) {
      axios
        .post('/products', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(`${data.name} sudah ditambahkan`)
          context.dispatch('fetchProducts')
          // balik lagi ke home
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      console.log(payload.id, '<<<<< ID yang mau didelete')
      axios
        .delete(`/products/${payload.id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log('Product berhasil didelete')
          context.dispatch('fetchProducts')
          // balik lagi ke home
          router.push('/').catch(() => {})
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
