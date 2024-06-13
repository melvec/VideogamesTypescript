import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.png";
import { SearchInput } from "./SearchInput";
import { ToogleColorMode } from "./ToogleColorMode";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack w="100%" padding="10px">
      <Image src={logo} w="100px" h="40px" objectFit="cover" />
      <SearchInput onSearch={onSearch} />
      <ToogleColorMode />
    </HStack>
  );
};
