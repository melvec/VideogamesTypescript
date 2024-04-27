import { Box, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/resizeImage";

export const Genres = () => {
  const { data } = useGenres();
  console.log(data);

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}  paddingBottom={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={4}
               
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
