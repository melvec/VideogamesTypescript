import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box,
} from "@chakra-ui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";

interface SortSelectorsProps {
  onSelectSortBy: (option: string) => void;
}

export const SortSelector = () => {
  const [menuButtonLabel, setMenuButtonLabel] = useState("Order by:");

  return (
    <Box paddingBottom={6}>
      <Menu>
        <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
          {menuButtonLabel}
        </MenuButton>
        <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date</MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
