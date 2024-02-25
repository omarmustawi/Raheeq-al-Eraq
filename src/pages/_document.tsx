/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html dir="rtl" lang="ar">
      <Head>
        <title>شركة رحيق العراق</title>
        <link rel="icon" href="/logo.ico" />
        <link rel="icon" type="image/ico" sizes="32x32" href="/logo.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.ico" />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="تعمل الشركة على تفادي المخاطر وعدم الوقوع تحت طائلة الغرامات. تقوم الشركة بكافة الأمور اللازمة في التخليص الجمركي للاستيراد. نقوم بعمل تخليص جمركي لكافة أنواع البضائع سواء البسيطة أو القيمة." />
      </Head>{" "}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
