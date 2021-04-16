<template>
<div>
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
</template>
<script>
import DataProduct from '../components/DataProduct'

export default {
  name: 'TabelData',
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

<style>

</style>
