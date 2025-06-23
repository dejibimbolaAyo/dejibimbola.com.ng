import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Progress,
  Tooltip,
} from "@chakra-ui/react";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiGlobe,
  FiShield,
  FiZap,
  FiLayers,
  FiMonitor,
} from "react-icons/fi";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: FiCode,
    color: "blue",
    description:
      "Modern web development with focus on user experience and performance",
    skills: [
      { name: "React", proficiency: 95, years: 5 },
      { name: "TypeScript", proficiency: 90, years: 4 },
      { name: "Next.js", proficiency: 88, years: 3 },
      { name: "JavaScript", proficiency: 95, years: 8 },
      { name: "HTML/CSS", proficiency: 90, years: 8 },
      { name: "Tailwind CSS", proficiency: 85, years: 2 },
    ],
  },
  {
    category: "Backend Development",
    icon: FiServer,
    color: "green",
    description:
      "Server-side development with scalable architecture and API design",
    skills: [
      { name: "Node.js", proficiency: 92, years: 5 },
      { name: "Express.js", proficiency: 90, years: 5 },
      { name: "Python", proficiency: 75, years: 3 },
      { name: "REST APIs", proficiency: 95, years: 5 },
      { name: "GraphQL", proficiency: 80, years: 2 },
      { name: "Microservices", proficiency: 85, years: 3 },
    ],
  },
  {
    category: "Database & Data",
    icon: FiDatabase,
    color: "purple",
    description: "Database design, optimization, and data management solutions",
    skills: [
      { name: "MongoDB", proficiency: 90, years: 4 },
      { name: "PostgreSQL", proficiency: 85, years: 3 },
      { name: "Redis", proficiency: 80, years: 3 },
      { name: "Firestore", proficiency: 75, years: 2 },
      { name: "Data Modeling", proficiency: 85, years: 4 },
      { name: "Query Optimization", proficiency: 80, years: 3 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: FiGlobe,
    color: "orange",
    description: "Cloud infrastructure, deployment, and DevOps practices",
    skills: [
      { name: "AWS", proficiency: 85, years: 4 },
      { name: "Docker", proficiency: 80, years: 3 },
      { name: "Kubernetes", proficiency: 70, years: 2 },
      { name: "CI/CD", proficiency: 85, years: 3 },
      { name: "DigitalOcean", proficiency: 80, years: 3 },
      { name: "Serverless", proficiency: 75, years: 2 },
    ],
  },
  {
    category: "Security & Authentication",
    icon: FiShield,
    color: "red",
    description:
      "Application security, authentication, and compliance measures",
    skills: [
      { name: "JWT", proficiency: 90, years: 4 },
      { name: "OAuth2", proficiency: 80, years: 3 },
      { name: "Encryption", proficiency: 75, years: 3 },
      { name: "Security Best Practices", proficiency: 85, years: 4 },
      { name: "PCI DSS", proficiency: 70, years: 2 },
      { name: "CORS & CSP", proficiency: 80, years: 3 },
    ],
  },
  {
    category: "Performance & Optimization",
    icon: FiZap,
    color: "yellow",
    description: "Performance optimization, caching, and scalability solutions",
    skills: [
      { name: "Caching Strategies", proficiency: 85, years: 3 },
      { name: "CDN", proficiency: 80, years: 3 },
      { name: "Code Splitting", proficiency: 85, years: 4 },
      { name: "Lazy Loading", proficiency: 90, years: 3 },
      { name: "Performance Monitoring", proficiency: 80, years: 5 },
      { name: "Load Balancing", proficiency: 80, years: 5 },
    ],
  },
  {
    category: "Testing & Quality",
    icon: FiLayers,
    color: "teal",
    description:
      "Testing methodologies, quality assurance, and code reliability",
    skills: [
      { name: "Jest", proficiency: 80, years: 5 },
      { name: "React Testing Library", proficiency: 80, years: 5 },
      { name: "Unit Testing", proficiency: 85, years: 5 },
      { name: "Integration Testing", proficiency: 80, years: 5 },
      { name: "E2E Testing", proficiency: 80, years: 5 },
      { name: "Code Quality", proficiency: 85, years: 4 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: FiMonitor,
    color: "gray",
    description: "Development tools, platforms, and productivity solutions",
    skills: [
      { name: "Git", proficiency: 90, years: 5 },
      { name: "GitHub", proficiency: 85, years: 4 },
      { name: "VS Code", proficiency: 90, years: 8 },
      { name: "Postman", proficiency: 90, years: 8 },
      { name: "Figma", proficiency: 80, years: 5 },
    ],
  },
];

export default function TechnicalSkills() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box py={16} bg={bgColor}>
      <Box maxW="6xl" mx="auto" px={4}>
        <VStack spacing={6} mb={12}>
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            fontWeight="extrabold"
            color="brand.dark"
            letterSpacing="tight"
          >
            Technical Skills Organization
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="gray.600"
            fontWeight="medium"
            maxW="2xl"
          >
            Comprehensive technical expertise organized by domain and
            proficiency level
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          spacing={8}
          justifyItems="stretch"
        >
          {skillCategories.map((category, index) => (
            <Box
              key={index}
              bg={cardBg}
              borderRadius="xl"
              p={6}
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.200"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
                borderColor: "brand.primary",
              }}
            >
              <VStack spacing={4} align="stretch">
                <HStack spacing={3}>
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg={`${category.color}.100`}
                    color={`${category.color}.600`}
                  >
                    <Icon as={category.icon} boxSize={6} />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Heading size="md" fontWeight="bold" color="brand.dark">
                      {category.category}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      {category.description}
                    </Text>
                  </VStack>
                </HStack>

                <VStack spacing={3}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex} w="full">
                      <HStack justify="space-between" mb={2}>
                        <HStack spacing={2}>
                          <Text
                            fontSize="sm"
                            fontWeight="semibold"
                            color="brand.dark"
                          >
                            {skill.name}
                          </Text>
                          <Tooltip label={`${skill.years} years experience`}>
                            <Badge
                              colorScheme={category.color}
                              variant="subtle"
                              fontSize="xs"
                              px={2}
                              py={1}
                              borderRadius="md"
                            >
                              {skill.years}y
                            </Badge>
                          </Tooltip>
                        </HStack>
                        <Text
                          fontSize="sm"
                          fontWeight="bold"
                          color="brand.primary"
                        >
                          {skill.proficiency}%
                        </Text>
                      </HStack>
                      <Progress
                        value={skill.proficiency}
                        colorScheme={category.color}
                        size="sm"
                        borderRadius="full"
                        bg="gray.100"
                      />
                    </Box>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <Box mt={12} textAlign="center">
          <Text
            fontSize="lg"
            color="brand.primary"
            fontWeight="semibold"
            mb={4}
          >
            Continuously Evolving Skill Set
          </Text>
          <Text fontSize="md" color="gray.600" maxW="2xl" mx="auto">
            My technical skills are constantly evolving through hands-on
            projects, continuous learning, and staying current with industry
            best practices. Each skill is backed by real-world experience and
            measurable proficiency.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
