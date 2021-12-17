import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = function ({
  href, variant = 'primary', className, children,
}) {
  const variants = {
    primary: 'bg-orange text-white shadow-orange',
    secondary: 'bg-white text-black shadow-white',
    tertiary: 'bg-white/[0.1] text-white shadow-black',
  };

  const classNames = clsx([
    'shadow-sm border rounded-full px-8 py-4 border-none cursor-pointer font-bold text-center',
    variants[variant],
    className,
  ]);
  return (
    <Link href={href} passHref><button type="button" className={classNames}>{children}</button></Link>
  );
};

export default ButtonLink;
