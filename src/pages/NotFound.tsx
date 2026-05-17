import React from "react";
import notFoundImage from "../assets/images/404.png";
import ButtonLink from "../components/ui/ButtonLink";
import Container from "../components/ui/Container";
import { MoveLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center h-[50vh] md:h-[50vh]">
          <img
            src={notFoundImage}
            alt="not-found-image"
            className="w-64 object-cover"
          />
          <ButtonLink to="/">
            <MoveLeft />
            Back to Home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
