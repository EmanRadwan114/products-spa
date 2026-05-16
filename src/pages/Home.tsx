import React from "react";
import HeroSection from "../components/HeroSection";
import FilterTabs from "./../components/FilterTabs";
import Products from "./Products";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <HeroSection />
      <FilterTabs />
      <Products />
    </div>
  );
};

export default Home;
