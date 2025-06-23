import Layout from "../components/Layout";
import FeaturedProjects from "../components/FeaturedProjects";
import FunWorks from "../components/FunWorks";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

export default function Projects() {
  return (
    <Layout
      title="Projects by Ayodeji Abimbola | Deji Abimbola | Dejibimbola - Software Engineer Portfolio"
      description="Explore Ayodeji (Deji) Abimbola's featured projects and fun works. See technical depth and creative solutions across industries from one of Nigeria's top software engineers."
      keywords="Projects Ayodeji Abimbola, Projects Deji Abimbola, Projects Dejibimbola, Nigerian Software Engineer Projects, Lagos Tech Projects, Software Portfolio Projects"
    >
      <Box pt={20} py={12}>
        <VStack spacing={8} pt={20}>
          <Heading as="h1" size="2xl" color="brand.primary" textAlign="center">
            Projects
          </Heading>
          <Text fontSize="lg" color="gray.400" maxW="3xl" textAlign="center">
            Explore a selection of featured projects and fun works, showcasing
            technical depth and creative solutions across industries.
          </Text>
        </VStack>
      </Box>
      <FeaturedProjects />
      <FunWorks />
    </Layout>
  );
}
