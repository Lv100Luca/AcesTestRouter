<script setup lang="ts">
const props = defineProps({modelValue: String, placeholder: String});
const emits = defineEmits(['update:modelValue']);
</script>

<template>
  <input
      :placeholder="props.placeholder"
         :value="props.modelValue"
         @input="$emit('update:modelValue', $event.target.value)"/>
</template>
