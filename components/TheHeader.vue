<script setup lang="ts">
import Breadcrumb from './TheBreadcrumb.vue'

const sidenavVisibility = useSidenavVisibility()
const toggleSidenav = useToggle(sidenavVisibility)

const sidenavWidth = useSidenavWidth()
const toggleWidth = () => {
  sidenavWidth.value === '20rem'
    ? (sidenavWidth.value = '10rem')
    : (sidenavWidth.value = '20rem')
}

const isExtraLargeScreen = useMediaQuery('(min-width: 1200px)')
const handleSidenav = () => {
  if (isExtraLargeScreen.value) {
    toggleWidth()
  } else {
    sidenavWidth.value = '20rem'
    toggleSidenav()
  }
}
</script>

<template>
  <header class="header p-3">
    <Breadcrumb />
    <div class="navbar p-0 justify-content-end">
      <a href="#" class="navbar-brand d-flex">
        <img src="../assets/icons/user.svg" alt="" width="24" height="24" />
      </a>
      <a href="#" class="navbar-brand d-flex" @click="handleSidenav()">
        <img src="../assets/icons/menu.svg" alt="" width="24" height="24" />
      </a>
      <a href="#" class="navbar-brand d-flex">
        <img src="../assets/icons/settings.svg" alt="" width="24" height="24" />
      </a>
      <a href="#" class="navbar-brand d-flex m-0">
        <img src="../assets/icons/bell.svg" alt="" width="24" height="24" />
      </a>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}
</style>
