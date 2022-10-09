<template>
  <div class="container-fluid vh-100 d-flex align-items-center">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4 p-3 shadow form-wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.form-wrapper {
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0.5rem;
}
</style>
