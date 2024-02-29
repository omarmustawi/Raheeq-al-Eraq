const importImages = (startI: number, endI: number, logos: string[]) => {
  const imagesWithLogos = [];
  for (let i = startI; i <= endI; i++) {
    imagesWithLogos.push({
      image: require(`/public/Partners/${i}.jpg`),
      companyName: logos[i - 1],
    });
  }
  return imagesWithLogos;
};

const companiesLogo1 = [
  "شركة المتحدة لصناعة الكرتون",
  "مصنع نابكو",
  "شركة الشرق الأوسط لصناعة وإنتاج الورق",
  "مصنع الشركة العربية لصناعة الورق",
  "دهانات سيجما",
  "مصنع الوطني للزجاج",
  "شركة الاتفاق",
  "دهانات الجزيرة",
  "مصنع العبيكان للورق",
  "شركة الزامل  للمباني الحديدية",
  "مصنع تتراباك",
];

const companiesLogo2 = [
  "مصنع الجواد للبلاستيك",
  "شركة الاتحاد",
  "دهانات أوسكار",
  "مصنع الخليج  للكرتون",
  "صحاري كربلاء",
  "مصنع حديد الوطني",
  "مصنع الشمالية للاسمنت",
  "شركة عالم المعادن",
  "مصنع حديد الراجحي",
  "شركة زين الحياة للمشروبات الغازية",
  "شركة سابك ",
  "شركة دجلة للمشروبات الغازية",
];

export { companiesLogo1, companiesLogo2, importImages };
