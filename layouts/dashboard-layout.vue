<template>
  <div class="w-full mx-auto min-h-[100vh] flex bg-gray-50">
    <Sidebar />
    <div class="w-full">
      <Topbar />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/src/widgets/dashboard-sidebar/ui.vue";
import Topbar from "@/src/widgets/dashboard-topbar/ui.vue";
</script>

<style lang="scss" scoped></style>
