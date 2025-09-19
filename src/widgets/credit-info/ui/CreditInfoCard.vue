<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
    <div class="space-y-1 bg-[#f5f7fa] p-[10px] rounded-md">
      <p class="text-xs text-gray-600">Общая сумма:</p>
      <p class="!mt-[5px] text-[14px] font-semibold text-primary-500">
        {{ formatAmount(totalAmount) }}
      </p>
    </div>
    <div
      class="space-y-1 border-[#e9e9e9] border rounded-md p-[10px] flex items-start gap-2"
    >
      <CalendarIcon
        class="sidebar-link-icon w-5 h-5 text-[#989FAD] !mb-0 transition"
      />
      <div>
        <p class="text-xs text-gray-600 leading-[100%]">Дата договора:</p>
        <p class="!mt-[5px] text-sm font-medium">{{ contractDate }}</p>
      </div>
    </div>

    <div
      class="space-y-1 border-[#e9e9e9] border rounded-md p-[10px] flex items-start gap-2"
    >
      <CalendarIcon
        class="sidebar-link-icon w-5 h-5 text-[#989FAD] !mb-0 transition"
      />
      <div>
        <p class="text-xs text-gray-600 leading-[100%]">Дата оплаты:</p>
        <p class="!mt-[5px] text-sm font-medium">{{ paymentDate }}</p>
      </div>
    </div>

    <div class="space-y-1 bg-[#f5f7fa] p-[10px] rounded-md">
      <p class="text-xs text-gray-600">Сумма задолженности</p>
      <p class="!mt-[5px] text-[14px] font-semibold text-[#fb7f1f]">
        {{ formatAmount(debtAmount) }}
      </p>
    </div>

    <div
      class="space-y-1 border-[#e9e9e9] border rounded-md p-[10px] flex items-start gap-2"
    >
      <CalendarIcon
        class="sidebar-link-icon w-5 h-5 text-[#989FAD] !mb-0 transition"
      />
      <div>
        <p class="text-xs text-gray-600 leading-[100%]">Дата завершения:</p>
        <p class="!mt-[5px] text-sm font-medium">{{ completionDate }}</p>
      </div>
    </div>

    <div
      class="space-y-1 border-[#e9e9e9] border rounded-md p-[10px] flex items-start gap-2"
    >
      <NextPaymentIcon
        class="sidebar-link-icon w-5 h-5 text-[#989FAD] !mb-0 transition"
      />
      <div>
        <p class="text-xs text-gray-600 leading-[100%]">Следующая оплата:</p>
        <p class="!mt-[5px] text-[14px] font-semibold text-blue-500">
          {{ formatAmount(nextPayment) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import CalendarIcon from "../icons/calendar.svg?component";
import NextPaymentIcon from "../icons/next-payment.svg?component";

const props = defineProps({
  totalAmount: { type: Number, default: 10000000 },
  debtAmount: { type: Number, default: 5000000 },
  nextPayment: { type: Number, default: 1000000 },
  contractDate: { type: String, default: "12.02.2025" },
  completionDate: { type: String, default: "12.02.2026" },
  paymentDate: { type: String, default: "12.03.2025" },
});

const formatAmount = (amount) => {
  return new Intl.NumberFormat("ru-RU").format(amount) + " сум";
};
</script>
