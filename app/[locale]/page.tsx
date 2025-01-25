import { useTranslations } from "next-intl";

export const Home = () => {
  const t = useTranslations("Index");
  return <h1>{t("Title")}</h1>;
};
