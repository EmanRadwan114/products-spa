import React from "react";
import Container from "./ui/Container";
import heroImage from "../assets/images/hero.png";
import Button from "./ui/Button";
import { Link } from "react-router";
import { MoveRight } from "lucide-react";
import ButtonLink from "./ui/ButtonLink";

const HeroSection: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-center bg-primary/10 dark:bg-neutral-800 px-4 md:px-8 py-4 rounded-lg justify-items-center">
          {/* content */}
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-5xl font-bold">Shopio</h1>
            <p className="text-lg text-primary-text/80 tracking-wide">
              Shopio offers a wide range of premium products at the best prices.
              Discover our curated selection of high-quality products, chosen
              for their excellence and popularity, and find your next favorite
              item today!
            </p>
            <ButtonLink to="/products" className="w-fit">
              Explore Now
              <MoveRight />
            </ButtonLink>
          </div>
          {/* image */}
          <div className="md:justify-self-end hover:scale-110 transition-all duration-500 ">
            <img
              src={heroImage}
              alt="hero-image"
              className="object-cover max-h-64 md:max-h-96"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
