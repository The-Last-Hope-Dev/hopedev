import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";

import en from "../lang/en.json"
import es from "../lang/es.json"

import '@/styles/globals.css'

const messages = {
  en,
  es
};


export default function App({ Component, pageProps }) {
  const {locale} = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );

}
