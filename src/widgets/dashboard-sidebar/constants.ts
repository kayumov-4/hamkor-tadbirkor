import IconUserInfo from "./icons/icon-personal-data.svg";
import IconBusinessPlans from "./icons/icon-business-plans.svg";
import IconProducts from "./icons/icon-products.svg";
import IconServices from "./icons/icon-services.svg";
import IconVacancies from "./icons/icon-vacancies.svg";
import IconCertificates from "./icons/icon-certificates.svg";
import IconLogout from "./icons/icon-logout.svg";

export const sidebarMenu = [
  {
    title: "Shaxsiy ma'lumotlar",
    icon: IconUserInfo,
    route: "/dashboard",
  },
  {
    title: "Biznes rejalar",
    icon: IconBusinessPlans,
    route: "/",
  },
  {
    title: "Mahsulotlar",
    icon: IconProducts,
    route: "/",
  },
  {
    title: "Xizmatlar",
    icon: IconServices,
    route: "/",
  },
  {
    title: "Vakansiyalar",
    icon: IconVacancies,
    route: "/",
  },
  {
    title: "Sertifikatlari",
    icon: IconCertificates,
    route: "/",
  },
  {
    title: "Chiqish",
    icon: IconLogout,
    route: "/",
    class: "link-logout",
  },
];
