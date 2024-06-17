import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/resizeImage";

interface GenresProps {
  onSelectGenre: (genreName: Genre) => void;
  selectedGenre: Genre | null;
}

export const Genres: React.FC<GenresProps> = ({ onSelectGenre }) => {
  const { data } = useGenres();

  return (
    <>
      <List>
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
                onClick={() => onSelectGenre(genre)}
                whiteSpace="wrap"
                textAlign="left"
                overflow="hidden"
                maxWidth="200px"
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
