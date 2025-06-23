import Layout from "../components/Layout";
import Employment from "../components/Employment";
import TechnicalSkills from "../components/TechnicalSkills";
import Education from "../components/Education";
import { Box, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

export default function ResumePage() {
  const handleDownloadResume = () => {
    // Replace with your actual PDF file path once you add it to public/
    const resumeUrl = "assets/dejibimbola-software-engineer-resume.pdf";

    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "DejiBimbola_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <Box pt={20} py={12}>
        <VStack spacing={8} pt={20}>
          <Heading as="h1" size="2xl" color="brand.primary" textAlign="center">
            Resume
          </Heading>
          <Text fontSize="lg" color="gray.400" maxW="3xl" textAlign="center">
            Detailed employment history, technical skills, and certifications.
          </Text>
          <HStack spacing={4}>
            <Button
              leftIcon={<FiDownload />}
              colorScheme="yellow"
              size="lg"
              onClick={handleDownloadResume}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s"
            >
              Download Resume as PDF
            </Button>
          </HStack>
        </VStack>
      </Box>
      <Employment />
      <TechnicalSkills />
      <Education />
    </Layout>
  );
}
