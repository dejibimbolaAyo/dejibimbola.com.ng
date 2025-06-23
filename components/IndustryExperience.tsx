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
  Progress,
} from "@chakra-ui/react";
import {
  FiTrendingUp,
  FiCreditCard,
  FiTruck,
  FiUsers,
  FiMonitor,
} from "react-icons/fi";

const industries = [
  {
    name: "FinTech",
    description:
      "Built secure payment systems, digital banking solutions, and financial management platforms with focus on compliance and security.",
    projects: ["SecaPay", "USSD Banking", "Payment Gateway"],
    icon: FiCreditCard,
    color: "green",
    experience: 85,
    technologies: ["Node.js", "MongoDB", "AWS", "JWT", "Encryption"],
  },
  {
    name: "E-commerce & Logistics",
    description:
      "Developed scalable e-commerce platforms and logistics management systems handling thousands of daily transactions.",
    projects: ["TradeDepot", "Delivery Optimization", "Inventory Management"],
    icon: FiTruck,
    color: "blue",
    experience: 90,
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    name: "SaaS & B2B",
    description:
      "Created enterprise SaaS solutions and B2B platforms with advanced analytics and user management systems.",
    projects: ["Valence", "Business Intelligence", "User Analytics"],
    icon: FiTrendingUp,
    color: "purple",
    experience: 80,
    technologies: [
      "TypeScript",
      "React",
      "GraphQL",
      "Elasticsearch",
      "Kubernetes",
    ],
  },
  {
    name: "Healthcare & Public Sector",
    description:
      "Developed healthcare management systems and public sector applications with strict compliance requirements.",
    projects: ["COVID-19 Tracker", "Healthcare Portal", "Government Systems"],
    icon: FiUsers,
    color: "red",
    experience: 75,
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "HIPAA Compliance",
      "Security",
    ],
  },
  {
    name: "Startup & Innovation",
    description:
      "Guided startups from concept to MVP, providing technical leadership and scalable architecture solutions.",
    projects: ["BitSix Ltd.", "MVP Development", "Technical Consulting"],
    icon: FiMonitor,
    color: "orange",
    experience: 95,
    technologies: [
      "Full Stack",
      "Cloud Architecture",
      "CI/CD",
      "Scalability",
      "Mentoring",
    ],
  },
  {
    name: "Manufacturing & Automation",
    description:
      "Implemented automation systems and manufacturing process optimization with IoT integration.",
    projects: ["Robotic Systems", "Process Automation", "IoT Integration"],
    icon: FiTrendingUp,
    color: "teal",
    experience: 70,
    technologies: [
      "IoT",
      "Python",
      "Automation",
      "Data Analytics",
      "Hardware Integration",
    ],
  },
];

export default function IndustryExperience() {
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
            Industry Experience
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="whiteAlpha.900"
            fontWeight="medium"
            maxW="2xl"
          >
            Proven track record across diverse industries with deep domain
            expertise
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          justifyItems="stretch"
        >
          {industries.map((industry, index) => (
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
                transform: "translateY(-6px)",
                boxShadow: "2xl",
                borderColor: "brand.primary",
              }}
            >
              <VStack spacing={4} align="stretch">
                <HStack spacing={3} justify="space-between">
                  <HStack spacing={3}>
                    <Box
                      p={3}
                      borderRadius="lg"
                      bg={`${industry.color}.100`}
                      color={`${industry.color}.600`}
                    >
                      <Icon as={industry.icon} boxSize={6} />
                    </Box>
                    <Heading
                      as="h3"
                      size="md"
                      fontWeight="bold"
                      color="brand.dark"
                    >
                      {industry.name}
                    </Heading>
                  </HStack>
                  <Badge
                    colorScheme={industry.color}
                    variant="solid"
                    fontSize="sm"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {industry.experience}%
                  </Badge>
                </HStack>

                <Text fontSize="sm" color="gray.600" lineHeight="tall">
                  {industry.description}
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
                    Key Projects
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {industry.projects.map((project, projectIndex) => (
                      <Badge
                        key={projectIndex}
                        colorScheme={industry.color}
                        variant="outline"
                        fontSize="xs"
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        {project}
                      </Badge>
                    ))}
                  </HStack>
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
                    Technologies
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {industry.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        colorScheme="gray"
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

                <Box>
                  <Text
                    fontSize="xs"
                    fontWeight="semibold"
                    color="gray.500"
                    mb={2}
                  >
                    Experience Level
                  </Text>
                  <Progress
                    value={industry.experience}
                    colorScheme={industry.color}
                    size="sm"
                    borderRadius="full"
                    bg="gray.100"
                  />
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
            Cross-Industry Expertise
          </Text>
          <Text fontSize="md" color="whiteAlpha.900" maxW="2xl" mx="auto">
            From FinTech to manufacturing, I bring deep technical expertise
            combined with industry-specific knowledge to deliver solutions that
            drive real business value.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
