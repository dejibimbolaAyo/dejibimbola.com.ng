import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FiServer,
  FiDatabase,
  FiShield,
  FiZap,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

const architectureAreas = [
  {
    title: "Microservices Architecture",
    description:
      "Designed and implemented scalable microservices using Node.js, Express, and Docker. Implemented service discovery, load balancing, and fault tolerance patterns.",
    technologies: ["Node.js", "Express", "Docker", "Kubernetes", "Redis"],
    icon: FiServer,
    color: "blue",
  },
  {
    title: "Database Design & Optimization",
    description:
      "Architected both SQL and NoSQL database solutions. Implemented data modeling, indexing strategies, and query optimization for high-performance applications.",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "Firestore",
    ],
    icon: FiDatabase,
    color: "green",
  },
  {
    title: "Security & Authentication",
    description:
      "Implemented comprehensive security measures including JWT authentication, OAuth2, role-based access control, and data encryption at rest and in transit.",
    technologies: ["JWT", "OAuth2", "bcrypt", "Helmet.js", "CORS"],
    icon: FiShield,
    color: "red",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimized application performance through caching strategies, CDN implementation, database query optimization, and frontend performance tuning.",
    technologies: ["Redis", "CDN", "Lazy Loading", "Code Splitting", "Webpack"],
    icon: FiZap,
    color: "yellow",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Deployed and managed applications on AWS, DigitalOcean, and Google Cloud Platform. Implemented CI/CD pipelines, monitoring, and auto-scaling solutions.",
    technologies: ["AWS", "DigitalOcean", "GCP", "GitHub Actions", "Docker"],
    icon: FiGlobe,
    color: "purple",
  },
  {
    title: "API Design & Integration",
    description:
      "Designed RESTful and GraphQL APIs with comprehensive documentation. Integrated third-party services and implemented webhook systems for real-time data synchronization.",
    technologies: ["REST", "GraphQL", "Swagger", "Webhooks", "Rate Limiting"],
    icon: FiLayers,
    color: "teal",
  },
];

export default function TechnicalArchitecture() {
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
            Technical Architecture
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="gray.600"
            fontWeight="medium"
            maxW="2xl"
          >
            Comprehensive technical expertise across modern software
            architecture patterns
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          justifyItems="stretch"
        >
          {architectureAreas.map((area, index) => (
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
                    bg={`${area.color}.100`}
                    color={`${area.color}.600`}
                  >
                    <Icon as={area.icon} boxSize={6} />
                  </Box>
                  <Heading
                    as="h3"
                    size="md"
                    fontWeight="bold"
                    color="brand.dark"
                  >
                    {area.title}
                  </Heading>
                </HStack>

                <Text fontSize="sm" color="gray.600" lineHeight="tall">
                  {area.description}
                </Text>

                <Box>
                  <Text
                    fontSize="xs"
                    fontWeight="semibold"
                    color="gray.500"
                    mb={2}
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    Technologies
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {area.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        colorScheme={area.color}
                        variant="subtle"
                        fontSize="xs"
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
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
            Ready to architect your next solution?
          </Text>
          <Text fontSize="md" color="gray.600" maxW="2xl" mx="auto">
            From initial concept to production deployment, I bring comprehensive
            technical expertise to ensure your project is built with
            scalability, security, and performance in mind.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
