import {
  Box,
  Heading,
  Flex,
  IconButton,
  useBreakpointValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ProgressiveImage from "./elements/ProgressiveImage";
import Link from "next/link";
import { useState } from "react";

const funWorks = [
  { img: "./assets/1.png", alt: "Fun Work 1" },
  { img: "./assets/2.png", alt: "Fun Work 2" },
  { img: "./assets/3.png", alt: "Fun Work 3" },
  { img: "./assets/4.png", alt: "Fun Work 4" },
];

export default function FunWorks() {
  const [current, setCurrent] = useState(0);
  const cardsPerView = useBreakpointValue({ base: 1, md: 2, lg: 4 }) || 1;
  const total = funWorks.length + 1; // +1 for See More card

  const getVisibleFunWorks = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const idx = (current + i) % total;
      if (idx < funWorks.length) {
        visible.push(
          <Box
            key={funWorks[idx].alt}
            bgGradient="linear(to-br, brand.light, #f8f9fa, #f1f3f4)"
            borderRadius="2xl"
            w="220px"
            h="220px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            border="1.5px solid"
            borderColor="brand.primary"
            boxShadow="0 4px 24px 0 rgba(201,138,6,0.15)"
            transition="all 0.25s cubic-bezier(.4,2,.6,1)"
            _hover={{
              boxShadow: "0 8px 32px 0 rgba(201,138,6,0.25)",
              transform: "scale(1.06) rotate(-1deg)",
              borderColor: "brand.primary",
              zIndex: 1,
            }}
            textAlign="center"
            position="relative"
            mx={2}
          >
            <ProgressiveImage
              originalImageSrc={funWorks[idx].img}
              alt={funWorks[idx].alt}
              className="chakra-image"
            />
          </Box>,
        );
      } else {
        // See More card
        visible.push(
          <ChakraLink
            as={Link}
            href="/portfolio"
            key="see-more"
            _hover={{ textDecoration: "none" }}
            w="220px"
            h="220px"
            mx={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              bgGradient="linear(to-br, brand.primary 25%, #faf8f3)"
              borderRadius="2xl"
              boxShadow="0 8px 32px 0 rgba(0,0,0,0.18)"
              border="1.5px solid"
              borderColor="brand.primary"
              w="100%"
              h="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              transition="all 0.3s"
              _hover={{
                boxShadow: "0 12px 32px 0 rgba(0,0,0,0.28)",
                transform: "scale(1.04) translateY(-8px)",
                bgGradient: "linear(to-br, brand.primary, brand.dark)",
                borderColor: "brand.dark",
              }}
              position="relative"
            >
              <Box
                fontWeight="extrabold"
                fontSize="xl"
                color="brand.dark"
                mb={2}
                letterSpacing="tight"
              >
                See more
              </Box>
              <Box
                as="span"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="transform 0.3s"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#c98a06"
                    d="M17.92 11.62c-.0476-.1228-.119-.2349-.21-.33l-5-5c-.0932-.09324-.2039-.1672-.3258-.21766-.1218-.05046-.2523-.07643-.3842-.07643-.2663 0-.5217.10578-.71.29409-.0932.09324-.1672.20393-.2177.32575-.0504.12182-.0764.25239-.0764.38425 0 .2663.1058.52169.2941.71l3.3 3.29H7c-.26522 0-.51957.1054-.70711.2929C6.10536 11.4804 6 11.7348 6 12c0 .2652.10536.5196.29289.7071C6.48043 12.8946 6.73478 13 7 13h7.59l-3.3 3.29c-.0937.093-.1681.2036-.2189.3254-.0508.1219-.0769.2526-.0769.3846s.0261.2627.0769.3846c.0508.1218.1252.2324.2189.3254.093.0937.2036.1681.3254.2189.1219.0508.2526.0769.3846.0769s.2627-.0261.3846-.0769c.1218-.0508.2324-.1252.3254-.2189l5-5c.091-.0951.1624-.2073.21-.33.1-.2435.1-.5165 0-.76z"
                  />
                </svg>
              </Box>
            </Box>
          </ChakraLink>,
        );
      }
    }
    return visible;
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const visibleFunWorks = getVisibleFunWorks();

  return (
    <Box maxW="6xl" mx="auto" py={16} px={4}>
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        fontWeight="extrabold"
        color="brand.light"
        mb={8}
      >
        Fun Stuff
      </Heading>
      <Flex align="center" justify="center" gap={4} position="relative">
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon boxSize={6} />}
          onClick={handlePrev}
          variant="ghost"
          colorScheme="teal"
          size="lg"
          isRound
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          position="absolute"
          left={-4}
          zIndex={2}
          top="50%"
          transform="translateY(-50%)"
        />
        <Flex gap={6} justify="center" flex={1} px={8}>
          {visibleFunWorks}
        </Flex>
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon boxSize={6} />}
          onClick={handleNext}
          variant="ghost"
          colorScheme="teal"
          size="lg"
          isRound
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          position="absolute"
          right={-4}
          zIndex={2}
          top="50%"
          transform="translateY(-50%)"
        />
      </Flex>
    </Box>
  );
}
