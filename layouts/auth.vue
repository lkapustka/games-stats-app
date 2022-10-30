<template>
  <div class="container-fluid vh-100 d-flex align-items-center auth-background">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4 p-3 shadow form-wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.auth-background {
  background-image: linear-gradient(
    to right bottom,
    #191452,
    #213375,
    #285499,
    #3076bb,
    #3c99dc
  );
}
.form-wrapper {
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0.5rem;
}
</style>
