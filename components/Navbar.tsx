import {
  Box,
  Flex,
  HStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProgressiveImage from "./elements/ProgressiveImage";
import { NewTabIcon } from "../utils/icons";
import { CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const [navBarCollapse, setNavBarCollapse] = useState(false);
  const router = useRouter();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
    { label: "Recommendations", href: "/recommendations" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "https://blog.dejibimbola.com", external: true },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(href);
  };

  return (
    <Box
      as="header"
      w="full"
      bg="whiteAlpha.900"
      boxShadow="sm"
      zIndex={10}
      position="fixed"
      top={0}
      left={0}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="6xl"
        mx="auto"
        px={6}
        h={20}
      >
        <Link href="/">
          <Box w="40" py={2} cursor="pointer">
            <ProgressiveImage
              originalImageSrc="assets/dejibimbola_logo.png"
              className="chakra-image"
              alt="dejibimbola-logo"
            />
          </Box>
        </Link>

        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <ChakraLink
                as={Link}
                key={link.label}
                href={link.href}
                isExternal={link.external}
                fontWeight="bold"
                fontSize="md"
                px={3}
                py={2}
                borderRadius="md"
                bg={active ? "blackAlpha.200" : "transparent"}
                color={"brand.dark"}
                _hover={{
                  color: "brand.dark",
                  textDecoration: "none",
                  bg: "rgba(0, 0, 0, 0.05)",
                }}
                display="flex"
                alignItems="center"
                transition="all 0.2s"
                position="relative"
              >
                {link.label}
                {link.external && <NewTabIcon ml={1} />}
              </ChakraLink>
            );
          })}
        </HStack>

        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Open menu"
            icon={
              <motion.svg
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                  fill="#23282b"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                  fill="#23282b"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                  fill="#23282b"
                />
              </motion.svg>
            }
            variant="ghost"
            colorScheme="gray"
            onClick={() => setNavBarCollapse(true)}
            size="lg"
          />
        </Box>
      </Flex>

      <Drawer
        isOpen={navBarCollapse}
        placement="right"
        onClose={() => setNavBarCollapse(false)}
        size="xs"
      >
        <DrawerOverlay bg="rgba(0, 0, 0, 0.5)" />
        <DrawerContent bg="brand.dark">
          <DrawerBody>
            <IconButton
              aria-label="Close menu"
              icon={<CloseIcon />}
              variant="ghost"
              color="brand.light"
              onClick={() => setNavBarCollapse(false)}
              position="absolute"
              top={4}
              right={4}
            />
            <VStack spacing={6} mt={12} align="stretch">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <ChakraLink
                    as={Link}
                    key={link.label}
                    href={link.href}
                    isExternal={link.external}
                    fontWeight="bold"
                    fontSize="lg"
                    px={3}
                    py={2}
                    borderRadius="md"
                    bg={active ? "brand.primary" : "transparent"}
                    color={active ? "white" : "brand.light"}
                    _hover={{
                      color: active ? "white" : "brand.primary",
                      textDecoration: "none",
                      bg: active ? "brand.primary" : "whiteAlpha.100",
                    }}
                    display="flex"
                    alignItems="center"
                    transition="all 0.2s"
                    onClick={() => setNavBarCollapse(false)}
                  >
                    {link.label}
                    {link.external && <NewTabIcon ml={1} />}
                  </ChakraLink>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
