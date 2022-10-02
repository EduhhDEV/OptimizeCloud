import { lazy, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { IconContext } from "react-icons";
import { BrowserRouter } from "react-router-dom";
import { i18n } from "./libs/i18n";
import { globalStyle } from "./styles/global";

const Router = lazy(() => import("./router/Router"));

export function App () {
  globalStyle();

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Suspense>
          <IconContext.Provider value={{ style: { verticalAlign: "middle", fontSize: "1em", margin: "0 0.25em" } }}>
            <Router/>
          </IconContext.Provider>
        </Suspense>
      </BrowserRouter>
    </I18nextProvider>
  );
}
