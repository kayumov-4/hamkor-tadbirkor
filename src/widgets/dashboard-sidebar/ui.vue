<template>
  <div class="sidebar h-screen bg-[#f7f8f9] min-w-[240px]">
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
              class="sidebar-link-icon w-5 h-5 text-[#989FAD] !mb-0 transition"
            />
            <span class="transition">{{ item.title }}</span>
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

<style lang="css" scoped>
.sidebar-link:hover .sidebar-link-icon {
  color: #02c6b8;
}
.sidebar-link:hover span {
  color: #02c6b8;
}
.sidebar .router-link-exact-active {
  color: #02c6b8;
}
.sidebar .router-link-exact-active .sidebar-link-icon {
  color: #02c6b8;
}
.link-logout {
  position: absolute;
  bottom: 0;
  color: #f9aa9f;
  display: flex;
  align-items: center;
}
.link-logout:hover span {
  color: #f2462f;
}
.link-logout .sidebar-link-icon {
  color: #f9aa9f;
}
.link-logout:hover .sidebar-link-icon {
  color: #f2462f;
}
</style>
