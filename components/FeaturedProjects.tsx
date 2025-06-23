import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";

const featuredProjects = [
  {
    title: "TEN Birthday Reminder",
    description:
      "Automated SMS platform connecting to Google Sheets for personalized birthday greetings and church member engagement.",
    tech: ["Node.js", "Google Sheets API", "SMS Integration", "Automation"],
    features: [
      "Automated birthday message delivery",
      "Admin dashboard with insights",
      "Scheduled jobs for data processing",
      "Error tracking and performance metrics",
    ],
    impact:
      "Enhanced church community engagement through personalized communication",
    category: "Automation",
  },
  {
    title: "COVID-19 Compliance Assessment",
    description:
      "Digital solution for worship centers to ensure compliance with health guidelines during pandemic reopening.",
    tech: ["React", "Node.js", "Assessment Engine", "Reporting"],
    features: [
      "Pre-opening compliance tests",
      "Weekly assessment tracking",
      "Decision-making dashboards",
      "Public health guideline enforcement",
    ],
    impact: "Supported safe reopening of worship centers during COVID-19",
    category: "Healthcare",
  },
  {
    title: "Secapay Escrow Service",
    description:
      "Trust-building escrow service for online marketplace transactions between buyers and sellers.",
    tech: ["Payment Processing", "Security", "Multi-tenancy", "Trust System"],
    features: [
      "Secure payment escrow",
      "Buyer-seller protection",
      "Transaction dispute resolution",
      "Trust verification system",
    ],
    impact: "Fostered trust in online marketplace transactions",
    category: "FinTech",
  },
  {
    title: "Neo-bank Prototype",
    description:
      "Competitive neo-bank solution with rapid transaction processing and robust KYC features.",
    tech: [
      "FinTech APIs",
      "KYC Integration",
      "Transaction Processing",
      "Security",
    ],
    features: [
      "Rapid transaction processing",
      "Robust KYC implementation",
      "User engagement optimization",
      "Competitive banking features",
    ],
    impact: "Improved user engagement and transaction efficiency",
    category: "FinTech",
  },
];

export default function FeaturedProjects() {
  return (
    <Box py={16} bg="white">
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
            Featured Projects
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="gray.600"
            fontWeight="medium"
            maxW="2xl"
          >
            Innovative solutions across automation, healthcare, and financial
            technology
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          justifyItems="stretch"
        >
          {featuredProjects.map((project, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="xl"
              p={8}
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
                <HStack justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={2}>
                    <Heading
                      as="h3"
                      size="lg"
                      color="brand.dark"
                      fontWeight="bold"
                    >
                      {project.title}
                    </Heading>
                    <Badge
                      colorScheme="orange"
                      variant="subtle"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {project.category}
                    </Badge>
                  </VStack>
                </HStack>

                <Text fontSize="md" color="gray.600" lineHeight="tall">
                  {project.description}
                </Text>

                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="brand.dark"
                    mb={2}
                  >
                    Key Features:
                  </Text>
                  <VStack align="flex-start" spacing={1}>
                    {project.features.map((feature, idx) => (
                      <Text
                        key={idx}
                        fontSize="sm"
                        color="gray.600"
                        _before={{ content: '"• "', color: "brand.primary" }}
                      >
                        {feature}
                      </Text>
                    ))}
                  </VStack>
                </Box>

                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="brand.dark"
                    mb={2}
                  >
                    Technologies:
                  </Text>
                  <HStack wrap="wrap" spacing={2}>
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        colorScheme="blue"
                        variant="outline"
                        px={2}
                        py={1}
                        fontSize="xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Box>

                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="brand.dark"
                    mb={2}
                  >
                    Impact:
                  </Text>
                  <Text fontSize="sm" color="gray.600" fontStyle="italic">
                    {project.impact}
                  </Text>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
