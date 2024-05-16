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
import React, { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { Platform, usePlatforms } from "../hooks/usePlatforms";

interface PlatformsProps {
  onSelectPlatform: (platform: string) => void;
  selectedPlatform: string;
}

export const Platforms: React.FC<PlatformsProps> = ({
  selectedPlatform,
  onSelectPlatform,
}: PlatformsProps) => {
  const { data, error } = usePlatforms();
  const [menuButtonLabel, setMenuButtonLabel] = useState("Select Platform");

  const handlePlatformSelect = (platform: string) => {
    onSelectPlatform(platform);
    setMenuButtonLabel(platform);
  };

  return (
    <Box paddingBottom={6}>
      <Menu>
        <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
          {menuButtonLabel}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => {
                onSelectPlatform(platform.name);
                handlePlatformSelect(platform.name);
              }}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
