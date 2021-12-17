import type { NextPage } from 'next';
import Image from 'next/image';
import TextBubble from '../components/TextBubble';
import ButtonLink from '../components/ButtonLink';
import heroPicture from '../public/nael_2.png';
import Dot from '../components/Dot';

const Home: NextPage = function () {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-10">
      <div className="col-span-2">
        <TextBubble />
        <p className="font-black text-white text-4xl md:text-6xl mt-6">
          I&apos;m a full-stack developer
          <span className="text-orange">.</span>
        </p>
        <p className="text-white mt-6">
          And also co-founder of
          {' '}
          <a className="text-orange" href="https://pronostix.io" target="_blank" rel="noreferrer">pronostix.io</a>
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <ButtonLink className="w-full max-w-[286px] md:w-max" href="/work" variant="secondary"> Discover my work </ButtonLink>
          <ButtonLink className="w-full max-w-[286px] md:w-max " href="/about" variant="tertiary"> Download my resume </ButtonLink>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="w-full h-auto shadow-[13px_11px_0px_0px_#FF8761]">
          <Image src={heroPicture} layout="responsive" alt="Nael" />
        </div>
        <Dot className="" />
        <Dot className="bg-cyan w-1 h-1 right-9 -top-8" />
        <Dot className="bg-pinkViolet w-3 h-3 left-0 -top-12" />
        <Dot className="bg-lightGreen w-1 h-1 -left-32 top-1/3" />
        <Dot className="bg-cyan -left-12 w-2 h-2 bottom-1/4" />
        <Dot className="bg-orange w-3 h-3 right-0 -bottom-14" />
        <Dot className="bg-pinkViolet w-1 h-1 -right-8 bottom-1/3" />
      </div>
    </section>
  );
};

export default Home;
