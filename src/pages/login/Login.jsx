import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Login from "../../components/login/Login";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

export default function LoginPage() {
  const { t, i18n } = useTranslation();
  const [cookies, setCookie] = useCookies(["lang"]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navigate = useNavigate();
  const navtoSplash = () => {
    navigate("/");
  };

  useEffect(() => {
    setCookie("lang", i18n.language, { path: "/" });
  }, [t]);

  return (
    <>
      <div className="flex align-center justify-between">
        <div className="flex flex-row cursor-pointer m-4" onClick={navtoSplash}>
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
          <span className="mx-2">{t("login.backtostart")}</span>
        </div>
        <div className="language-container">
          <button
            class="m-4"
            type="button"
            onClick={() => changeLanguage("jp")}
          >
            日本語
          </button>
          <button
            class="m-4"
            type="button"
            onClick={() => changeLanguage("en")}
          >
            en
          </button>
        </div>
      </div>

      <Header
        heading={t("login.logintoyouraccount")}
        paragraph={t("login.doesnthaveaccount")}
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </>
  );
}
