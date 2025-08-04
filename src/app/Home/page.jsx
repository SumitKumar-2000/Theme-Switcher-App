import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";
import Container from "@/components/wrapper/Container";
import axios from "axios";
import React from "react";

const HomePage = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data.slice(0, 6)))
      .catch(console.error);
  }, []);

  return (
    <Container className={"flex-col"}>
      <Title>Check This Out.</Title>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll max-h-[80vh]">
        {products.map((product) => (
          <Card key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="w-full h-48 object-contain mb-2"
            />
            <Card.Title className="text-primary-foreground font-semibold">{product.title}</Card.Title>
            <Card.Content className="text-secondary-foreground">${product.price}</Card.Content>
          </Card>
        ))}
      </section>
    </Container>
  );
};

export default React.memo(HomePage);
