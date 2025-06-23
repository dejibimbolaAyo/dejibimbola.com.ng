import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Progress,
} from "@chakra-ui/react";
import { FiTrendingUp, FiGlobe, FiCode, FiZap } from "react-icons/fi";

const continuousLearning = [
  {
    area: "Frontend Development",
    currentFocus: "React 18, Next.js 13, TypeScript",
    progress: 90,
    recentCourses: [
      "Advanced React Patterns",
      "Next.js App Router",
      "TypeScript Mastery",
    ],
    icon: FiTrendingUp,
    color: "purple",
  },
  {
    area: "Backend & DevOps",
    currentFocus: "Node.js, Docker, Kubernetes, CI/CD",
    progress: 85,
    recentCourses: [
      "Microservices Architecture",
      "Kubernetes in Production",
      "GitHub Actions",
    ],
    icon: FiZap,
    color: "teal",
  },
  {
    area: "Cloud & Infrastructure",
    currentFocus: "AWS, DigitalOcean, Serverless Architecture",
    progress: 80,
    recentCourses: [
      "AWS Lambda",
      "Serverless Framework",
      "Infrastructure as Code",
    ],
    icon: FiGlobe,
    color: "blue",
  },
  {
    area: "Database & Data Engineering",
    currentFocus: "MongoDB, PostgreSQL, Redis, Data Analytics",
    progress: 75,
    recentCourses: [
      "Database Performance",
      "Data Modeling",
      "Analytics Engineering",
    ],
    icon: FiCode,
    color: "green",
  },
];

export default function Education() {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box py={16} bgGradient="linear(to-r, brand.dark, #2a2f32)">
      <Box maxW="6xl" mx="auto" px={4}>
        <VStack spacing={6} mb={12}>
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            fontWeight="extrabold"
            color="brand.light"
            letterSpacing="tight"
          >
            Continuous Learning
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="whiteAlpha.900"
            fontWeight="medium"
            maxW="2xl"
          >
            Continuous learning and professional development
          </Text>
        </VStack>

        {/* Continuous Learning */}
        <Box>
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            color="brand.light"
            mb={8}
            fontWeight="bold"
          >
            Continuous Learning
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {continuousLearning.map((item, index) => (
              <Box
                key={index}
                bg={bgColor}
                borderRadius="xl"
                p={6}
                boxShadow="xl"
                border="1px solid"
                borderColor={borderColor}
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "2xl",
                  borderColor: "brand.primary",
                }}
              >
                <VStack spacing={4} align="stretch">
                  <HStack spacing={3}>
                    <Box
                      p={3}
                      borderRadius="lg"
                      bg={`${item.color}.100`}
                      color={`${item.color}.600`}
                    >
                      <Icon as={item.icon} boxSize={6} />
                    </Box>
                    <VStack align="start" spacing={1}>
                      <Heading size="md" fontWeight="bold" color="brand.dark">
                        {item.area}
                      </Heading>
                      <Text
                        fontSize="sm"
                        color="brand.primary"
                        fontWeight="semibold"
                      >
                        {item.currentFocus}
                      </Text>
                    </VStack>
                  </HStack>

                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="gray.500"
                      >
                        Current Progress
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color="brand.primary"
                      >
                        {item.progress}%
                      </Text>
                    </HStack>
                    <Progress
                      value={item.progress}
                      colorScheme={item.color}
                      size="sm"
                      borderRadius="full"
                      bg="gray.100"
                    />
                  </Box>

                  <Box>
                    <Text
                      fontSize="xs"
                      fontWeight="semibold"
                      color="gray.500"
                      mb={2}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Recent Courses
                    </Text>
                    <VStack spacing={1} align="start">
                      {item.recentCourses.map((course, courseIndex) => (
                        <Text
                          key={courseIndex}
                          fontSize="xs"
                          color="gray.600"
                          fontWeight="medium"
                        >
                          • {course}
                        </Text>
                      ))}
                    </VStack>
                  </Box>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box mt={12} textAlign="center">
          <Text
            fontSize="lg"
            color="brand.primary"
            fontWeight="semibold"
            mb={4}
          >
            Committed to Lifelong Learning
          </Text>
          <Text fontSize="md" color="whiteAlpha.900" maxW="2xl" mx="auto">
            Technology evolves rapidly, and I stay current through continuous
            learning, certifications, and hands-on experimentation with emerging
            technologies.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
