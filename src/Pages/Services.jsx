import React from "react";
import { useParams } from "react-router-dom";
import Mechanic from "./Mechanic";
export const services = [
  {
    id: 1,
    title: "خدمات فنی  و سرویس خودرو",
    image: "/Images/Services/diagnostic.webp",
    filtertitle: "فیلتر خدمات فنی و سرویس خودرو",
    slug: "technical-services",
    description:
      "ارائه خدمات تخصصی فنی خودرو شامل عیب‌یابی، تعمیر و سرویس بخش‌های مختلف خودرو با استفاده از تجهیزات تخصصی.",
  },
  {
    id: 2,
    title: "خدمات مکانیکی خودرو",
    image: "/Images/section_a2.png",
    filtertitle: "فیلتر خدمات مکانیکی خودرو",
    slug: "mechanic",
    description:
      "تعمیر و سرویس تخصصی موتور، گیربکس، کلاچ و سایر بخش‌های مکانیکی خودرو توسط متخصصین باتجربه.",
  },
  {
    id: 3,
    title: "خدمات زیر و بند سازی خودرو",
    image: "/Images/section_a2.png",
    filtertitle: "فیلتر خدمات زیر و بند سازی",
    slug: "suspension",
    description:
      "تعمیر و تنظیم سیستم تعلیق، جلوبندی، فرمان و قطعات زیر بندی خودرو برای افزایش ایمنی و بهبود کیفیت رانندگی.",
  },
  {
    id: 4,
    title: "خدمات باتری سازی و برق خودرو",
    image: "/Images/Services/auto-electric.jpg",
    filtertitle: "فیلتر خدمات برق و باتری خودرو",
    slug: "auto-electric",
    description:
      "عیب‌یابی و تعمیر سیستم برق خودرو، باتری، دینام، استارت، چراغ‌ها و سایر تجهیزات الکتریکی خودرو.",
  },
  {
    id: 5,
    title: "خدمات تعویض روغن و سرویس خودرو",
    image: "/Images/Services/oil-service.jpg",
    filtertitle: "فیلتر خدمات سرویس و تعویض روغن",
    slug: "oil-service",
    description:
      "انجام سرویس‌های دوره‌ای خودرو شامل تعویض روغن موتور، فیلترها، بررسی مایعات و کنترل بخش‌های ضروری خودرو.",
  },
  {
    id: 6,
    title: "خدمات تنظیم موتور و دیاگ",
    image: "/Images/Services/diagnostic.webp",
    filtertitle: "فیلتر خدمات تنظیم موتور و دیاگ",
    slug: "diagnostic",
    description:
      "عیب‌یابی تخصصی خودرو با دستگاه دیاگ، بررسی خطاهای ECU و انجام تنظیمات لازم برای عملکرد بهتر موتور.",
  },
  {
    id: 7,
    title: "خدمات صافکاری بدنه خودرو",
    image: "/Images/Services/body-repair.jpg",
    filtertitle: "فیلتر خدمات صافکاری بدنه",
    slug: "body-repair",
    description:
      "رفع فرورفتگی، آسیب‌های بدنه و صدمات ناشی از تصادف با استفاده از روش‌های تخصصی صافکاری خودرو.",
  },
  {
    id: 8,
    title: "خدمات حمل و نقل خودرو",
    image: "/Images/Services/car-transport.png",
    filtertitle: "فیلتر خدمات حمل خودرو",
    slug: "car-transport",
    description:
      "ارائه خدمات حمل و جابه‌جایی خودرو با خودروبر و جرثقیل در مواقع خرابی، تصادف یا نیاز به انتقال خودرو.",
  },
  {
    id: 9,
    title: "خدمات کارواش و صفرشویی خودرو",
    image: "/Images/Services/car-wash.webp",
    filtertitle: "فیلتر خدمات کارواش و صفرشویی",
    slug: "car-wash",
    description:
      "شست‌وشوی کامل خودرو، صفرشویی داخل کابین و نظافت تخصصی بخش‌های داخلی و خارجی خودرو.",
  },
  {
    id: 10,
    title: "خدمات نقاشی، واکس، پولیش و ترمیم رنگ خودرو",
    image: "/Images/Services/CarPainting.jpeg",
    filtertitle: "فیلتر خدمات ترمیم و رنگ خودرو",
    slug: "car-paint",
    description:
      "ترمیم رنگ، رفع خط و خش، پولیش، واکس و نقاشی بخش‌های مختلف بدنه با هدف بازگرداندن ظاهر خودرو.",
  },
  {
    id: 11,
    title: "خدمات اسپرت خودرو",
    image: "/Images/Services/car-tuning.jpeg",
    filtertitle: "فیلتر خدمات اسپرت خودرو",
    slug: "car-tuning",
    description:
      "ارائه خدمات مرتبط با اسپرت و شخصی‌سازی خودرو شامل تغییرات ظاهری و تجهیزات جانبی متناسب با نیاز مشتری.",
  },
  {
    id: 12,
    title: "خدمات لاستیک و بالانس تایر خودرو",
    image: "/Images/Services/tire-service.jpg",
    filtertitle: "فیلتر خدمات لاستیک و بالانس",
    slug: "tire-service",
    description:
      "تعویض و تعمیر لاستیک، بالانس چرخ‌ها، تنظیم فشار باد و بررسی وضعیت تایرها برای افزایش ایمنی و کیفیت رانندگی.",
  },
  {
    id: 13,
    title: "کارشناسی و تشخیص رنگ خودرو",
    image: "/Images/Services/car-inspection.jpeg",
    filtertitle: "فیلتر خدمات کارشناسی خودرو",
    slug: "car-inspection",
    description:
      "بررسی تخصصی بدنه و تشخیص رنگ‌شدگی، تعویض قطعات و آسیب‌های احتمالی خودرو پیش از خرید یا فروش.",
  },
  {
    id: 14,
    title: "خدمات شارژ و سرویس کولر خودرو",
    image: "/Images/Services/car-ac.jpg",
    filtertitle: "فیلتر خدمات شارژ و سرویس کولر ",
    slug: "car-ac",
    description:
      "شارژ گاز کولر، بررسی سیستم تهویه، عیب‌یابی کمپرسور و رفع مشکلات سرمایش کولر خودرو.",
  },
];

const Services = () => {
  const { servicename } = useParams();

  const service = services.find((item) => item.slug === servicename);

  if (!service) {
    return <h1>سرویس مورد نظر پیدا نشد</h1>;
  }

  return (
    <Mechanic
      title={service.title}
      filterImage={service.image}
      filtertitle={service.filtertitle}
    />
  );
};

export default Services;
