import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '../public/logo.svg';
import menu from '../icons/menu.svg';
import close from '../icons/close.svg';
import sms from '../icons/sms.svg';
import ButtonLink from './ButtonLink';
import ActiveNavLink from './ActiveNavLink';

const Header = function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isMenuOpen && closeRef.current) {
      closeRef.current.focus();
    }
  }, [isMenuOpen]);
  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-6 z-20 relative">
      <Image width={68} height={33} src={logo.src} alt="logo" />
      <nav className="space-x-16 hidden md:block">
        <ActiveNavLink href="/">
          Home
        </ActiveNavLink>
        <ActiveNavLink href="/work">
          Work
        </ActiveNavLink>
        <ActiveNavLink href="/about">
          About me
        </ActiveNavLink>
      </nav>
      { isMenuOpen && (
      <motion.div
        className="flex md:hidden flex-col absolute bg-[#04060C] w-full left-0 z-10 px-4 py-6"
        initial={{ top: '-100%' }}
        animate={{ top: 0 }}
      >
        <div className="flex justify-between">
          <Image width={68} height={33} src={logo.src} alt="logo" />
          <button ref={closeRef} type="button" onClick={() => setIsMenuOpen(false)}>
            <Image width={24} height={24} src={close.src} alt="close" />
          </button>
        </div>
        <nav className="text-white mt-10 mb-4">
          <ul className="space-y-4">
            <li>
              <ActiveNavLink href="/">
                Home
              </ActiveNavLink>
            </li>
            <li>
              <ActiveNavLink href="/work">
                Work
              </ActiveNavLink>
            </li>
            <li>
              <ActiveNavLink href="/about">
                About me
              </ActiveNavLink>
            </li>
          </ul>
        </nav>
        <hr className="border border-white/[0.1]" />
        <ButtonLink className="py-2 w-full text-black flex justify-center items-center mt-4" href="/contact">
          <Image src={sms.src} width={24} height={24} alt="contact icon" />
          <span className="ml-2">Contact me</span>
        </ButtonLink>

      </motion.div>
      )}
      <ButtonLink className="hidden md:block" href="/contact">Contact me </ButtonLink>
      <button type="button" onClick={() => setIsMenuOpen(true)} className="block md:hidden cursor-pointer focus:outline-1">
        <Image src={menu.src} width={24} height={24} alt="menu icon" />
      </button>
    </header>
  );
};

export default Header;
