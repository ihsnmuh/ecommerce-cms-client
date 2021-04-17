<template>
<div style="text-align:center">
  <!-- <h1>Halaman Detail</h1> -->
  <h1 style="font-weight:bold">{{ product.name }}</h1><br>
  <div class="container ">
      <div class="row">
          <div class="col-6">
            <img
                :src="product.image_url"
                :alt="product.name"
                width="500px"
                />
          </div>
          <div class="col-6 bg-primary">
              <div class="container">
                <h3 class="mt-5" style="color: white; font-weight: bold">Detail info</h3>
                <hr class="garis">
                <div class="mb-3">
                    <div class="row">
                        <div class="col-3">
                            <label class="form-label" style="color: white; font-size:25px">Price :</label>
                        </div>
                        <div class="col-9">
                            <input type="number" class="form-control" :value="product.price" disabled/>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="row">
                        <div class="col-3">
                            <label class="form-label" style="color: white; font-size:25px">Stock :</label>
                        </div>
                        <div class="col-9">
                            <input type="number" class="form-control" :value="product.stock" disabled/>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <button class="btn btn-warning" @click.prevent='toHomePage'>Back</button>
                </div>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Detail',
  created () {
    //   Mengambil data berdasarkan id dan di fetch dengan id
    this.$store.dispatch('fetchOne', this.$route.params.id)
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  methods: {
    toHomePage () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style>

</style>
