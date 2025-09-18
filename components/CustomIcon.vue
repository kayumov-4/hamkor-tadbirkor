<template>
  <component
    v-if="name"
    :is="`${name}`"
    :style="{ width: width, height: height }"
    :filled="filled"
  />
</template>

<script>
export default {
  props: {
    name: { type: String, default: "icon-flowers-water" },
    width: { type: String, default: "14px" },
    height: { type: String, default: "14px" },
    filled: { type: Boolean, default: true },
  },
};
</script>
