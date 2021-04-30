import Head from "next/head";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "../src/i18n/i18n";

const META_IMG = "/assets/investors/invest-meta-img.jpg";
export default function HomePage() {
  const { t } = useTranslation(NAMESPACE_KEY);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";

  return (
    <div>
      <Head>
        <title>{t("meta_title")}</title>
        <meta name="title" content={t("meta_title")}></meta>
        <meta name="description" content={t("meta_description")}></meta>
        <link rel="shortcut icon" href="/assets/shared/favicon.ico" />

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content={baseURL}></meta>
        <meta property="og:title" content={t("meta_title")}></meta>
        <meta property="og:site_name" content={t("meta_title")}></meta>
        <meta property="og:description" content={t("meta_description")}></meta>
        <meta property="og:image" content={META_IMG}></meta>
      </Head>
    </div>
  );
}
