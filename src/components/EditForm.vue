<template>
   <!-- Edit Product -->
      <div>
        <h1 style="color: white; font-weight: bold;" class="text-center">
          Edit Product
        </h1>
        <hr class="garis" />
        <form action="">
          <div class="mb-3">
            <label class="form-label" style="color: white">Name :</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label" style="color: white"
              >Image Url :</label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label" style="color: white">Price :</label>
            <input type="number" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label" style="color: white">Stock :</label>
            <input type="number" class="form-control" />
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-warning">Submit</button>
            <button type="submit" class="btn btn-danger">Cancel</button>
          </div>
        </form>
      </div>
</template>

<script>
export default {
  name: 'EditForm'
}
</script>

<style>

</style>
