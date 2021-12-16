import Link from 'next/link';
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg';
import twitter from '../icons/twitter.svg';

const Footer = function () {
  return (
    <footer className="mt-auto mb-10 flex justify-center space-x-4 z-10">
      <Link href="https://github.com/NaelFR"><span className="rounded-full w-12 h-12 flex items-center justify-center bg-white/[0.1]"><img src={github.src} alt="github" /></span></Link>
      <Link href="https://www.linkedin.com/in/na%C3%ABl-abou-chahine/"><span className="rounded-full w-12 h-12 flex items-center justify-center bg-white/[0.1]"><img src={linkedin.src} alt="linkedin" /></span></Link>
      <Link href="https://twitter.com/naelabc"><span className="rounded-full w-12 h-12 flex items-center justify-center bg-white/[0.1]"><img src={twitter.src} alt="twitter" /></span></Link>
    </footer>
  );
};

export default Footer;
