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

export const SortSelector = ({ onSelectSortBy }: SortSelectorsProps) => {
  const [menuButtonLabel, setMenuButtonLabel] = useState("Order by:");
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Box paddingBottom={6}>
      <Menu>
        <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
          {menuButtonLabel}
        </MenuButton>
        <MenuList>
          {sortOrders.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              onClick={() => onSelectSortBy(item.value)}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
