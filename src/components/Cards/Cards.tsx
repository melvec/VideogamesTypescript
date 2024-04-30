import { SimpleGrid, Text } from '@chakra-ui/react';
import { Center, Spinner } from "@chakra-ui/react";

import useGames , {Game}from '../../hooks/useGames';
import {Genre} from '../../hooks/useGenres';
import { GameCard } from '../Card/GameCard';




interface CardsProps {
  selectedGenre: string;
}

export const Cards: React.FC<CardsProps> = ({ selectedGenre }) => {
const {data, error, isLoading} = useGames();

const genre = "Shooter"

const filteredGames: Game[] = selectedGenre
? data.filter(game => game.genres.some(genreObj => genreObj.name === selectedGenre))
: data;

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
{filteredGames.map((game)=> 
<GameCard key={game.id } game={game} />

)}
</SimpleGrid>
</>

)


}
