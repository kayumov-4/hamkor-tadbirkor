<template>
  <div
    class="flex flex-col items-center gap-6 border-[#e9e9e9] border rounded-md p-4"
  >
    <div class="w-50 h-50">
      <Pie :data="chartData" :options="chartOptions" />
    </div>
    <div class="flex gap-6 items-center w-full justify-between">
      <div class="flex items-center gap-3">
        <div class="w-2 h-2 bg-green-400 rounded-full"></div>
        <div>
          <p class="text-xs text-gray-600">Погашено</p>
          <p class="text-xs font-semibold !mt-[5px]">
            {{ formatAmount(paidAmount) }}
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
        <div>
          <p class="text-xs text-gray-600">Задолженность</p>
          <p class="text-xs font-semibold !mt-[5px]">
            {{ formatAmount(debtAmount) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const props = defineProps({
  paidAmount: { type: Number, default: 75000000 },
  debtAmount: { type: Number, default: 25000000 },
});

const formatAmount = (amount) => {
  return new Intl.NumberFormat("ru-RU").format(amount) + " сум";
};

const chartData = computed(() => {
  const total = props.paidAmount + props.debtAmount;
  const paidPercentage = Math.round((props.paidAmount / total) * 100);
  const debtPercentage = Math.round((props.debtAmount / total) * 100);

  return {
    datasets: [
      {
        data: [props.paidAmount, props.debtAmount],
        backgroundColor: ["#9BDFC4", "#F99BAB"],
        borderWidth: 0,
      },
    ],
  };
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: "white",
      font: {
        size: 24,
        weight: "bold",
      },
      formatter: (value, ctx) => {
        const total = ctx.chart.data.datasets[0].data.reduce(
          (a, b) => a + b,
          0
        );
        return Math.round((value / total) * 100) + "%";
      },
      anchor: "center",
      align: "center",
    },
  },
};
</script>
