<template>
    <div class="overflow-y-scroll max-h-[calc(100vh-76px)] flex justify-center">
        <PhysicalProfile />
    </div>
</template>

<script setup>
import PhysicalProfile from "~/src/widgets/physical-profile/ui.vue";

definePageMeta({
  layout: "dashboard-layout",
});
</script>

<style lang="scss" scoped></style>
