<template>
  <div class="flex gap-6 pl-5 pr-5 max-h-[calc(100vh-76px)] overflow-y-scroll">
    <div
      class="w-1/4 max-w-[384px] min-w-[384px] p-6 bg-white rounded-lg rounded-b-none shadow min-h-full overflow-y-scroll"
    >
      <h3 class="text-[20px] font-semibold">Mavjud kreditlar</h3>
      <div class="mt-6 flex flex-col gap-4">
        <CreditCard :selected="true" />
        <CreditCard />
        <CreditCard />
        <CreditCard />
        <CreditCard />
      </div>
    </div>
    <CreditInfo />
  </div>
</template>

<script setup>
import CreditCard from "~/src/widgets/credit-info/ui/CreditCard.vue";
import CreditInfo from "~/src/widgets/credit-info/index.vue";

definePageMeta({
  layout: "dashboard-layout",
});
</script>

<style lang="scss" scoped></style>
