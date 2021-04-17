<template>
   <!-- Edit Product -->
    <div class="col-6 offset-3 bg-primary border-radius p-5 cart-list ">
      <h1 style="color: white; font-weight: bold;" class="text-center">
        Edit Product
      </h1>
      <hr class="garis" />
      <form @submit.prevent="edit">
        <div class="mb-3">
          <label class="form-label" style="color: white" >Name :</label>
          <input type="text" class="form-control" v-model="product.name"/>
        </div>
        <div class="mb-3">
          <label class="form-label" style="color: white"
            >Image Url :</label
          >
          <input type="text" class="form-control" v-model="product.image_url"/>
        </div>
        <div class="mb-3">
          <label class="form-label" style="color: white">Price :</label>
          <input type="number" class="form-control" v-model="product.price"/>
        </div>
        <div class="mb-3">
          <label class="form-label" style="color: white">Stock :</label>
          <input type="number" class="form-control" v-model="product.stock"/>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-warning">Update</button>
          <button class="btn btn-danger" @click.prevent='toHomePage'>Cancel</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: 'EditForm',
  // data () {
  //   return {
  //     name: '',
  //     image_url: '',
  //     price: '',
  //     stock: ''
  //   }
  // },
  created () {
    this.fetchOne()
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  methods: {
    edit () {
      // const payload = {
      //   id: this.$route.params.id,
      //   name: this.name,
      //   image_url: this.image_url,
      //   price: this.price,
      //   stock: this.stock
      // }
      this.$store.dispatch('updateProduct')
      this.name = ''
      this.image_url = ''
      this.price = ''
      this.stock = ''
    },
    toHomePage () {
      this.$router.push('/').catch(() => {})
    },
    fetchOne () {
      this.$store.dispatch('fetchOne', this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
