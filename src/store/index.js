import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    FETCH_PRODUCTS (state, data) {
      state.products = data
    },
    FETCH_ONE_PRODUCTS (state, data) {
      state.product = data
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
    fetchOne (context, id) {
      axios
        .get(`/products/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCH_ONE_PRODUCTS', data)
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

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Login in successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please input correctly',
            text: `${err.response.data.message}`
          })
        })
    },
    logout (context) {
      localStorage.removeItem('access_token')
      router.push('/login')

      // Sweetalert
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Logout in successfully'
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

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Add Product is successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please input correctly',
            text: `${err.response.data.message}`
          })
        })
    },
    updateProduct (context) {
      // console.log(this.state.product);
      const dataBaru = {
        id: this.state.product.id,
        name: this.state.product.name,
        image_url: this.state.product.image_url,
        price: this.state.product.price,
        stock: this.state.product.stock
      }
      axios
        .put(`/products/${dataBaru.id}`, dataBaru, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          console.log(`${data.name} sudah diUpdate`)
          context.dispatch('fetchProducts')
          // balik lagi ke home
          router.push('/')

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Update Product is successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please input correctly',
            text: `${err.response.data.message}`
          })
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

          // Sweetalert
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Delete Product is successfully'
          })
        })
        .catch(err => {
          console.log(err)

          // Sweetalert
          Swal.fire({
            icon: 'error',
            title: 'Please input correctly',
            text: `${err.response.data.message}`
          })
        })
    }
  },
  modules: {
  }
})
