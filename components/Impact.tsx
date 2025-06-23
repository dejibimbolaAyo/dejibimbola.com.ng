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
    <Box
      py={{ base: 12, md: 16 }}
      bgGradient="linear(to-r, brand.dark, #2a2f32)"
    >
      <Box maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 4, md: 6 }} mb={{ base: 8, md: 12 }}>
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            textAlign="center"
            fontWeight="extrabold"
            color="brand.light"
            letterSpacing="tight"
            px={{ base: 2, md: 0 }}
          >
            Impact & Results
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            textAlign="center"
            color="whiteAlpha.900"
            fontWeight="medium"
            maxW="2xl"
            px={{ base: 3, md: 0 }}
          >
            Quantifiable achievements across FinTech, E-commerce, and SaaS
            platforms
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 4, md: 8 }}
          justifyItems="center"
          px={{ base: 2, md: 0 }}
        >
          {impactMetrics.map((item, index) => (
            <VStack
              key={index}
              bg="white"
              borderRadius="xl"
              p={{ base: 4, md: 6 }}
              boxShadow="xl"
              textAlign="center"
              spacing={{ base: 3, md: 4 }}
              minH={{ base: "200px", md: "220px" }}
              justify="center"
              border="1px solid"
              borderColor="brand.primary"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "2xl",
                borderColor: "brand.primary",
              }}
              w="full"
              maxW={{ base: "280px", sm: "none" }}
            >
              <Text
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                color="brand.primary"
              >
                {item.icon}
              </Text>
              <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="extrabold"
                color="brand.dark"
                lineHeight="tight"
              >
                {item.metric}
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
                color="brand.dark"
                textAlign="center"
                px={{ base: 1, md: 0 }}
              >
                {item.label}
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="brand.primary"
                fontWeight="semibold"
                textAlign="center"
              >
                {item.company}
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="gray.600"
                textAlign="center"
                lineHeight="tall"
                px={{ base: 1, md: 0 }}
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
