import { Box, SimpleGrid, Image, Text, Link, Select, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: 699, image: "/images/smartphone.jpg", category: "Electronics", brand: "BrandA" },
  { id: 2, name: "Laptop", price: 999, image: "/images/laptop.jpg", category: "Electronics", brand: "BrandB" },
  { id: 3, name: "Headphones", price: 199, image: "/images/headphones.jpg", category: "Accessories", brand: "BrandA" },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [brand, setBrand] = useState("");
  const query = useQuery();
  const searchQuery = query.get("search") || "";

  useEffect(() => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-");
      filtered = filtered.filter((product) => product.price >= min && product.price <= max);
    }

    if (brand) {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, category, priceRange, brand]);

  return (
    <Box p={4}>
      <Box mb={4}>
        <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)} mb={2}>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
        </Select>
        <Select placeholder="Select price range" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} mb={2}>
          <option value="0-200">0 - 200</option>
          <option value="201-500">201 - 500</option>
          <option value="501-1000">501 - 1000</option>
        </Select>
        <Select placeholder="Select brand" value={brand} onChange={(e) => setBrand(e.target.value)} mb={2}>
          <option value="BrandA">BrandA</option>
          <option value="BrandB">BrandB</option>
        </Select>
        <Button onClick={() => { setCategory(""); setPriceRange(""); setBrand(""); }}>Clear Filters</Button>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl">
                {product.name}
              </Text>
              <Text>${product.price}</Text>
              <Link as={RouterLink} to={`/products/${product.id}`} color="teal.500">
                View Details
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;