import {
  Box,
  Heading,
  Stack,
  Text,
  Center,
  Badge,
  HStack,
} from "@chakra-ui/react";
import ProgressiveImage from "../components/elements/ProgressiveImage";

interface Props {}

export default function Hero({}: Props) {
  return (
    <Box pt={{ base: 24, md: 40 }} bg="white">
      <Center>
        <Stack spacing={6} align="center" textAlign="center" maxW="3xl">
          <Badge
            colorScheme="orange"
            variant="subtle"
            px={4}
            py={2}
            borderRadius="full"
            fontSize="sm"
            fontWeight="bold"
          >
            Founder & Full Stack Engineer
          </Badge>
          <Heading
            as="h2"
            size="md"
            color="brand.primary"
            letterSpacing="wider"
            fontWeight="bold"
          >
            Building Digital Products That Scale
          </Heading>
          <Heading
            as="h1"
            size={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            color="brand.dark"
          >
            Ayodeji Abimbola
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="brand.dark"
            fontWeight="medium"
            lineHeight="tall"
          >
            Founder of BitSix Ltd. and Full Stack Engineer with 8+ years of
            experience building scalable solutions across FinTech, E-commerce,
            and SaaS. I specialize in guiding startups from concept to MVP,
            optimizing system performance, and leading cross-functional teams to
            deliver impactful digital products.
          </Text>
          <HStack spacing={4} wrap="wrap" justify="center">
            <Text
              fontSize="sm"
              color="brand.primary"
              fontWeight="bold"
              letterSpacing="wider"
            >
              NODE.JS
            </Text>
            <Text fontSize="sm" color="gray.500">
              •
            </Text>
            <Text
              fontSize="sm"
              color="brand.primary"
              fontWeight="bold"
              letterSpacing="wider"
            >
              REACT.JS
            </Text>
            <Text fontSize="sm" color="gray.500">
              •
            </Text>
            <Text
              fontSize="sm"
              color="brand.primary"
              fontWeight="bold"
              letterSpacing="wider"
            >
              TYPESCRIPT
            </Text>
            <Text fontSize="sm" color="gray.500">
              •
            </Text>
            <Text
              fontSize="sm"
              color="brand.primary"
              fontWeight="bold"
              letterSpacing="wider"
            >
              AWS
            </Text>
            <Text fontSize="sm" color="gray.500">
              •
            </Text>
            <Text
              fontSize="sm"
              color="brand.primary"
              fontWeight="bold"
              letterSpacing="wider"
            >
              KUBERNETES
            </Text>
          </HStack>
        </Stack>
      </Center>
      <Center mt={12}>
        <Box maxW="xs">
          <ProgressiveImage
            tinyImageSrc="assets/tiny_phoneMockup@1.5x.png"
            originalImageSrc="assets/phoneMockup@1.5x.png"
            className="chakra-image"
          />
        </Box>
      </Center>
    </Box>
  );
}
