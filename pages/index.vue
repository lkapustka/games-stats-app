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

    <NuxtLink to="/login" class="btn btn-primary w-100 my-3">Log In</NuxtLink>
    <NuxtLink to="/register" class="btn btn-primary w-100">Register</NuxtLink>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
