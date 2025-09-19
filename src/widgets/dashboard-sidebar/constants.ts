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
    route: "/dashboard/personal-data",
  },
  {
    title: "Biznes rejalar",
    icon: IconBusinessPlans,
    route: "/dashboard",
  },
  {
    title: "Mahsulotlar",
    icon: IconProducts,
    route: "/dashboard",
  },
  {
    title: "Xizmatlar",
    icon: IconServices,
    route: "/dashboard",
  },
  {
    title: "Vakansiyalar",
    icon: IconVacancies,
    route: "/dashboard",
  },
  {
    title: "Sertifikatlari",
    icon: IconCertificates,
    route: "/dashboard",
  },
  {
    title: "Chiqish",
    icon: IconLogout,
    route: "/dashboard",
    class: "link-logout",
  },
];
