import Title from "@/components/ui/Title";
import Container from "@/components/wrapper/Container";
import React from "react";

const About = () => {
  return (
    <Container className={"flex-col"}>
      <Title>About the studio.</Title>
      <article className="my-4">
        <p className="text-primary-foreground">
          {" "}
          <strong className="text-primary-foreground">
            Multi-Theme Switcher App
          </strong>{" "}
          is a responsive React-based web application that enables users to
          dynamically switch between three distinctly styled themes — each with
          its own layout, color palette, font style, spacing, and structure.
        </p>
      </article>
    </Container>
  );
};

export default React.memo(About);
