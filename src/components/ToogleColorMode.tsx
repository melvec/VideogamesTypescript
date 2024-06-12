import { useColorMode, Switch, HStack, Spacer, Text } from "@chakra-ui/react";

export const ToogleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <Switch
          whiteSpace="nowrap"
          isChecked={colorMode === "light"}
          onChange={toggleColorMode}
        >
          Light mode
        </Switch>
        <Spacer />
      </HStack>
    </div>
  );
};
