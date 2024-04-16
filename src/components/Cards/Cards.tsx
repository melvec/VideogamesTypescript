import { SimpleGrid, Text } from '@chakra-ui/react';

import { Center, Spinner } from "@chakra-ui/react";

import useGames from '../../hooks/useGames';
import { GameCard } from '../Card/GameCard';


export const Cards = () => {
const {games, error, isLoading} = useGames();


console.log(games);
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
{games.map((game)=> 
<GameCard key={game.id } game={game} />

)}
</SimpleGrid>
</>

)


}
