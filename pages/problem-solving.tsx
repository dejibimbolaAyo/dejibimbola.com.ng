import Layout from "../components/Layout";
import ProblemSolving from "../components/ProblemSolving";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

export default function ProblemSolvingPage() {
  return (
    <Layout
      title="Problem Solving - Ayodeji Abimbola | Deji Abimbola | Dejibimbola - Technical Solutions"
      description="Explore Ayodeji (Deji) Abimbola's problem-solving approach. See real-world technical challenges solved with innovative solutions and measurable outcomes."
      keywords="Problem Solving Ayodeji Abimbola, Technical Solutions Deji Abimbola, Problem Solving Dejibimbola, Nigerian Software Engineer Solutions, Lagos Tech Problem Solving"
    >
      <Box pt={20} py={12}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" color="brand.primary" textAlign="center">
            Problem Solving
          </Heading>
          <Text fontSize="lg" color="gray.700" maxW="3xl" textAlign="center">
            Real-world technical challenges solved with innovative solutions and
            measurable outcomes.
          </Text>
        </VStack>
      </Box>
      <ProblemSolving />
    </Layout>
  );
}
