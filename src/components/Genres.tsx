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

interface GenresProps {
  onSelectGenre: (genreName: Genre) => void;
  selectedGenre: Genre | null;
}

export const Genres: React.FC<GenresProps> = ({
  selectedGenre,
  onSelectGenre,
}) => {
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
                // fontWeight= {selectedGenre.name === genre.name ? "bold" : "normal" }
                onClick={() => onSelectGenre(genre)}
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
