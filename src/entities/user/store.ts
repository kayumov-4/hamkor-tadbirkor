export const useUserStore = defineStore("user", {
  state: () => ({
    respondVacancy: {} as Record<string, any>,
    lang: "la",
  }),
  actions: {
    setRespondVacancy(key: string, data: any) {
      this.respondVacancy[key] = data;
    },
    setLang(lang: string) {
      this.lang = lang;
    },
  },
  persist: true,
});
