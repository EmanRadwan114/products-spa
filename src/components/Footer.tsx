import React from "react";
import Logo from "./ui/Logo";
import Container from "./ui/Container";
import { navLinks, socialLinks } from "../data/links.data";
import { Link } from "react-router";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      {/* main footer content */}
      <section className="py-4 border-t border-t-primary-text/20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 lg:justify-items-center">
            {/* 1. logo */}
            <section>
              <Logo />
              <p className="text-sm mt-3 text-primary-text/80 leading-relaxed">
                Shopio is a modern premium eCommerce platform designed to
                showcase high-quality products with a seamless and elegant
                shopping experience.
              </p>
            </section>

            {/* 2. important links */}
            <section>
              <h3 className="text-lg font-medium">Important links</h3>
              <ul className="flex flex-col gap-2 mt-3">
                {navLinks.map((link) => (
                  <li key={link.name} className="text-sm">
                    <Link
                      to={link.path}
                      className="text-primary-text/80 hover:text-primary-text transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. social links */}
            <section>
              <h3 className="text-lg font-medium">Social Links</h3>
              <div className="flex mt-3 gap-2">
                {socialLinks.map((link) => (
                  <div
                    key={link.name}
                    className="flex justify-center items-center bg-primary-text rounded-full w-9 hover:bg-primary-text/90 hover:scale-105 transition-all duration-300"
                  >
                    <a
                      target="_blank"
                      href={link.path}
                      className="block w-full h-full p-1"
                    >
                      <img src={link.image} alt={link.name} className="" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </section>

      {/* copyright section */}
      <section className="py-4 text-center border-t border-t-primary-text/20 bg-neutral-800">
        <p className="text-sm text-primary-text/80">
          &copy; {currentYear} Shopio. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
