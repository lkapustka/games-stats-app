<script setup lang="ts">
const firebaseUser = useFirebaseUser()
const signOut = async () => await signOutUser()
</script>

<template>
  <NuxtLayout name="auth">
    <button v-if="firebaseUser" class="btn btn-danger w-100" @click="signOut">
      Sign Out
    </button>
    <div v-if="!firebaseUser" class="text-center">User is signed out</div>

    <NuxtLink to="/authentication/login" class="btn btn-primary w-100 my-3"
      >Log In</NuxtLink
    >
    <NuxtLink to="/authentication/register" class="btn btn-primary w-100"
      >Register</NuxtLink
    >
    <NuxtLink to="/" class="btn btn-primary mt-3 w-100">Back to Home</NuxtLink>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
