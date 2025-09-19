<script setup lang="ts">
import CreditInfoCard from "./ui/CreditInfoCard.vue";
import CreditPaymentChart from "./ui/CreditPaymentChart.vue";
import CreditPaymentSchedule from "./ui/CreditPaymentSchedule.vue";
</script>

<template>
  <div
    class="w-full p-6 bg-white rounded-lg rounded-b-none shadow min-h-full overflow-y-scroll"
  >
    <h3 class="text-[20px] font-semibold">Kredit to'g'risida ma'lumot</h3>
    <div class="mt-6 flex flex-col gap-4">
      <div class="flex gap-6">
        <div class="mb-8 flex flex-col gap-8 w-[65%]">
          <CreditInfoCard
            :total-amount="10000000"
            :debt-amount="5000000"
            :next-payment="1000000"
            contract-date="12.02.2025"
            completion-date="12.02.2026"
            payment-date="12.03.2025"
          />
          <div>
            <h2 class="text-xl font-semibold !mb-4">Bank</h2>
            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="">
                  <p class="text-xs text-gray-600">Название банка</p>
                  <p class="text-xs font-bold !mt-[5px]">Asaka bank</p>
                </div>
                <div class="">
                  <p class="text-xs text-gray-600">Дата завершения</p>
                  <p class="text-xs font-bold !mt-[5px]">
                    Асака банк, Юнусабадский филиал
                  </p>
                </div>
                <div class="">
                  <p class="text-xs text-gray-600">Категория кредита</p>
                  <p class="text-xs font-bold !mt-[5px]">Скотоводство</p>
                </div>
                <div class="">
                  <p class="text-xs text-gray-600">Тип кредита</p>
                  <span
                    class="inline-block bg-blue-500 text-white !px-3 !py-[2px] rounded-full text-xs"
                  >
                    Юридичиский
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[35%]">
          <CreditPaymentChart :paid-amount="75000000" :debt-amount="25000000" />
        </div>
      </div>

      <div>
        <h2 class="text-xl font-bold !mb-4">To'lov grafigi</h2>
        <CreditPaymentSchedule />
      </div>
    </div>
  </div>
</template>
