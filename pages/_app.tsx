import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import wave from '../public/wave.svg';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-b from-black to-darkBlue min-h-screen font-sans flex flex-col relative">
      <div className="absolute top-1/4 md:top-1/2 md:-translate-y-1/2">
        <Image src={wave.src} alt="wave background" width={1686} height={326} aria-hidden="true" />
      </div>
      <Header />
      <div className="max-w-[1080px] my-0 mx-auto pt-2 md:pt-0 md:flex-grow flex items-center z-10 px-10">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default MyApp;
