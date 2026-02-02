import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-3 flex justify-between items-center"
    >
      {/* Logo */}
      <Logo />

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
