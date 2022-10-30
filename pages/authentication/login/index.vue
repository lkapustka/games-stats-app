<script setup lang="ts">
import FormLogin from '../../../components/FormLogin.vue'
</script>

<template>
  <NuxtLayout name="auth">
    <h2 class="text-center">Login</h2>
    <FormLogin />
    <NuxtLink to="/authentication" class="d-block mt-3 text-center"
      >Back</NuxtLink
    >
  </NuxtLayout>
</template>
