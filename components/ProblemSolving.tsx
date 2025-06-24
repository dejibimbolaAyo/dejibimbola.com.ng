import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FiTarget, FiZap, FiTrendingUp, FiShield } from "react-icons/fi";

const problemSolutions = [
  {
    problem: "Product propagation across localized shopping views.",
    context:
      "E-commerce platform where products had to reflect quickly across regions for sales and inventory alignment.",
    solution:
      "Implemented a microservice architecture and event-driven processing with queues for async updates to Area Baskets.",
    outcome:
      "Propagation time reduced from hours to under 10 minutes; improved system scalability and responsiveness.",
    technologies: ["Node.js", "RabbitMQ", "Event-driven architecture"],
    icon: FiTrendingUp,
    color: "blue",
  },
  {
    problem: "Dispatch route planning slowdowns.",
    context:
      "Logistics module for dispatching goods to over 1,000 retail stores.",
    solution:
      "Integrated Routific for automated route optimization and moved route planning to background workers.",
    outcome:
      "Faster route generation, reduced system lag, and improved delivery efficiency.",
    technologies: [
      "Routific API",
      "Node.js",
      "RabbitMQ",
      "Asynchronous job queues",
    ],
    icon: FiShield,
    color: "red",
  },
  {
    problem: "Information architecture overhaul and performance improvement.",
    context:
      "Information architecture overhaul on a multi-tenant coaching platform.",
    solution:
      "Built a dynamic sidebar menu served via API, implemented authorization filtering, excluded unnecessary child menu data, and refactored data-fetching logic.",
    outcome:
      "Improved user experience, eliminated data refetching issues, and reduced frontend complexity.",
    technologies: ["React.js", "MobX", "TypeScript", "Node.js"],
    icon: FiZap,
    color: "yellow",
  },
  {
    problem: "API responses were bloated with base16-encoded image.",
    context:
      "The system was a multi-tenant coaching platform where logos and profile images were stored in the database as binary blobs and returned with every API call. Enterprise clients had strict data governance and residency requirements.",
    solution:
      "Refactored the image handling pipeline by replacing blobs with a file-path-based model. Images were pre-processed on upload into multiple sizes and served via cacheable URLs. Legacy blobs were migrated, and regional storage plus tenant isolation was enforced.",
    outcome:
      "API payload sizes dropped significantly. Frontend performance improved. CDN delivery and lazy loading were enabled. The platform remained fully compliant with tenant-specific data governance requirements.",
    technologies: [
      "File-based storage system",
      "Image pre-processing",
      "Cacheable URL routing",
      "Custom CDN integration",
      "Tenant-aware access control",
      "Data migration scripts",
    ],
    icon: FiTarget,
    color: "purple",
  },
];

export default function ProblemSolving() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box py={16} bg={bgColor}>
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
            Problem-Solving Showcase
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="gray.600"
            fontWeight="medium"
            maxW="2xl"
          >
            Real-world challenges solved with innovative technical solutions
          </Text>
        </VStack>

        <Accordion allowMultiple gap={4}>
          {problemSolutions.map((item, index) => (
            <AccordionItem
              key={index}
              bg={cardBg}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              overflow="hidden"
              boxShadow="lg"
              my={4}
            >
              <AccordionButton
                py={6}
                px={6}
                _hover={{ bg: "gray.50" }}
                _expanded={{ bg: "dark", color: "white" }}
              >
                <HStack spacing={4} flex="1" textAlign="left">
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg={`${item.color}.100`}
                    color={`${item.color}.600`}
                  >
                    <Icon as={item.icon} boxSize={6} />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Heading size="md" fontWeight="bold">
                      {item.problem}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      {item.context}
                    </Text>
                  </VStack>
                </HStack>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={6} px={6}>
                <VStack spacing={4} align="stretch">
                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="brand.primary"
                      mb={2}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Solution Approach
                    </Text>
                    <Text fontSize="sm" color="gray.600" lineHeight="tall">
                      {item.solution}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="green.600"
                      mb={2}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Measurable Outcomes
                    </Text>
                    <Text fontSize="sm" color="gray.600" lineHeight="tall">
                      {item.outcome}
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="gray.500"
                      mb={2}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Technologies Used
                    </Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          colorScheme={item.color}
                          variant="subtle"
                          fontSize="xs"
                          px={2}
                          py={1}
                          borderRadius="md"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <Box mt={12} textAlign="center">
          <Text
            fontSize="lg"
            color="brand.primary"
            fontWeight="semibold"
            mb={4}
          >
            Proven Problem-Solving Methodology
          </Text>
          <Text fontSize="md" color="gray.600" maxW="2xl" mx="auto">
            From complex technical challenges to business-critical problems, I
            approach each issue with systematic analysis, innovative thinking,
            and proven technical solutions that deliver measurable results.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
