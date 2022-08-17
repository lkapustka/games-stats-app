<script setup lang="ts">
import BaseInput from '~/components/UI/BaseInput.vue'

const registerForm = ref({ email: '', password: '' })
const registerMessage = ref('')

const register = async () => {
  const credentials = await createUser(
    registerForm.value.email,
    registerForm.value.password
  )
  registerForm.value = { email: '', password: '' }

  if (credentials) {
    registerMessage.value = `Successfully registered: ${credentials.user.email}`
    setTimeout(() => {
      registerMessage.value = ''
    }, 3000)
  }
}
</script>

<template>
  <form class="bg-white rounded-3" @submit.prevent>
    <div class="mb-3">
      <BaseInput
        v-model="registerForm.email"
        label="Email address"
        type="email"
        placeholder="Type your email"
      />
    </div>
    <div class="mb-3">
      <BaseInput
        v-model="registerForm.password"
        label="Password"
        type="password"
        placeholder="Type your password"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click="register">
      Create Account
    </button>
  </form>
</template>
