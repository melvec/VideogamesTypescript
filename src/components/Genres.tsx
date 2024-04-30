import { Box, Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/resizeImage";
import { useState } from 'react';

interface GenresProps {
  onSelectGenre: (genreName: string) => void;
 
}

export const Genres: React.FC<GenresProps> = ({ onSelectGenre }) => {
  const { data } = useGenres();


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
              <Button onClick={() => onSelectGenre(genre.name)}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
