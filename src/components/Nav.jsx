import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center max-lg:hidden max-container gap-16">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden max-container flex flex-1 justify-end items-cente">
            <img src={hamburger} alt="menu" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
