import Link from 'next/link';
import Image from 'next/image';
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg';
import twitter from '../icons/twitter.svg';

const Footer = function () {
  return (
    <footer className="mt-auto mb-10 flex justify-center space-x-4 z-10">
      <Link href="https://github.com/NaelFR" passHref>
        <button type="button">
          <span
            className="rounded-full w-12 h-12 flex items-center justify-center bg-white/[0.1]"
          >
            <Image
              src={github.src}
              alt="github"
              width={24}
              height={24}
            />
          </span>
        </button>
      </Link>
      <Link href="https://www.linkedin.com/in/na%C3%ABl-abou-chahine/" passHref>
        <button type="button">

          <span
            className="rounded-full w-12 h-12 flex items-center justify-center bg-white/[0.1]"
          >
            <Image
              src={linkedin.src}
              alt="linkedin"
              width={24}
              height={24}
            />
          </span>
        </button>
      </Link>
      <Link href="https://twitter.com/naelabc" passHref>
        <button type="button">

          <span
            className="rounded-full w-12 h-12 flex items-center justify-center bg-white/[0.1]"
          >
            <Image
              src={twitter.src}
              alt="twitter"
              width={24}
              height={24}
            />
          </span>
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
