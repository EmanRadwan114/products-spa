import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout: React.FC = () => {
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
