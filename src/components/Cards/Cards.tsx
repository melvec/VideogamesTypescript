import { SimpleGrid, Text } from '@chakra-ui/react';
import { Center, Spinner } from "@chakra-ui/react";

import useGames , {Game}from '../../hooks/useGames';
import { GameCard } from '../Card/GameCard';




interface CardsProps {
  selectedGenre: string;
  selectedPlatform: string;
}

export const Cards: React.FC<CardsProps> = ({ selectedGenre, selectedPlatform }) => {
const {data, error, isLoading} = useGames();

const filteredGames: Game[] = selectedGenre
? data.filter(game => game.genres.some(genreObj => genreObj.name === selectedGenre))
: data;


const filteredGamesByPlatform: Game[] = selectedPlatform
? filteredGames.filter(game => game.parent_platforms.some(platformObj => platformObj.platform.name === selectedPlatform))
: filteredGames;

  return (
<>
{error && (
  <Center height="100vh">
      <Spinner size="xl" color="gray.500" />
      <Text  color={'gray.500'} ml={4} fontWeight="bold" fontSize="xl">{error}</Text>
    </Center>
)}
<SimpleGrid columns ={{sm: 1, md: 2, lg: 3, xl: 4}} spacing ={3} justifyItems={{md:'center'}}>

{isLoading && (
  <Center height="100vh">
      <Spinner size="xl" color="gray.500" />
      <Text  color={'gray.500'} ml={4} fontWeight="bold" fontSize="xl">Loading...</Text>
    </Center>
)}
{filteredGamesByPlatform.map((game)=> 
<GameCard key={game.id } game={game} />

)}
</SimpleGrid>
</>

)


}
