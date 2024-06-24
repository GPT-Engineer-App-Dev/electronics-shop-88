import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        About Us
      </Text>
      <Text mt={4}>
        Welcome to E-Shop, your number one source for all things electronics. We're dedicated to giving you the very best of gadgets, with a focus on quality, customer service, and uniqueness.
      </Text>
    </Box>
  );
};

export default About;