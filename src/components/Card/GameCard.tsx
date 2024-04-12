
import { Box, Card, Image, Text } from '@chakra-ui/react'

import { Game } from '../../hooks/useGames'

interface Props {
  game: Game;
}

export const GameCard = ({game}: Props) => {
  return (
    <>
      <Box 
      justifyContent="center"
      bg="gray.700"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      flex="1"
      flexGrow={{ base: 1, md: 0 }}
      flexBasis={{ base: '100%', md: '50%' }}
    >
      <Image src={game.background_image} alt={game.name} />

      <Box p="6">
        <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="sm">
          {game.id}
        </Text>

        <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {game.name}
        </Text>
      </Box>
    </Box>
   
    </>
  )
}
