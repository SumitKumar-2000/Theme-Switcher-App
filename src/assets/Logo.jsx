import Container from "@/components/wrapper/Container";

const Logo = () => {
  return (
    <Container className={"border border-primary-foreground touch-none pointer-events-none select-none"}>
      <Container className="text-primary bg-primary-foreground px-2 py-1">THEME</Container>
      <Container className="text-primary-foreground bg-primary px-2 py-1">STUDIO</Container>
    </Container>
  );
};

export default Logo;
