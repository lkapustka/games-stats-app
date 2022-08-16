<script setup lang="ts">
const { nanoID } = useNanoID()

defineProps<{
  label?: string
  modelValue?: string | number
  error?: string
}>()

const emit = defineEmits<{ (e: 'update:modelValue', id: string): void }>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <label :for="nanoID" class="form-label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :id="nanoID"
    class="form-control"
    :value="modelValue"
    :aria-describedby="error ? `${nanoID}-error` : undefined"
    :aria-invalid="error ? true : undefined"
    @input="onInput"
  />
  <p v-if="error" :id="`${nanoID}-error`" aria-live="assertive">
    {{ error }}
  </p>
</template>
