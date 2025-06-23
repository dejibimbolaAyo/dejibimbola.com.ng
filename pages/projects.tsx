import Layout from "../components/Layout";
import FeaturedProjects from "../components/FeaturedProjects";
import FunWorks from "../components/FunWorks";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

export default function Projects() {
  return (
    <Layout>
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
