<template>
    <!-- NAVBAR -->
  <nav
    class="navbar sticky-top bg-primary navbar-expand-lg navbar-dark shadow-lg rounded"
  >
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div class="col-2">
          <a class="navbar-brand" href="#" style="font-weight: bold">
            CMS Barokah Gadget
          </a>
        </div>
        <div class="col-2"></div>
        <div class="col-8 text-end">
          <button class="btn btn-light rounded" @click="logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style>

</style>
