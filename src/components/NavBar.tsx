import { HStack, Image } from '@chakra-ui/react'

import logo from '../assets/logo.png'
import { ToogleColorMode } from './ToogleColorMode'

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" w="100%">
        <Image  src={logo} w='100px' h='40px' objectFit='cover'/>
        <ToogleColorMode />
    </HStack>
  )
}
