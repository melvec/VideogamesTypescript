import { Card, SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../../hooks/useGames';
import { GameCard } from '../Card/GameCard';


export const Cards = () => {

   

const {games, error} = useGames();

  return (
<>
{error && <Text>{error}</Text>}
<SimpleGrid columns ={{sm: 1, md: 2, lg: 3, xl: 4}} spacing ={3}>

{games.map((game)=> 
<GameCard key={game.id } game={game} />

)}
</SimpleGrid>
</>

)


}
