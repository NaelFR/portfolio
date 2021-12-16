import Link from 'next/link';

const Header = function () {
  return (
    <header>
      <span>Logo</span>
      <nav>
        <Link href="/">
          Home
        </Link>
      </nav>
      <button type="button">Contact me</button>
    </header>
  );
};

export default Header;
