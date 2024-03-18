import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import sizes from "./sizes";
import Heading from "./components/heading";

const overrides = { sizes, colors, components: { Heading } };

export default extendTheme(overrides);
