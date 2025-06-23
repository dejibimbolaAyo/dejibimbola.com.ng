import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ProgressiveImage from "./elements/ProgressiveImage";

const skills = [
  { src: "./assets/react.svg", alt: "React", label: "React" },
  { src: "./assets/typescript.svg", alt: "TypeScript", label: "TypeScript" },
  { src: "./assets/javascript.png", alt: "JavaScript", label: "JavaScript" },
  { src: "./assets/node.png", alt: "Node.js", label: "Node.js" },
  { src: "./assets/mongodb.svg", alt: "MongoDB", label: "MongoDB" },
  { src: "./assets/aws_lambda.png", alt: "AWS Lambda", label: "AWS Lambda" },
  {
    src: "./assets/digital_ocean.png",
    alt: "Digital Ocean",
    label: "Digital Ocean",
  },
  { src: "./assets/firestore.png", alt: "Firestore", label: "Firestore" },
];

export default function Skills() {
  return (
    <Box
      maxW="6xl"
      my={{ base: 6, md: 12 }}
      mx="auto"
      pb={{ base: 3, md: 6 }}
      px={{ base: 3, md: 4 }}
    >
      <Heading
        as="h2"
        size={{ base: "lg", md: "xl" }}
        textAlign="center"
        fontWeight="extrabold"
        color="brand.light"
        mb={{ base: 4, md: 6 }}
        px={{ base: 1, md: 0 }}
      >
        Core Skills
      </Heading>
      <SimpleGrid
        columns={{ base: 3, sm: 4, md: 6, lg: 8 }}
        spacing={{ base: 2, md: 3 }}
        justifyItems="center"
        px={{ base: 1, md: 0 }}
        gap={{ base: 2, md: 3 }}
      >
        {skills.map((skill) => (
          <Box
            key={skill.alt}
            bgGradient="linear(to-br, brand.light, #f8f9fa, #f1f3f4)"
            borderRadius="lg"
            w={{ base: "90px", sm: "100px", md: "110px", lg: "120px" }}
            h={{ base: "100px", sm: "110px", md: "120px", lg: "130px" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={{ base: 1.5, md: 2 }}
            border="1px solid"
            borderColor="brand.primary"
            boxShadow="0 2px 16px 0 rgba(201,138,6,0.12)"
            transition="all 0.2s ease-in-out"
            _hover={{
              boxShadow: "0 4px 24px 0 rgba(201,138,6,0.2)",
              transform: "scale(1.04) rotate(-0.5deg)",
              borderColor: "brand.primary",
              zIndex: 1,
            }}
            textAlign="center"
            position="relative"
            flexShrink={0}
          >
            <VStack
              spacing={{ base: 0.5, md: 1 }}
              flex={1}
              justify="center"
              w="full"
            >
              <Box
                w={{ base: 8, sm: 10, md: 12, lg: 14 }}
                h={{ base: 8, sm: 10, md: 12, lg: 14 }}
                mx="auto"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <ProgressiveImage
                  originalImageSrc={skill.src}
                  alt={skill.alt}
                />
              </Box>
              <Text
                fontWeight="bold"
                fontSize={{ base: "2xs", sm: "xs", md: "sm" }}
                color="brand.dark"
                letterSpacing="tight"
                lineHeight="tight"
                px={1}
                noOfLines={2}
                textAlign="center"
              >
                {skill.label}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
