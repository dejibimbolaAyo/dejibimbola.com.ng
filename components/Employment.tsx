import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import ProgressiveImage from "./elements/ProgressiveImage";

const organizations = [
  {
    src: "./assets/sci.png",
    alt: "SCI",
    name: "SCI",
    role: "Software Engineer",
    duration: "2017 - 2018",
    description: "Innovative fintech software solutions",
  },
  {
    src: "./assets/robosys.png",
    alt: "Robosys",
    name: "Robosys",
    role: "Senior Developer",
    duration: "2022 - 2023",
    description: "Developing innovative fintech software solutions",
  },
  {
    src: "./assets/parallelscore.png",
    alt: "ParallelScore",
    name: "ParallelScore",
    role: "Full Stack Developer",
    duration: "2021 - 2022",
    description: "Consulting for emerging tech companies",
  },
  {
    src: "./assets/tradedepot.png",
    alt: "TradeDepot",
    name: "TradeDepot",
    role: "Backend Engineer",
    duration: "2020 - 2021",
    description: "Iconic Brands for the Next Billion Consumers",
  },
  {
    src: "./assets/valence.png",
    alt: "Valence",
    name: "Valence",
    role: "Software Engineer",
    duration: "2019 - 2020",
    description: "An AI coach for every manager. Tailored to your company.",
  },
  {
    src: "./assets/bitsix.png",
    alt: "BitSix",
    name: "BitSix",
    role: "CTO",
    duration: "2020 - Present",
    description:
      "Consulting for emerging tech for use in small and medium sized businesses",
  },
];

const MotionBox = motion(Box);

export default function Employment() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>(
    {},
  );

  const handleCardClick = (orgAlt: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [orgAlt]: !prev[orgAlt],
    }));
  };

  return (
    <Box
      py={16}
      bgGradient="linear(to-r, brand.dark, #2a2f32, brand.dark)"
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="brand.primary"
        opacity="0.05"
        zIndex="0"
      />

      <Box maxW="6xl" mx="auto" px={4} position="relative" zIndex="1">
        <VStack spacing={6} mb={12}>
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            fontWeight="extrabold"
            color="brand.light"
            letterSpacing="tight"
          >
            Organizations I&apos;ve worked with
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="whiteAlpha.900"
            fontWeight="medium"
            maxW="2xl"
          >
            Where I&apos;ve had the privilege to contribute and grow alongside
            amazing teams
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 2, md: 3, lg: organizations.length }}
          spacing={16}
          justifyItems="center"
          alignItems="center"
        >
          {organizations.map((org) => (
            <Center key={org.alt}>
              <Box
                w="160px"
                h="160px"
                position="relative"
                cursor="pointer"
                onClick={() => handleCardClick(org.alt)}
                sx={{
                  perspective: "1200px",
                }}
              >
                <MotionBox
                  position="relative"
                  w="100%"
                  h="100%"
                  sx={{
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    rotateY: flippedCards[org.alt] ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                >
                  {/* Front of card */}
                  <MotionBox
                    position="absolute"
                    w="100%"
                    h="100%"
                    bg="white"
                    borderRadius="xl"
                    p={6}
                    boxShadow="xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="2px solid"
                    borderColor="brand.primary"
                    sx={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    initial={{ rotateY: 0 }}
                  >
                    <ProgressiveImage
                      originalImageSrc={org.src}
                      alt={org.alt}
                      className="chakra-image"
                    />
                  </MotionBox>

                  {/* Back of card */}
                  <MotionBox
                    position="absolute"
                    w="100%"
                    h="100%"
                    bgGradient="linear(to-br, brand.primary, #d69e2e)"
                    borderRadius="xl"
                    p={6}
                    boxShadow="xl"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    border="2px solid"
                    borderColor="brand.dark"
                    sx={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    initial={{ rotateY: 180 }}
                  >
                    <VStack spacing={3}>
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color="brand.dark"
                        lineHeight="tight"
                      >
                        {org.name}
                      </Text>
                      <Text
                        fontSize="md"
                        fontWeight="semibold"
                        color="brand.dark"
                        opacity={0.9}
                      >
                        {org.role}
                      </Text>
                      <Text
                        fontSize="sm"
                        color="brand.dark"
                        opacity={0.8}
                        fontWeight="medium"
                      >
                        {org.duration}
                      </Text>
                      <Text
                        fontSize="sm"
                        color="brand.dark"
                        opacity={0.7}
                        lineHeight="tight"
                      >
                        {org.description}
                      </Text>
                    </VStack>
                  </MotionBox>
                </MotionBox>
              </Box>
            </Center>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
