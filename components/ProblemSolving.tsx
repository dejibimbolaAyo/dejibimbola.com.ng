import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  FiTarget,
  FiZap,
  FiCheckCircle,
  FiTrendingUp,
  FiShield,
  FiDatabase,
} from "react-icons/fi";

const problemSolutions = [
  {
    problem: "Scalability Challenge at TradeDepot",
    context:
      "E-commerce platform struggling with 10,000+ daily transactions and slow response times",
    solution:
      "Implemented microservices architecture with Redis caching, database optimization, and CDN integration",
    outcome:
      "60% faster response times, 99.9% uptime, handled 50,000+ daily transactions",
    technologies: ["Node.js", "Redis", "PostgreSQL", "Docker", "AWS"],
    icon: FiTrendingUp,
    color: "blue",
  },
  {
    problem: "Security Vulnerabilities in Payment System",
    context:
      "FinTech application with multiple security gaps and compliance requirements",
    solution:
      "Implemented comprehensive security measures including JWT authentication, encryption, and audit trails",
    outcome:
      "Zero security breaches, PCI DSS compliance, 100% secure transaction processing",
    technologies: ["JWT", "bcrypt", "Encryption", "Helmet.js", "Audit Logs"],
    icon: FiShield,
    color: "red",
  },
  {
    problem: "Real-time Data Synchronization",
    context:
      "Multi-platform application requiring instant data updates across web and mobile",
    solution:
      "Built WebSocket-based real-time system with event-driven architecture and conflict resolution",
    outcome:
      "Real-time updates across all platforms, 99.9% data consistency, improved user experience",
    technologies: [
      "WebSockets",
      "Socket.io",
      "Event Sourcing",
      "Redis",
      "Conflict Resolution",
    ],
    icon: FiZap,
    color: "yellow",
  },
  {
    problem: "Legacy System Integration",
    context:
      "Manufacturing company with outdated systems requiring modern API integration",
    solution:
      "Developed middleware layer with API gateway, data transformation, and monitoring systems",
    outcome:
      "Seamless integration, 40% faster data processing, real-time monitoring dashboard",
    technologies: [
      "API Gateway",
      "Middleware",
      "Data Transformation",
      "Monitoring",
      "Legacy Integration",
    ],
    icon: FiDatabase,
    color: "green",
  },
  {
    problem: "Performance Optimization for SaaS Platform",
    context:
      "Enterprise SaaS application with slow loading times and poor user experience",
    solution:
      "Implemented code splitting, lazy loading, database query optimization, and CDN deployment",
    outcome:
      "70% faster page loads, 50% reduction in server load, improved user retention",
    technologies: [
      "Code Splitting",
      "Lazy Loading",
      "Query Optimization",
      "CDN",
      "Performance Monitoring",
    ],
    icon: FiTarget,
    color: "purple",
  },
  {
    problem: "Startup MVP Development Under Pressure",
    context:
      "Startup needing rapid MVP development with limited resources and tight deadlines",
    solution:
      "Adopted rapid prototyping approach with modern tech stack and cloud-native architecture",
    outcome:
      "MVP delivered in 6 weeks, secured funding, scalable foundation for growth",
    technologies: [
      "Rapid Prototyping",
      "Cloud Native",
      "Modern Stack",
      "Scalable Architecture",
      "CI/CD",
    ],
    icon: FiCheckCircle,
    color: "teal",
  },
];

export default function ProblemSolving() {
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
            Problem-Solving Showcase
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="gray.600"
            fontWeight="medium"
            maxW="2xl"
          >
            Real-world challenges solved with innovative technical solutions
          </Text>
        </VStack>

        <Accordion allowMultiple gap={4}>
          {problemSolutions.map((item, index) => (
            <AccordionItem
              key={index}
              bg={cardBg}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              overflow="hidden"
              boxShadow="lg"
            >
              <AccordionButton
                py={6}
                px={6}
                _hover={{ bg: "gray.50" }}
                _expanded={{ bg: "brand.primary", color: "white" }}
              >
                <HStack spacing={4} flex="1" textAlign="left">
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg={`${item.color}.100`}
                    color={`${item.color}.600`}
                  >
                    <Icon as={item.icon} boxSize={6} />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Heading size="md" fontWeight="bold">
                      {item.problem}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      {item.context}
                    </Text>
                  </VStack>
                </HStack>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={6} px={6}>
                <VStack spacing={4} align="stretch">
                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="brand.primary"
                      mb={2}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Solution Approach
                    </Text>
                    <Text fontSize="sm" color="gray.600" lineHeight="tall">
                      {item.solution}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="green.600"
                      mb={2}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Measurable Outcomes
                    </Text>
                    <Text fontSize="sm" color="gray.600" lineHeight="tall">
                      {item.outcome}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="gray.500"
                      mb={2}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Technologies Used
                    </Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          colorScheme={item.color}
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
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <Box mt={12} textAlign="center">
          <Text
            fontSize="lg"
            color="brand.primary"
            fontWeight="semibold"
            mb={4}
          >
            Proven Problem-Solving Methodology
          </Text>
          <Text fontSize="md" color="gray.600" maxW="2xl" mx="auto">
            From complex technical challenges to business-critical problems, I
            approach each issue with systematic analysis, innovative thinking,
            and proven technical solutions that deliver measurable results.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
