import Container from "@/components/wrapper/Container";
import Title from "@/components/ui/Title";
import React from "react";

const Contact = () => {
  return (
    <Container className={"flex-col"}>
      <Title>Contact Us.</Title>
    </Container>
  );
};

export default React.memo(Contact);
