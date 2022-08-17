<script setup lang="ts">
import BaseInput from '~/components/UI/BaseInput.vue'

const signInForm = ref({ email: '', password: '' })
const signIn = () => {
  signInUser(signInForm.value.email, signInForm.value.password)
  signInForm.value = { email: '', password: '' }
}
</script>

<template>
  <form class="bg-white rounded-3" @submit.prevent>
    <div class="mb-3">
      <BaseInput
        v-model="signInForm.email"
        label="Email address"
        type="email"
        placeholder="Type your email"
      />
    </div>
    <div class="mb-3">
      <BaseInput
        v-model="signInForm.password"
        label="Password"
        type="password"
        placeholder="Type your password"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="signIn">
      Log In
    </button>
  </form>
</template>
