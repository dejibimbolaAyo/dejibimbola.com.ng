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
    <Box maxW="6xl" my={16} mx="auto" pb={8} px={4}>
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        fontWeight="extrabold"
        color="brand.light"
        mb={8}
      >
        Core Skills
      </Heading>
      <SimpleGrid
        columns={{ base: 4, sm: 6, md: 8 }}
        spacing={4}
        justifyItems="center"
      >
        {skills.map((skill) => (
          <Box
            key={skill.alt}
            bgGradient="linear(to-br, brand.light, #f8f9fa, #f1f3f4)"
            borderRadius="xl"
            w="120px"
            h="140px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={3}
            border="1.5px solid"
            borderColor="brand.primary"
            boxShadow="0 4px 24px 0 rgba(201,138,6,0.15)"
            transition="all 0.25s cubic-bezier(.4,2,.6,1)"
            _hover={{
              boxShadow: "0 8px 32px 0 rgba(201,138,6,0.25)",
              transform: "scale(1.06) rotate(-1deg)",
              borderColor: "brand.primary",
              zIndex: 1,
            }}
            textAlign="center"
            position="relative"
          >
            <VStack spacing={2} flex={1} justify="center">
              <Box w={12} h={12} mx="auto">
                <ProgressiveImage
                  originalImageSrc={skill.src}
                  alt={skill.alt}
                />
              </Box>
              <Text
                fontWeight="bold"
                fontSize="sm"
                color="brand.dark"
                letterSpacing="tight"
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
