import { Box, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Contact Us
      </Text>
      <Text mt={4}>
        If you have any questions or comments, please don't hesitate to contact us.
      </Text>
    </Box>
  );
};

export default Contact;