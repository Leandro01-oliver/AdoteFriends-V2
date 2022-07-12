import React from 'react'
import { Flex } from '@chakra-ui/react'
import PageInicial from './PageInicial'
import Profile from './Perfil'


const Acoes = (props) => {

  return (
    <>
    <Flex
    display={props.onOpen ? 'none' : 'flex'}
    >
        <Profile />
        <PageInicial />
    </Flex>
    </>
  )
}

export default Acoes