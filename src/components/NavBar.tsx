import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png'

export const NavBar = () => {
  return (
    <HStack>
        <Image  src={logo} boxSize='40px' objectFit='cover'/>
        <Text>Navbar</Text>
    </HStack>
  )
}
