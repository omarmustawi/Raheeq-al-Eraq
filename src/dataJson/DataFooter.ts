import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import {
  FaFacebookMessenger,
  FaFacebookF,
} from "react-icons/fa";

export const iconComponents = {
  FaWhatsapp: FaWhatsapp,
  FaFacebookMessenger: FaFacebookMessenger,
  FaFacebookF: FaFacebookF,
  FaInstagram: FaInstagram,
};

export const socialMediaAccounts = [
  {
    name: "FaWhatsapp",
    link: "https://2u.pw/7sD78lt",
  },
  {
    name: "FaFacebookMessenger",
    link: "https://m.me/rahik.aliraq/",
  },
  {
    name: "FaFacebookF",
    link: "https://www.facebook.com/rahik.aliraq/",
  },
  {
    name: "FaInstagram",
    link: "https://www.instagram.com/rahik_aliraq?igsh=MTduYWF0NGVyOW0zdw==",
  },
] as const;


export const links = [
  { link: "الرئيسة", id: "#home" },
  { link: "من نحن", id: "#about-us" },
  { link: "أهدافنا", id: "#aims" },
  { link: "خدماتنا", id: "#services" },
  { link: "المنافذ الحدودية", id: "#border-crossings" },
  { link: "فريقنا", id: "#team" },
  { link: "شركائنا", id: "#partners" }
];

export const branches = [
  {
    nameBranch: "الفرع الرئيسي",
    address: "بغداد - المنصور - 14 رمضان ",
  },
  {
    nameBranch: "فرع الأنبار",
    address: " الرمادي - شارع 17 ",
  },
  {
    nameBranch: "فرع الأردن",
    address: " عمان - شارع الكاردنس - مجمع السلامة الطبي ",
  },
];
