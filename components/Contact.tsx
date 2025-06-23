import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Link as ChakraLink,
  Icon,
  useColorModeValue,
  Container,
  SimpleGrid,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "dejibimbola@gmail.com",
      href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "dejibimbola@gmail.com"}`,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+234 706 524 9677",
      href: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+2347065249677"}`,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? "+234 706 524 9677",
      href: `https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_WHATSAPP?.replace(/\D/g, "") ?? "2347065249677"}`,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/dejibimbola",
      color: "blue.500",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/dejibimbolaAyo",
      color: "gray.700",
    },
  ];

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Initialize EmailJS with environment variable
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      toast({
        title: "Configuration Error",
        description:
          "Email service not configured. Please contact me directly.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setIsLoading(false);
      return;
    }

    emailjs.init({
      publicKey,
      limitRate: {
        id: publicKey,
        throttle: 1000,
      },
    });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      };

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration incomplete");
      }

      await emailjs.send(serviceId, templateId, templateParams);

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box py={16} bg={bgColor}>
      <Container maxW="6xl" mx="auto" px={4}>
        <VStack spacing={6} mb={12} pt={20}>
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            fontWeight="extrabold"
            color="brand.dark"
            letterSpacing="tight"
          >
            Let&apos;s Connect
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            color="gray.600"
            fontWeight="medium"
            maxW="2xl"
          >
            Ready to start a project or just want to chat? I&apos;d love to hear
            from you.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          {/* Contact Information */}
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading size="lg" color="brand.dark" mb={6}>
                Get in Touch
              </Heading>
              <Text fontSize="md" color="gray.600" lineHeight="tall" mb={8}>
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a conversation about
                technology and innovation.
              </Text>
            </Box>

            <VStack spacing={6} align="stretch">
              {contactInfo.map((info, index) => (
                <HStack
                  key={index}
                  spacing={4}
                  p={4}
                  bg={cardBg}
                  borderRadius="lg"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="gray.200"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                    borderColor: "brand.primary",
                  }}
                  transition="all 0.3s"
                >
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg={
                      info.label === "WhatsApp" ? "green.400" : "brand.primary"
                    }
                    color="white"
                  >
                    <Icon as={info.icon} boxSize={5} />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                      {info.label}
                    </Text>
                    <ChakraLink
                      href={info.href}
                      color="brand.dark"
                      fontWeight="medium"
                      _hover={{ color: "brand.primary" }}
                      transition="color 0.2s"
                      isExternal={info.label === "WhatsApp"}
                    >
                      {info.value}
                    </ChakraLink>
                  </VStack>
                </HStack>
              ))}
            </VStack>

            <Box>
              <Text
                fontSize="md"
                fontWeight="semibold"
                color="brand.dark"
                mb={4}
              >
                Follow Me
              </Text>
              <HStack spacing={4}>
                {socialLinks.map((social, index) => (
                  <ChakraLink
                    key={index}
                    href={social.href}
                    isExternal
                    p={3}
                    borderRadius="lg"
                    bg={cardBg}
                    color={social.color}
                    boxShadow="sm"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "md",
                      color: "brand.primary",
                      borderColor: "brand.primary",
                    }}
                    transition="all 0.3s"
                  >
                    <Icon as={social.icon} boxSize={5} />
                  </ChakraLink>
                ))}
              </HStack>
            </Box>
          </VStack>

          {/* Contact Form */}
          <Box
            bg={cardBg}
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.200"
          >
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading size="md" color="brand.dark" mb={2}>
                  Send a Message
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  I&apos;ll get back to you within 24 hours
                </Text>
              </Box>

              <Box as="form" onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!errors.name}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="medium"
                      color="brand.dark"
                    >
                      Name
                    </FormLabel>
                    <Input
                      placeholder="Your Name"
                      size="lg"
                      border="2px solid"
                      borderColor={errors.name ? "red.300" : "gray.200"}
                      borderRadius="lg"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      _focus={{
                        borderColor: "brand.primary",
                        boxShadow:
                          "0 0 0 1px var(--chakra-colors-brand-primary)",
                      }}
                      _placeholder={{ color: "gray.400" }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="medium"
                      color="brand.dark"
                    >
                      Email
                    </FormLabel>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      size="lg"
                      border="2px solid"
                      borderColor={errors.email ? "red.300" : "gray.200"}
                      borderRadius="lg"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      _focus={{
                        borderColor: "brand.primary",
                        boxShadow:
                          "0 0 0 1px var(--chakra-colors-brand-primary)",
                      }}
                      _placeholder={{ color: "gray.400" }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.subject}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="medium"
                      color="brand.dark"
                    >
                      Subject
                    </FormLabel>
                    <Input
                      placeholder="Project inquiry, collaboration, etc."
                      size="lg"
                      border="2px solid"
                      borderColor={errors.subject ? "red.300" : "gray.200"}
                      borderRadius="lg"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      _focus={{
                        borderColor: "brand.primary",
                        boxShadow:
                          "0 0 0 1px var(--chakra-colors-brand-primary)",
                      }}
                      _placeholder={{ color: "gray.400" }}
                    />
                    <FormErrorMessage>{errors.subject}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.message}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="medium"
                      color="brand.dark"
                    >
                      Message
                    </FormLabel>
                    <Textarea
                      placeholder="Tell me about your project or how I can help..."
                      size="lg"
                      rows={6}
                      border="2px solid"
                      borderColor={errors.message ? "red.300" : "gray.200"}
                      borderRadius="lg"
                      resize="vertical"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      _focus={{
                        borderColor: "brand.primary",
                        boxShadow:
                          "0 0 0 1px var(--chakra-colors-brand-primary)",
                      }}
                      _placeholder={{ color: "gray.400" }}
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="yellow"
                    size="lg"
                    w="full"
                    fontWeight="bold"
                    isLoading={isLoading}
                    loadingText="Sending..."
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    transition="all 0.3s"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
