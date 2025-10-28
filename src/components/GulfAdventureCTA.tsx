import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const GulfAdventureCTA: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const handleRequestQuote = () => {
    console.log("Request Quote clicked");
  };

  return (
    <div
      className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-7xl bg-gradient-to-r from-[#8A1538] via-[#0F1A2E] to-[#0D0D0D] rounded-2xl shadow-2xl p-12 text-center mb-24">
        <h1 className="text-white text-4xl font-bold mb-4">
          {t("cta.heading")}
        </h1>

        <p className="text-gray-200 text-base mb-8 max-w-xl mx-auto leading-relaxed">
          {t("cta.description")}
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
            isRTL ? "sm:flex-row-reverse" : ""
          }`}
        >
          <Button className="px-8 py-3">{t("cta.bookNow")}</Button>

          <button
            onClick={handleRequestQuote}
            className="bg-transparent border-2 border-gray-400 text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:border-white"
          >
            {t("cta.requestQuote")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GulfAdventureCTA;
