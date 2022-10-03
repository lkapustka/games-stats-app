<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'

const sidenavVisibility = useSidenavVisibility()
</script>

<template>
  <div>
    <aside>
      <TheSideNav :is-visible="sidenavVisibility" />
    </aside>
    <main>
      <TheHeader />
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
aside {
  position: fixed;
}

@media (min-width: 1200px) {
}
</style>
