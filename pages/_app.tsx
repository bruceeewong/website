import '../styles/globals.css';
import '../components/MdxComponents/markdown-style.css';
import type { AppProps } from 'next/app';
import '../i18n';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const { i18n } = useTranslation();
  const firstRender = useRef(true);

  if (firstRender.current) {
    i18n.changeLanguage(locale);
    firstRender.current = false;
  }

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return <Component {...pageProps} />;
}

export default MyApp;
