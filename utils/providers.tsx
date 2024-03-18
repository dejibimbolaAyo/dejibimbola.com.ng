"use client";

import type { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import CustomTheme from "../theme";

export function Providers({ children }: { readonly children: ReactNode }) {
  return <ChakraProvider theme={CustomTheme}>{children}</ChakraProvider>;
}
