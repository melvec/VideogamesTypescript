import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/resizeImage";
import { useState } from "react";

interface GenresProps {
  onSelectGenre: (genreName: string) => void;
  selectedGenre: string;
}

export const Genres: React.FC<GenresProps> = ({
  selectedGenre,
  onSelectGenre,
}) => {
  const { data } = useGenres();

  return (
    <>
      <List>
        <p>{data.length}</p>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingBottom={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={4}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Button
                variant="link"
                fontWeight={selectedGenre === genre.name ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.name)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
