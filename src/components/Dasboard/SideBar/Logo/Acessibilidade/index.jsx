import React from 'react'
import { Flex } from '@chakra-ui/react'
import DarkMode from './DarkMode'

const Acessibilidade = (props) => {
  return (
    <>
     <Flex
        display={props.onOpen ? 'none' : 'flex'}
        align={'center'}
     >
         <DarkMode/>
     </Flex>
    </>
  )
}

export default Acessibilidade