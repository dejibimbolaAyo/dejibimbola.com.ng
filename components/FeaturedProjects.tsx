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
    <Box py={{ base: 12, md: 16 }} bg="white">
      <Box maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 4, md: 6 }} mb={{ base: 8, md: 12 }}>
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            textAlign="center"
            fontWeight="extrabold"
            color="brand.dark"
            letterSpacing="tight"
            px={{ base: 2, md: 0 }}
          >
            Featured Projects
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            textAlign="center"
            color="gray.600"
            fontWeight="medium"
            maxW="2xl"
            px={{ base: 3, md: 0 }}
          >
            Innovative solutions across automation, healthcare, and financial
            technology
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 6, md: 8 }}
          justifyItems="stretch"
          px={{ base: 2, md: 0 }}
        >
          {featuredProjects.map((project, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
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
              <VStack spacing={{ base: 3, md: 4 }} align="stretch">
                <HStack justify="space-between" align="flex-start">
                  <VStack align="flex-start" spacing={2}>
                    <Heading
                      as="h3"
                      size={{ base: "md", md: "lg" }}
                      color="brand.dark"
                      fontWeight="bold"
                    >
                      {project.title}
                    </Heading>
                    <Badge
                      colorScheme="orange"
                      variant="subtle"
                      px={{ base: 2, md: 3 }}
                      py={{ base: 0.5, md: 1 }}
                      borderRadius="full"
                      fontSize={{ base: "2xs", md: "xs" }}
                    >
                      {project.category}
                    </Badge>
                  </VStack>
                </HStack>

                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.600"
                  lineHeight="tall"
                >
                  {project.description}
                </Text>

                <Box>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
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
                        fontSize={{ base: "xs", md: "sm" }}
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
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="bold"
                    color="brand.dark"
                    mb={2}
                  >
                    Technologies:
                  </Text>
                  <HStack wrap="wrap" spacing={{ base: 1, md: 2 }}>
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        colorScheme="blue"
                        variant="outline"
                        px={{ base: 1.5, md: 2 }}
                        py={{ base: 0.5, md: 1 }}
                        fontSize={{ base: "2xs", md: "xs" }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Box>

                <Box>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="bold"
                    color="brand.dark"
                    mb={2}
                  >
                    Impact:
                  </Text>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color="brand.primary"
                    fontWeight="medium"
                    lineHeight="tall"
                  >
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
