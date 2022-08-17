<script setup lang="ts">
import FormRegister from '~/components/FormRegister.vue'
</script>

<template>
  <NuxtLayout name="auth">
    <h2 class="text-center">Register</h2>
    <FormRegister />
    <NuxtLink to="/" class="d-block mt-3 text-center">Home</NuxtLink>
  </NuxtLayout>
</template>
