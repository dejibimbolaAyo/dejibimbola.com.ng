import Layout from "../components/Layout";
import Recommendation from "../components/Recommendation";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

export default function RecommendationsPage() {
  return (
    <Layout>
      <Box pt={20} py={12}>
        <VStack spacing={8} pt={20} px={4}>
          <Heading as="h1" size="2xl" color="brand.primary" textAlign="center">
            Recommendations
          </Heading>
          <Text fontSize="lg" color="gray.400" maxW="3xl" textAlign="center">
            I&apos;ve had the pleasure of working with incredible teammates and
            collaborators who&apos;ve consistently described me as driven,
            talented, and deeply committed to adding value. <br /> Over the
            years, I&apos;ve built a reputation for being a proactive
            problem-solver with strong technical skills, a sharp eye for design,
            and a collaborative mindset. <br /> I care deeply about team
            success, ask the right questions, and stay eager to learn and grow.
            <br /> <br /> Whether leading or contributing, I approach each task
            with attention to detail, creativity, and a focus on impact—and
            I&apos;m grateful that this has made a lasting impression on those
            I&apos;ve worked with.
          </Text>
        </VStack>
      </Box>
      <Recommendation />
    </Layout>
  );
}
