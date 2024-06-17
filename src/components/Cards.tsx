import { SimpleGrid, Text } from "@chakra-ui/react";
import { Center, Spinner } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";

interface CardsProps {
  gameQuery: GameQuery;
}

export const Cards: React.FC<CardsProps> = ({ gameQuery }: CardsProps) => {
  const { data, error, isLoading } = useGames(gameQuery);

  return (
    <>
      {error && (
        <Center>
          <Spinner size="xl" color="gray.500" />
          <Text color={"gray.500"} ml={4} fontWeight="bold" fontSize="xl">
            {error}
          </Text>
        </Center>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        justifyItems={{ md: "center" }}
      >
        {isLoading && (
          <Center>
            <Spinner size="xl" color="gray.500" />
            <Text color={"gray.500"} ml={4} fontWeight="bold" fontSize="xl">
              Loading...
            </Text>
          </Center>
        )}
        {isLoading ||
          data.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};
