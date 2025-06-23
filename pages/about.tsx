import Layout from "../components/Layout";
import IndustryExperience from "../components/IndustryExperience";
import Education from "../components/Education";
import TechnicalArchitecture from "../components/TechnicalArchitecture";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Layout
      title="About Ayodeji Abimbola | Deji Abimbola | Dejibimbola - Entrepreneur & Technical Leader"
      description="Learn about Ayodeji (Deji) Abimbola's journey as an entrepreneur, technical leader, and architect. Discover his expertise in building impactful products and guiding teams to success across startups and enterprise SaaS."
      keywords="About Ayodeji Abimbola, About Deji Abimbola, About Dejibimbola, Nigerian Entrepreneur, Technical Leader, Software Architect, Lagos Tech Leader"
    >
      <Box pt={20} py={12}>
        <VStack spacing={8} pt={20} px={4}>
          <Heading as="h1" size="2xl" color="brand.primary" textAlign="center">
            About Me
          </Heading>
          <Text fontSize="lg" color="gray.400" maxW="3xl" textAlign="center">
            Entrepreneur, technical leader, and architect with a passion for
            building impactful products and guiding teams to success. My journey
            spans startups, enterprise SaaS, and industry-defining platforms.
          </Text>
        </VStack>
      </Box>
      <TechnicalArchitecture />
      <IndustryExperience />
      <Education />
    </Layout>
  );
}
