import { Box, Text, Button, Center, Container } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";

interface Props {}

export default function Resume({}: Props): ReactElement {
  return (
    <Box py={12} bgGradient="linear(to-r, brand.primary, #d69e2e)">
      <Container maxW="6xl">
        <Center>
          <Box
            w="11/12"
            p={8}
            bg="brand.primary"
            borderRadius="md"
            boxShadow="xl"
            border="2px solid"
            borderColor="brand.dark"
          >
            <Text
              color="brand.dark"
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              mb={6}
            >
              I am a Full-Stack Developer with 8+ years of experience building
              and maintaining products across E-commerce, Health Insurance, and
              FinTech.
            </Text>
            <Center>
              <Button
                as={Link}
                href="/contact"
                bg="brand.dark"
                color="brand.light"
                fontWeight="bold"
                px={6}
                py={3}
                borderRadius="md"
                _hover={{
                  bg: "brand.light",
                  color: "brand.dark",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
              >
                Contact
              </Button>
            </Center>
          </Box>
        </Center>
      </Container>
    </Box>
  );
}
