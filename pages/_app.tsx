import '../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
