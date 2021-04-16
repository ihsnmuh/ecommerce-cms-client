<template>
        <!-- Add Product -->
    <div class="col-6 offset-3 bg-primary border-radius p-5 cart-list ">
      <h1 style="color: white; font-weight: bold;" class="text-center">
        Add Product
      </h1>
      <hr class="garis" />
      <form @submit.prevent="add">
        <div class="mb-3">
          <label class="form-label" style="color: white" >Name :</label>
          <input type="text" class="form-control" v-model="name"/>
        </div>
        <div class="mb-3">
          <label class="form-label" style="color: white"
            >Image Url :</label
          >
          <input type="text" class="form-control" v-model="image_url"/>
        </div>
        <div class="mb-3">
          <label class="form-label" style="color: white">Price :</label>
          <input type="number" class="form-control" v-model="price"/>
        </div>
        <div class="mb-3">
          <label class="form-label" style="color: white">Stock :</label>
          <input type="number" class="form-control" v-model="stock"/>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-warning">Submit</button>
          <button class="btn btn-danger" @click.prevent='toHomePage'>Cancel</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    add () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('postProduct', payload)
      this.name = ''
      this.image_url = ''
      this.price = ''
      this.stock = ''
    },
    toHomePage () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style>

</style>
