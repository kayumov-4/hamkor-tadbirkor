<template>
  <div>
    <div class="font-medium text-[14px] leading-5">Tug’ilgan sana</div>
    <div
      class="px-[16px] border-1 border-[var(--color-grey-border)] mt-3 rounded-xl overflow-hidden flex items-center gap-[8px] bg-[var(--color-white)]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66669 1.66666V4.16666"
          stroke="#B9BDC7"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3333 1.66666V4.16666"
          stroke="#B9BDC7"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.91669 7.575H17.0834"
          stroke="#B9BDC7"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.5 7.08333V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08333C2.5 4.58333 3.75 2.91666 6.66667 2.91666H13.3333C16.25 2.91666 17.5 4.58333 17.5 7.08333Z"
          stroke="#B9BDC7"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.99626 11.4167H10.0037"
          stroke="#B9BDC7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.91191 11.4167H6.91939"
          stroke="#B9BDC7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.91191 13.9167H6.91939"
          stroke="#B9BDC7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <UInput
        v-model="inputValue"
        class="border-0 text-[14px]"
        :placeholder="placeholder"
        :class="class"
        :disabled="disabled"
        :ui="ui"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const ui = computed(() => ({
  wrapper: "relative",
  base: "h-[48px] text-[var(--color-gray-500)] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 placeholder-gray-400 text-sm ",
  rounded: "rounded-lg",
  placeholder: "text-gray-400",
  border: "",
  variant: {
    solid: "bg-white ",
    outline: "bg-white ",
  },
}));
</script>
