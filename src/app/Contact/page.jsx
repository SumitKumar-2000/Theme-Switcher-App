import Title from "@/components/ui/Title";
import Container from "@/components/wrapper/Container";
import React from "react";

const Contact = () => {
  return (
    <Container className={"flex-col"}>
      <Title>Get in touch.</Title>
      <article className="my-4">
        <p className="text-primary-foreground">
          If you have any questions, suggestions, or feedback about the{" "}
          <strong className="text-primary-foreground">
            Multi-Theme Switcher App
          </strong>
          , feel free to reach out. We’re always open to collaborations,
          contributions, and creative ideas.
        </p>
        <p className="text-primary-foreground mt-2">
          You can contact us via email at{" "}
          <a
            href="mailto:contact@themingstudio.dev"
            className="text-accent underline"
          >
            contact@themingstudio.dev
          </a>{" "}
          or connect with us through our social platforms.
        </p>
      </article>
    </Container>
  );
};

export default React.memo(Contact);
