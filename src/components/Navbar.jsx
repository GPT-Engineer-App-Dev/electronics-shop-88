import { Box, Flex, Link, Spacer, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box bg="brand.700" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold">
          E-Shop
        </Text>
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          mx={2}
          width="200px"
        />
        <Spacer />
        <Link as={RouterLink} to="/" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to={`/products?search=${searchQuery}`} mx={2}>
          Products
        </Link>
        <Link as={RouterLink} to="/about" mx={2}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" mx={2}>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;