<template>
  <div class="sidebar h-screen bg-grey-50 min-w-[240px]">
    <div class="h-[76px] flex items-center pl-6">
      <nuxt-link :to="localePath(`/`)">
        <CustomIcon name="icon-bwlogo" class="!w-12 !h-8 max-md:!h-6" />
      </nuxt-link>
    </div>
    <div class="p-6 h-[calc(100vh-76px)]">
      <ul class="space-y-6 h-[100%] relative">
        <li v-for="item in sidebarMenu" :key="item.title">
          <nuxt-link
            :to="item.route"
            class="sidebar-link flex items-center gap-3 text-grey-900 hover:text-primary-500 hover:font-bold transition"
            :class="item.class"
            active-class="text-primary-500 font-bold"
          >
            <component
              :is="item.icon"
              class="sidebar-link-icon w-5 h-5 text-[#989FAD] !mb-0"
            />
            <span>{{ item.title }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { sidebarMenu } from "./constants";
import { useLocalePath } from "#i18n";

const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
.sidebar-link:hover .sidebar-link-icon {
  @apply text-primary-500;
}
.sidebar .router-link-exact-active .sidebar-link-icon {
  @apply text-primary-500;
}
.link-logout {
  @apply absolute bottom-0 text-[#F9AA9F] flex items-center;
}
.link-logout:hover {
  @apply text-[#F2462F];
}
.link-logout .sidebar-link-icon {
  @apply text-[#F9AA9F] transition;
}
.link-logout:hover .sidebar-link-icon {
  @apply text-[#F2462F];
}
</style>
