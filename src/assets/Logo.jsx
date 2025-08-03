import Container from "@/components/wrapper/Container";

const Logo = () => {
  return (
    <Container className={"border border-black touch-none pointer-events-none select-none"}>
      <Container className="text-white bg-black px-2 py-1">THEME</Container>
      <Container className="text-black bg-white px-2 py-1">STUDIO</Container>
    </Container>
  );
};

export default Logo;
