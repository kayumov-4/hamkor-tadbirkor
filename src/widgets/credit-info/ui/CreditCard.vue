<template>
  <div
    :class="[
      'rounded-xl p-4 shadow-lg w-full mx-auto',
      selected
        ? 'bg-primary-500 text-white'
        : 'bg-white text-gray-800 border border-[#e9e9e9]',
    ]"
  >
    <div class="mb-3">
      <p
        :class="[
          'text-[12px] mb-1',
          selected ? 'text-white/90' : 'text-gray-600',
        ]"
      >
        Общая сумма:
      </p>
      <p
        :class="[
          'text-[16px] font-bold',
          selected ? 'text-white' : 'text-primary-500',
        ]"
      >
        {{ totalAmount }}
      </p>
    </div>

    <hr
      class="mb-3"
      :class="[selected ? 'border-white/20' : 'border-[#e9e9e9]']"
    />
    <div class="grid grid-cols-2 gap-4 mb-3">
      <div>
        <p
          :class="[
            'text-[12px] mb-1',
            selected ? 'text-white/90' : 'text-gray-600',
          ]"
        >
          Дата договора:
        </p>
        <p
          :class="[
            'text-[16px] font-semibold',
            selected ? 'text-white' : 'text-gray-800',
          ]"
        >
          {{ contractDate }}
        </p>
      </div>
      <div>
        <p
          :class="[
            'text-[12px] mb-1',
            selected ? 'text-white/90' : 'text-gray-600',
          ]"
        >
          Дата завершения:
        </p>
        <p
          :class="[
            'text-[16px] font-semibold',
            selected ? 'text-white' : 'text-gray-800',
          ]"
        >
          {{ completionDate }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <p
          :class="[
            'text-[12px] mb-1',
            selected ? 'text-white/90' : 'text-gray-600',
          ]"
        >
          Следующая оплата:
        </p>
        <p
          :class="[
            'text-[16px] font-semibold',
            selected ? 'text-white' : 'text-primary-500',
          ]"
        >
          {{ nextPayment }}
        </p>
      </div>
      <div>
        <p
          :class="[
            'text-[12px] mb-1',
            selected ? 'text-white/90' : 'text-gray-600',
          ]"
        >
          Дата оплаты:
        </p>
        <p
          :class="[
            'text-[16px] font-semibold',
            selected ? 'text-white' : 'text-gray-800',
          ]"
        >
          {{ paymentDate }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
div p:last-child {
  margin-top: 5px !important;
}
</style>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    selected?: boolean;
    totalAmount?: string;
    contractDate?: string;
    completionDate?: string;
    nextPayment?: string;
    paymentDate?: string;
  }>(),
  {
    selected: false,
    totalAmount: "100 000 000 сум",
    contractDate: "12.02.2025",
    completionDate: "12.02.2026",
    nextPayment: "7 000 000 сум",
    paymentDate: "12.03.2025",
  }
);
</script>
