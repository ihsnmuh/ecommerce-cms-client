<template>
  <div class="home">
    <div style="text-align: center;">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>

          <!-- Main Page -->
      <div class="container-fluid mt-5 shadow">
        <div class="row">
            <div class="col-2 position-sticky bg-white border-radius">
                <ul class="nav flex-column p-3 mt-3">
                <li class="nav-item mt-3">
                    <a class="nav-link huruf-biru" href="#">
                    <i
                        class="bi bi-basket3-fill"
                        style="font-size: 1.2rem; color: #0d6efd;"
                    ></i>
                    <router-link to="/ListTabelProduct"> Product</router-link>
                    </a>
                </li>
                <li class="nav-item mt-3">
                    <a class="nav-link huruf-biru" href="#">
                    <i
                        class="bi bi-file-earmark-plus-fill"
                        style="font-size: 1.2rem; color: #0d6efd;"
                    ></i>
                    <router-link to="/AddForm"> Add Product</router-link>
                    </a>
                </li>
                </ul>
            </div>
            <div class="col-10 bg-primary border-radius p-5 cart-list ">
                <h1 style="color: white; font-weight: bold;" class="text-center">
                  Product List
                </h1>
                <hr class="garis" />
                <table class="table table-hover bg-light pageDefault">
                  <thead class="table-dark overflow-auto">
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <DataProduct
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    ></DataProduct>
                  </tbody>
                </table>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DataProduct from '../components/DataProduct'

export default {
  name: 'Home',
  components: {
    DataProduct
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
