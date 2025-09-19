<template>
  <UButton
    :icon="icon"
    :size="size"
    :color="color"
    :variant="variant"
    :label="label"
    :loading="loading"
    :disabled="disabled"
    :block="block"
    :ui="ui"
    :class="class"
    v-bind="$attrs"
  >
    <template #default>
      <slot />
    </template>
  </UButton>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    default: undefined
  },
  size: {
    type: String,
    default: 'md'
  },
  color: {
    type: String,
    default: 'primary'
  },
  variant: {
    type: String,
    default: 'solid'
  },
  label: {
    type: String,
    default: undefined
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
});


const ui = computed(() => ({
  base: 'transition-transform transform hover:scale-105',
  size: {
    'xl': 'text-base',
  },
  rounded: 'rounded-xl',
  font: 'font-medium',
  shadow: 'shadow-md hover:shadow-lg',
  color: {
    primary: {
      solid: 'bg-indigo-600 hover:bg-indigo-700',
    }
  }
}));
</script>