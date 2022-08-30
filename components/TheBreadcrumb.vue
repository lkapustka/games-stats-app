<script setup lang="ts">
import { RouteLocation } from 'vue-router'

const route = useRoute()
const router = useRouter()

const crumbs = computed(() => {
  const crumbs: (RouteLocation & {
    href: string
    isLast: boolean
    title: string
  })[] = []
  const fullPath = route.fullPath
  const params = fullPath.substring(1).split('/')

  if (fullPath === '/') {
    crumbs.push({ isLast: true, title: 'Home', ...router.resolve('/') })
    return crumbs
  } else {
    crumbs.push({ isLast: false, title: 'Home', ...router.resolve('/') })
  }

  let path = ''
  params.forEach((param) => {
    path = `${path}/${param}`
    const match = router.resolve(path)

    if (match.name) {
      crumbs.push({
        isLast: fullPath === path,
        title: param.replace(/-/g, ' '),
        ...match,
      })
    }
  })

  return crumbs
})
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumb-item">
        <NuxtLink v-if="!crumb.isLast" :to="crumb.href">{{
          crumb.title
        }}</NuxtLink>
        <span v-else class="bredcrumb-item active" aria-current="page">{{
          crumb.title
        }}</span>
      </li>
    </ol>
  </nav>
</template>
