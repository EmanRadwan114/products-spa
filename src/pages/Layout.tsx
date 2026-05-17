import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
