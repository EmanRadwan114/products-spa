import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 mb-8">
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
