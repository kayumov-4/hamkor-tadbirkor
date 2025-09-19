<template>
    <UFormField :label="label" :required="required">
      <UInput 
        v-model="inputValue"
        class="border-1 block bg-[var(--color-white)] border-[var(--color-grey-border)] mt-3 rounded-xl overflow-hidden pl-[5px] text-[14px]"
        :placeholder="placeholder"
        :type="type"
        :class="class"
        :disabled="disabled"
        :ui="ui" />
    </UFormField>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  },
  disabled:{
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});


const ui = computed(() => ({
  base: 'h-[48px] px-[8px] text-[var(--color-grey-500)] block disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 placeholder-gray-400 dark:placeholder-gray-500 dark:bg-gray-800 text-sm ',
  rounded: 'rounded-lg',
  placeholder: 'text-[var(--color-grey-500)] dark:text-gray-500',
  border: "",
  variant: {
    solid: 'bg-white dark:bg-gray-900  dark:border-gray-700 ',
    outline: 'bg-white dark:bg-gray-900  dark:border-gray-700 ',
  }
}));
</script>
