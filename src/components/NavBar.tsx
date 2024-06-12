import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.png";
import { SearchInput } from "./SearchInput";
import { ToogleColorMode } from "./ToogleColorMode";

export const NavBar = () => {
  return (
    <HStack w="100%" padding="10px">
      <Image src={logo} w="100px" h="40px" objectFit="cover" />
      <SearchInput />
      <ToogleColorMode />
    </HStack>
  );
};
