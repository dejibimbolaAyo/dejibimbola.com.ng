import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const impactMetrics = [
  {
    metric: "60%",
    label: "API Response Time Improvement",
    description:
      "Reduced API response time through optimized file management system",
    company: "Valence",
    icon: "⚡",
  },
  {
    metric: "30%",
    label: "Tool Visibility Increase",
    description: "Enhanced user onboarding and retention through improved UX",
    company: "Valence",
    icon: "📈",
  },
  {
    metric: "20%",
    label: "Delivery Cost Reduction",
    description: "Optimized routing and dispatch systems for logistics",
    company: "TradeDepot",
    icon: "💰",
  },
  {
    metric: "99.9%",
    label: "System Uptime",
    description: "Maintained high availability across mobile and web platforms",
    company: "TradeDepot",
    icon: "🛡️",
  },
  {
    metric: "2",
    label: "Startups Guided to MVP",
    description:
      "Successfully guided clients from concept to market-ready products",
    company: "BitSix Ltd.",
    icon: "🚀",
  },
  {
    metric: "8",
    label: "Developers Led",
    description:
      "Managed and mentored development teams for successful delivery",
    company: "Robotic Systems",
    icon: "👥",
  },
];

export default function Impact() {
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
            Impact & Results
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="whiteAlpha.900"
            fontWeight="medium"
            maxW="2xl"
          >
            Quantifiable achievements across FinTech, E-commerce, and SaaS
            platforms
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          spacing={8}
          justifyItems="center"
        >
          {impactMetrics.map((item, index) => (
            <VStack
              key={index}
              bg="white"
              borderRadius="xl"
              p={6}
              boxShadow="xl"
              textAlign="center"
              spacing={4}
              minH="220px"
              justify="center"
              border="1px solid"
              borderColor="brand.primary"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "2xl",
                borderColor: "brand.primary",
              }}
            >
              <Text fontSize="4xl" fontWeight="bold" color="brand.primary">
                {item.icon}
              </Text>
              <Text
                fontSize="3xl"
                fontWeight="extrabold"
                color="brand.dark"
                lineHeight="tight"
              >
                {item.metric}
              </Text>
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="brand.dark"
                textAlign="center"
              >
                {item.label}
              </Text>
              <Text
                fontSize="sm"
                color="brand.primary"
                fontWeight="semibold"
                textAlign="center"
              >
                {item.company}
              </Text>
              <Text
                fontSize="sm"
                color="gray.600"
                textAlign="center"
                lineHeight="tall"
              >
                {item.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
