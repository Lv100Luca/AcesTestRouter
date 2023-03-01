<script setup>
// const props = defineProps(['modelValue', 'placeholder'])
const props = defineProps({modelValue: String, placeholder: String})
const emits = defineEmits(['update:modelValue', ''])
</script>

<template>
  <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"

  />
</template>