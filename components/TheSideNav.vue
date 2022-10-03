<script setup lang="ts">
import { VNodeRef } from 'vue'

defineProps<{
  isVisible: boolean
}>()

const sidenavElement = ref<VNodeRef | undefined | null>(null)
const widthProperty = useCssVar('--width', sidenavElement)

const sidenavWidth = useSidenavWidth()
watch(sidenavWidth, () => {
  widthProperty.value = sidenavWidth.value
})
</script>

<template>
  <nav
    ref="sidenavElement"
    :class="{ 'sidenav--visible': isVisible }"
    class="sidenav my-3 ms-3 p-3 rounded-4"
  >
    <p>Sidenav</p>
  </nav>
</template>

<style scoped lang="scss">
.sidenav {
  top: 0;
  height: 90vh;
  width: var(--width, 20rem);
  border: 1px solid #000;
  background-color: #fff;
}

@media (max-width: 1200px) {
  .sidenav {
    position: fixed;
    left: -21rem;
  }
  .sidenav--visible {
    transform: translateX(21rem);
  }
}
</style>
