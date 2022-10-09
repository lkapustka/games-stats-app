<script setup lang="ts">
import { VNodeRef } from 'vue'
import TheHeader from '~/components/TheHeader.vue'

const sidenavVisibility = useSidenavVisibility()

const mainElement = ref<VNodeRef | undefined | null>(null)
const mainMarginLeft = useCssVar('--margin-left', mainElement)

const sidenavWidth = useSidenavWidth()
const sidenavMargin = ref(1) // in rem
watch(sidenavWidth, () => {
  const sidenavWidthInNumber = Number(sidenavWidth.value.match(/^\d+/)?.[0])
  mainMarginLeft.value = sidenavMargin.value + sidenavWidthInNumber + 'rem'
})
</script>

<template>
  <div class="background">
    <span class="w-100 position-absolute background-top"></span>
    <aside>
      <TheSideNav :is-visible="sidenavVisibility" />
    </aside>
    <main ref="mainElement" class="main">
      <TheHeader />
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
aside {
  position: fixed;
}
.background {
  background-image: linear-gradient(
    to right bottom,
    #191452,
    #213375,
    #285499,
    #3076bb,
    #3c99dc
  );
}
.background-top {
  min-height: 300px;
  background-color: rgb(162, 216, 162);
}

@media (min-width: 1200px) {
  .main {
    margin-left: var(--margin-left, 21rem);
  }
}
</style>
