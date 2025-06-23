import {
  Box,
  Heading,
  Stack,
  Text,
  Center,
  Badge,
  HStack,
  VStack,
} from "@chakra-ui/react";
import ProgressiveImage from "../components/elements/ProgressiveImage";

interface Props {}

export default function Hero({}: Props) {
  return (
    <Box pt={{ base: 32, md: 40 }} bg="white" px={{ base: 4, md: 6 }}>
      <Center>
        <Stack
          spacing={{ base: 4, md: 6 }}
          align="center"
          textAlign="center"
          maxW="3xl"
        >
          <Badge
            colorScheme="orange"
            variant="subtle"
            px={{ base: 3, md: 4 }}
            py={{ base: 1, md: 2 }}
            borderRadius="full"
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="bold"
          >
            Founder & Full Stack Engineer
          </Badge>
          <Heading
            as="h2"
            size={{ base: "sm", md: "md" }}
            color="brand.primary"
            letterSpacing="wider"
            fontWeight="bold"
            px={{ base: 2, md: 0 }}
          >
            Building Digital Products That Scale
          </Heading>
          <Heading
            as="h1"
            size={{ base: "xl", sm: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            color="brand.dark"
            px={{ base: 2, md: 0 }}
            lineHeight={{ base: "shorter", md: "normal" }}
          >
            Ayodeji Abimbola
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            color="brand.dark"
            fontWeight="medium"
            lineHeight="tall"
            px={{ base: 3, md: 0 }}
          >
            Founder of BitSix Ltd. and Full Stack Engineer with 8+ years of
            experience building scalable solutions across FinTech, E-commerce,
            and SaaS. I specialize in guiding startups from concept to MVP,
            optimizing system performance, and leading cross-functional teams to
            deliver impactful digital products.
          </Text>
          <VStack spacing={{ base: 2, md: 4 }} w="full" maxW="2xl">
            <HStack
              spacing={{ base: 2, md: 4 }}
              wrap="wrap"
              justify="center"
              px={{ base: 2, md: 0 }}
            >
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="brand.primary"
                fontWeight="bold"
                letterSpacing="wider"
              >
                NODE.JS
              </Text>
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                •
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="brand.primary"
                fontWeight="bold"
                letterSpacing="wider"
              >
                REACT.JS
              </Text>
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                •
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="brand.primary"
                fontWeight="bold"
                letterSpacing="wider"
              >
                TYPESCRIPT
              </Text>
            </HStack>
            <HStack
              spacing={{ base: 2, md: 4 }}
              wrap="wrap"
              justify="center"
              px={{ base: 2, md: 0 }}
            >
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                •
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="brand.primary"
                fontWeight="bold"
                letterSpacing="wider"
              >
                AWS
              </Text>
              <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                •
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="brand.primary"
                fontWeight="bold"
                letterSpacing="wider"
              >
                KUBERNETES
              </Text>
            </HStack>
          </VStack>
        </Stack>
      </Center>
      <Center mt={{ base: 8, md: 12 }}>
        <Box
          maxW={{ base: "280px", sm: "320px", md: "xs" }}
          px={{ base: 2, md: 0 }}
        >
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
