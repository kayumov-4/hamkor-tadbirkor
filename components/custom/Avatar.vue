<template>
  <div class="flex justify-center items-center">
    <img class=" rounded-full" :src="src" alt="Avatar" :width="width" :height="height">
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: 'https://hamroh.biznes-portal.uz/services/platon-core/web/v1/store/file/new-landing/intro-person-2.png'
  },
  alt: {
    type: String,
    default: 'Аватар пользователя'
  },
  size: {
    type: String,
    default: 'lg'
  },
  chip: {
    type: [Boolean, Object],
    default: () => ({ color: 'primary', position: 'top-right' })
  },
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  }
});

const ui = computed(() => ({
  size: {
    '2xl': 'h-16 w-16 text-lg',
    '3xl': 'h-20 w-20 text-xl'
  },
  chip: {
    size: '1.5',
    position: 'top-right'
  }
}));
</script>

<style scoped>
</style>