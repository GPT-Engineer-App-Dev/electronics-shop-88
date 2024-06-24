import { useParams } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg", description: "Latest smartphone with amazing features." },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg", description: "High-performance laptop for all your needs." },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg", description: "Noise-cancelling headphones for immersive sound." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <Text fontSize="2xl" fontWeight="bold">
        {product.name}
      </Text>
      <Text>{product.price}</Text>
      <Text>{product.description}</Text>
    </Box>
  );
};

export default ProductDetail;