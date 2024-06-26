import { Box, Image, Text } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/resizeImage";
import { PlatformIcons } from "./PlatformIcons";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Box
        justifyContent="center"
        bg="gray.700"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        flex="1"
        flexGrow={{ base: 1, md: 0 }}
        flexBasis={{ base: "100%", md: "50%" }}
        maxW={{ base: "100%", md: "260px" }} // Set max width for medium-sized screens
        margin="0 auto" // Center the image horizontally
      >
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          width="100%"
        />

        <Box padding={5}>
          <Text
            color="white"
            mt="1"
            fontWeight="semibold"
            as="h3"
            lineHeight="tight"
            isTruncated
          >
            {game.name}
          </Text>

          <PlatformIcons
            parent_platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </Box>
      </Box>
    </>
  );
};
