import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <Logo className="text-[1.7rem]" />

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
