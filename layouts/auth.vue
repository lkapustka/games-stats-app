<template>
  <div class="container-fluid background">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4 p-3 shadow form-wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.background {
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    #172a4d,
    #0c295c,
    #04276b,
    #0c2378,
    #1f1b83
  );
}
.form-wrapper {
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0.5rem;
}
</style>
