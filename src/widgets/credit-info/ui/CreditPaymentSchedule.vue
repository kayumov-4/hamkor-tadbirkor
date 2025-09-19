<template>
  <div class="overflow-x-auto">
    <table class="w-full border border-[#e9e9e9]">
      <thead>
        <tr class="bg-white">
          <th class="text-center p-3 text-xs font-medium text-gray-600">No</th>
          <th class="text-left p-3 text-xs font-medium text-gray-600">
            Дата платежа
          </th>
          <th class="text-left p-3 text-xs font-medium text-gray-600">
            Сумма платежа
          </th>
          <th class="text-left p-3 text-xs font-medium text-gray-600">
            Основной долг
          </th>
          <th class="text-left p-3 text-xs font-medium text-gray-600">
            Проценты
          </th>
          <th class="text-left p-3 text-xs font-medium text-gray-600">
            Сумма задолженности по ос. долгу
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="payment in payments"
          :key="payment.no"
          class="border border-[#e9e9e9] even:bg-white odd:bg-[#e9e9e9] transition"
        >
          <td class="p-3 text-xs text-center font-medium">{{ payment.no }}</td>
          <td class="p-3 text-xs font-medium">{{ payment.date }}</td>
          <td class="p-3 text-xs font-medium">
            {{ formatAmount(payment.amount) }}
          </td>
          <td class="p-3 text-xs font-medium">
            {{ formatAmount(payment.principal) }}
          </td>
          <td class="p-3 text-xs font-medium">
            {{ formatAmount(payment.interest) }}
          </td>
          <td class="p-3 text-xs font-medium">
            {{ formatAmount(payment.remainingDebt) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  payments: {
    type: Array,
    default: () => [
      {
        no: 1,
        date: "12/02/2025",
        amount: 100000000,
        principal: 90000000,
        interest: 10000000,
        remainingDebt: 100000000000,
      },
      {
        no: 2,
        date: "12/03/2025",
        amount: 100000000,
        principal: 90000000,
        interest: 10000000,
        remainingDebt: 100000000000,
      },
      {
        no: 3,
        date: "12/04/2025",
        amount: 100000000,
        principal: 90000000,
        interest: 10000000,
        remainingDebt: 100000000000,
      },
      {
        no: 4,
        date: "12/05/2025",
        amount: 100000000,
        principal: 90000000,
        interest: 10000000,
        remainingDebt: 100000000000,
      },
      {
        no: 5,
        date: "12/06/2025",
        amount: 100000000,
        principal: 90000000,
        interest: 10000000,
        remainingDebt: 100000000000,
      },
      {
        no: 6,
        date: "12/07/2025",
        amount: 100000000,
        principal: 90000000,
        interest: 10000000,
        remainingDebt: 100000000000,
      },
      {
        no: 7,
        date: "12/08/2025",
        amount: 100000000,
        principal: 90000000,
        interest: 10000000,
        remainingDebt: 100000000000,
      },
      {
        no: 8,
        date: "12/09/2025",
        amount: 100000000,
        principal: 90000000,
        interest: 10000000,
        remainingDebt: 100000000000,
      },
    ],
  },
});

const formatAmount = (amount) => {
  return new Intl.NumberFormat("ru-RU").format(amount) + " сум";
};
</script>
