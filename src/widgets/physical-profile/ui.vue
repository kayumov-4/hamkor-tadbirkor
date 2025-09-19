<template>
<main class="max-w-[809px] w-full gap-[32px] mt-[80px] !pb-[80px] h-full">
    <div class=" flex gap-[24px]">
        <CustomAvatar :src="avatarSrc" />
        <div>
            <div><span class=" font-semibold text-[20px] leading-[26px] tracking-wide">Profile rasmi</span></div>
            <div class="flex gap-[12px] mt-[12px]">
                <CustomButton label="Rasmni yuklash" @click="openFileDialog"
                class="bg-[var(--color-primary-500)] rounded-[12px] text-[var(--color-white)] px-[16px] py-[12px] font-medium text-[12px]" />
                <CustomButton label="Rasmni o’chirish" 
                class=" border-1 border-[var(--color-grey-50)] rounded-[12px] px-[16px] py-[12px] text-[12px]" />
                <input type="file" ref="fileInput" class="hidden" accept="image/*" @change="handleFileChange">
            </div>
        </div>
    </div>  
    <div class="mt-[32px]">
        <div class=" text-[var(--color-black)] font-semibold text-[20px] leading-[26px] border-b-1 border-[var(--color-grey-border)] pb-[18px]">
            Shaxsiy ma’lumotlar
        </div>
    </div>
    <div class="my-[32px] grid grid-cols-2 gap-[24px]">
        <CustomInput label="F.I.SH" v-model="statData.full_name" />
        <CustomDatePicker label="Tug’ilgan sana" type="date"  v-model="statData.birth_date"/>
        <CustomInput label="JSHSHIR" v-model="statData.pinfl"/>
        <CustomInput label="Viloyat" v-model="statData.region"/>
        <CustomInput label="Tuman" v-model="statData.area"/>
        <CustomInput label="Mahalla" v-model="statData.mahalla" />
        <CustomInput label="Telfon raqam" v-model="statData.phone_number"/>
    </div>
    <div class="pt-[32px] border-t-1 border-[var(--color-grey-border)] grid grid-cols-2 gap-[24px]">
        <CustomDatePicker label="Berilgan sanasi" v-model="statData.given_date"/>
        <CustomDatePicker label="Muddati tugash sanasi" v-model="statData.expire_date"/>
        <CustomInput label="Kim tomonidan berilgan" v-model="statData.give_org"/>
        <CustomInput label="Passport (iD karta)" v-model="statData.passport_number"/>
    </div>
</main>
</template>

<script setup>
const fileInput = ref(null)
const avatarSrc = ref('https://hamroh.biznes-portal.uz/services/platon-core/web/v1/store/file/new-landing/intro-person-2.png')

const statData = ref({
    full_name: 'Nigora Tursunbaevna',
    birth_date: '12.04.2004',
    pinfl: '1244221414142141144',
    region: 'Viloyat',
    area: 'Area',
    mahalla: 'Mahalla',
    phone_number: '+998900000000',
    given_date: '12.04.2004',
    expire_date: '12.04.2004',
    give_org: 'MIB',
    passport_number: 'AA0000000'

})

function openFileDialog() {
  fileInput.value?.click()
}

function handleFileChange(event) {
  const target = event.target
  if (target.files && target.files[0]) {
    const file = target.files[0]
    avatarSrc.value = URL.createObjectURL(file)
  }
}
</script>