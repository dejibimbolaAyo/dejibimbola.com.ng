import {
  Box,
  Heading,
  Text,
  Flex,
  Link as ChakraLink,
  IconButton,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ProgressiveImage from "./elements/ProgressiveImage";
import Link from "next/link";
import { useState } from "react";

const works = [
  {
    img: "./assets/nexstar.png",
    alt: "nexstar",
    title: "Nexstar AI",
    desc: "React, NodeJs",
  },
  {
    img: "./assets/jamii_web_mobile.png",
    alt: "jamii",
    title: "Jamii Mobile",
    desc: "React Native, NodeJs",
  },
  {
    img: "./assets/search_service.png",
    alt: "sonic-search",
    title: "Search server",
    desc: "MongoDB, AWS Lambda, NodeJs",
  },
  {
    img: "./assets/ussd.png",
    alt: "ussd",
    title: "Retails USSD",
    desc: "AWS Lambda, NodeJs",
  },
];

export default function Works() {
  const [current, setCurrent] = useState(0);
  const cardsPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const total = works.length + 1; // +1 for the See More card

  const getVisibleWorks = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const idx = (current + i) % total;
      if (idx < works.length) {
        visible.push(
          <Box
            key={works[idx].title}
            bgGradient="linear(to-br, brand.dark, #23282b 80%, #2d2d2d)"
            borderRadius="2xl"
            minW="300px"
            maxW="340px"
            boxShadow="0 8px 32px 0 rgba(0,0,0,0.18)"
            border="1.5px solid"
            borderColor="whiteAlpha.100"
            transition="all 0.3s"
            _hover={{
              boxShadow: "0 12px 32px 0 rgba(0,0,0,0.28)",
              transform: "scale(1.04) translateY(-8px)",
              borderColor: "brand.primary",
            }}
            mx={2}
            flexShrink={0}
            overflow="hidden"
            p={0}
          >
            <Box>
              <ProgressiveImage
                originalImageSrc={works[idx].img}
                alt={works[idx].alt}
                className="chakra-image"
              />
            </Box>
            <Divider borderColor="whiteAlpha.200" my={0} />
            <Box p={6}>
              <Text
                fontWeight="extrabold"
                fontSize="xl"
                color="brand.primary"
                mb={2}
                letterSpacing="tight"
              >
                {works[idx].title}
              </Text>
              <Text fontSize="md" color="whiteAlpha.900" fontWeight="medium">
                {works[idx].desc}
              </Text>
            </Box>
          </Box>
        );
      } else {
        // See More card
        visible.push(
          <ChakraLink
            as={Link}
            href="/portfolio"
            key="see-more"
            _hover={{ textDecoration: "none" }}
            minW="300px"
            maxW="340px"
            mx={2}
            flexShrink={0}
          >
            <Box
              bgGradient="linear(to-br, brand.primary 25%, #faf8f3)"
              borderRadius="2xl"
              boxShadow="0 8px 32px 0 rgba(0,0,0,0.18)"
              border="1.5px solid"
              borderColor="brand.primary"
              h="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              minH="320px"
              transition="all 0.3s"
              _hover={{
                boxShadow: "0 12px 32px 0 rgba(0,0,0,0.28)",
                transform: "scale(1.04) translateY(-8px)",
                bgGradient: "linear(to-br, brand.primary, brand.dark)",
                borderColor: "brand.dark",
              }}
              position="relative"
            >
              <Text
                fontWeight="extrabold"
                fontSize="2xl"
                color="brand.dark"
                mb={4}
                letterSpacing="tight"
              >
                See more
              </Text>
              <Box
                as="span"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="transform 0.3s"
                _groupHover={{ transform: "translateX(8px) scale(1.2)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="24"
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
          </ChakraLink>
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

  const visibleWorks = getVisibleWorks();

  return (
    <Box bg="brand.primary" py={16}>
      <Box maxW="6xl" mx="auto" px={4}>
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          color="brand.dark"
          fontWeight="extrabold"
          mb={8}
        >
          High profile works
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
            {visibleWorks}
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
    </Box>
  );
}
