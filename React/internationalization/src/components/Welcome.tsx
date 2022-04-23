import React from "react";
import { useTranslation } from "react-i18next";

export const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t("welcome_to_react")}</div>
      <div>{t("wel.wel_2")}</div>
    </div>
  );
};
