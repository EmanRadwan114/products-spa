import React from "react";
import notFoundImage from "../assets/images/404.png";
import ButtonLink from "../components/ui/ButtonLink";
import Container from "../components/ui/Container";
import { MoveLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center h-[85vh] lg:py-8">
          <img
            src={notFoundImage}
            alt="not-found-image"
            className="max-w-56 sm:max-w-72 md:max-w-96"
          />
          <ButtonLink to="/" className="lg:text-base!">
            <MoveLeft />
            Back to Home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
