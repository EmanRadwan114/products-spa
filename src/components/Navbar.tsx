import React, { useState } from "react";
import Logo from "./ui/Logo";
import Container from "./ui/Container";
import { navLinks } from "../data/links.data";
import ActiveLink from "./ui/ActiveLink";
import { useTheme } from "next-themes";
import Button from "./ui/Button";
import { Menu, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  // state
  const [isMobile] = useState(() => window.innerWidth <= 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const navigate = useNavigate();

  //   handlers
  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  // ui
  const desktopNav = (
    <nav className="flex justify-between items-center">
      <Logo />
      <ul className="flex gap-4">
        {navLinks.map((link) => (
          <li className="group cursor-pointer relative" key={link.name}>
            <ActiveLink path={link.path} name={link.name} />
          </li>
        ))}
      </ul>
      <Button
        variant="icon"
        onClick={toggleTheme}
        className="hover:text-primary"
      >
        {resolvedTheme === "light" ? <Moon /> : <Sun />}
      </Button>
    </nav>
  );

  const mobileNav = (
    <nav className="flex justify-between items-center gap-4">
      <Logo />
      <div className="relative">
        <Button
          variant="icon"
          className="hover:text-primary!"
          onClick={() => setIsMobileMenuOpen((m) => !m)}
        >
          <Menu />
        </Button>
        {/* mobile nav menu */}
        <div
          className={`flex flex-col gap-4 absolute shadow-primary top-10 inset-e-1/4 min-w-52 p-4 rounded-md transition-all duration-300 ease-in-out z-2000 bg-primary-background ${
            isMobileMenuOpen
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 translate-y-2"
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li
                className="group cursor-pointer relative"
                key={link.name}
                onClick={() => {
                  setIsMobileMenuOpen((m) => !m);
                  navigate(link.path);
                }}
              >
                <ActiveLink path={link.path} name={link.name} />
              </li>
            ))}
          </ul>
          <Button
            variant="icon"
            onClick={toggleTheme}
            className="hover:text-primary px-0! self-start"
          >
            {resolvedTheme === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </nav>
  );

  return (
    <header className="fixed inset-s-0 top-0 w-full bg-primary-background/90 z-1000">
      <Container>{isMobile ? mobileNav : desktopNav}</Container>
    </header>
  );
};

export default Navbar;
