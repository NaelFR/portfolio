import React from 'react';
import { motion } from 'framer-motion';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

/**
 * A <Link> wrapper that knows if it's "active" or not.
 * Rip from https://github.com/ReactTraining/react-router/blob/v6.0.0-beta.0/packages/react-router-dom/index.tsx
 * However since they wont include the inactive class and style,
 * here is the implementation, based on their NavLink
 * See https://github.com/ReactTraining/react-router/issues/7194
 */

export interface ActiveNavLinkProps extends LinkProps {
    className?: string;
    style?: object;
    activeClassName?: string;
    activeStyle?: object;
    inactiveClassName?: string;
    inactiveStyle?: object;
    caseSensitive?: boolean;
    end?: boolean;
    exact?: boolean;
    children?: React.ReactNode;
}

const ActiveNavLink = function ({
  activeClassName = 'text-white',
  activeStyle,
  className: classNameProp = 'relative',
  style: styleProp,
  inactiveClassName = 'text-white opacity-75',
  inactiveStyle,
  href,
  as,
  exact = true,
  children,
  ...props
}: ActiveNavLinkProps) {
  const { asPath } = useRouter();
  // Normalize and split paths into their segments
  const segment = (p: string | undefined) => new URL(p ?? '', 'http://example.com').pathname.split('/').filter((s) => s);
  const currentPath = segment(asPath);
  const targetPath = segment((as || href) as string);
  // The route is active if all of the following are true:
  //   1. There are at least as many segments in the current route as in the destination route
  //   2. The current route matches the destination route
  //   3. If we're in “exact" mode, there are no extra path segments at the end
  const isActive = currentPath.length >= targetPath.length
        && targetPath.every((p, i) => currentPath[i] === p)
        && (!exact || targetPath.length === currentPath.length);

  const className = [classNameProp, isActive ? activeClassName : inactiveClassName].filter(Boolean).join(' ');
  const style = { ...styleProp, ...(isActive ? activeStyle : inactiveStyle) };
  return (
    <Link href={href} as={as} {...props} passHref>
      <button type="button" className={className} style={style}>
        {isActive && (
        <motion.div
          style={{ height: '2px' }}
          className="w-6 absolute bg-orange -bottom-2 inset-x-0 mx-auto"
          layoutId="navigation-tabs-underline"
          transition={{ duration: 0.2 }}
        />
        )}
        {children}
      </button>
    </Link>
  );
};

export default ActiveNavLink;
