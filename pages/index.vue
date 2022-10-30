<script setup lang="ts">
const firebaseUser = useFirebaseUser()
const signOut = async () => await signOutUser()
</script>

<template>
  <NuxtLayout name="dashboard"> </NuxtLayout>
</template>

<style lang="scss" scoped></style>
