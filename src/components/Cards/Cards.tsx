import { Card, SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../../hooks/useGames';
import { GameCard } from '../Card/GameCard';


export const Cards = () => {

   

const {games, error} = useGames();
console.log(games);
  return (
<>
{error && <Text>{error}</Text>}
<SimpleGrid columns ={{sm: 1, md: 2, lg: 3, xl: 4}} spacing ={3} justifyItems={{md:'center'}}>

{games.map((game)=> 
<GameCard key={game.id } game={game} />

)}
</SimpleGrid>
</>

)


}
