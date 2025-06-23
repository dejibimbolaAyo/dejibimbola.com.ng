import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Avatar,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const recommendations = [
  {
    title: "Highly Skilled",
    text: "Ayodeji is a real team player, always ready to help and has great technical skills.",
    name: "Toluwalope Yussuff",
    role: "Software Developer at ParallelScore",
    img: "./assets/toluwalope_yussuff.jpg",
  },
  {
    title: "Outstanding",
    text: "Working with Ayodeji for over 2 years now and the experience has contributed to my growth. Ayo is a passionate and proactive individual that pays strong attention to detail when he works. He is keen on collaboration and is quick-witted when it comes to problem-solving. He tries to create value on every task he works on and has an amazing eye for design. An outstanding individual!",
    name: "Shalom Izebhor",
    role: "Product design freelancer",
    img: "./assets/shalom_zebhor.jpg",
  },
  {
    title: "Talented",
    text: "One rarely come across real talents who stand out like Abimbola Ayodeji. I had the pleasure of working with him for two years at ParallelScore, collaborating on several project teams. Ayodeji's ability to handle multiple projects was unlike any I've seen before and made a dramatic increase in the productivity level of our company. No matter how tense a meeting, Abimbola Ayodeji made sure everyone left with a smile. As a team member Abimbola Ayodeji earns my highest recommendation.",
    name: "Moses Igbuku",
    role: "Senior Fullstack Nodejs Developer at Comyne",
    img: "./assets/moses_igbuku.jpg",
  },
  {
    title: "Driven",
    text: "I worked with Ayo for 3 years with 1 year reporting directly to me. He was always eager to learn and help, a great combination where the team's priorities were always put first but also always looking to grow and learn. It was an absolute pleasure managing Ayo, as he took direction well, looked to ask questions, was confident to voice his own ideas and never shied away from solving complex and difficult problems. If given the opportunity, I would love to work with Ayo again.",
    name: "Justin Fossey",
    role: "Senior Software Engineer at Valence",
    img: "./assets/justin_fossey.jpeg",
  },
];

export default function Recommendation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;

  const getVisibleCards = () => {
    const total = recommendations.length;
    const cards = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % total;
      cards.push(recommendations[index]);
    }
    return cards;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recommendations.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === recommendations.length - 1 ? 0 : prev + 1,
    );
  };

  const visibleCards = getVisibleCards();

  return (
    <Box bg="gray.50" py={12}>
      <Box maxW="6xl" mx="auto" px={4}>
        <Box position="relative">
          <HStack spacing={4} align="center" justify="center">
            <IconButton
              aria-label="Previous"
              bg="blackAlpha.200"
              icon={<ChevronLeftIcon boxSize={6} />}
              onClick={handlePrev}
              variant="ghost"
              size="lg"
              isRound
              color="white"
              _hover={{ bg: "blackAlpha.400" }}
            />

            <Box
              minH="380px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flex={1}
            >
              <SimpleGrid
                columns={cardsPerView}
                spacing={6}
                w="100%"
                maxW="6xl"
              >
                {visibleCards.map((rec, idx) => (
                  <Box
                    key={`${rec.name}-${idx}`}
                    bg="white"
                    borderRadius="xl"
                    boxShadow="lg"
                    p={6}
                    border="1px solid"
                    borderColor="gray.200"
                    minH="450px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    transition="all 0.3s"
                    _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                  >
                    <VStack spacing={4} align="stretch" flex={1}>
                      <Heading
                        as="h3"
                        size="md"
                        color="teal.500"
                        textAlign="center"
                      >
                        {rec.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.700" flex={1}>
                        {rec.text}
                      </Text>
                    </VStack>

                    <HStack spacing={4} justify="center" pt={4}>
                      <Avatar
                        name={rec.name}
                        src={rec.img}
                        size="md"
                        showBorder
                        borderColor="teal.400"
                      />
                      <Box textAlign="left">
                        <Text fontWeight="bold" color="gray.800" fontSize="sm">
                          {rec.name}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                          {rec.role}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <IconButton
              aria-label="Next"
              icon={<ChevronRightIcon boxSize={6} />}
              onClick={handleNext}
              variant="ghost"
              bg="blackAlpha.200"
              size="lg"
              isRound
              color="white"
              _hover={{ bg: "blackAlpha.400" }}
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
