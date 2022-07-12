import React from 'react'
import { Flex } from '@chakra-ui/react'
import Filter from './Filter'
import DarkMode from './DarkMode'

const Acessibilidade = (props) => {
  return (
    <>
     <Flex
        display={props.onOpen ? 'none' : 'flex'}
       align={'center'}
     >
         <Filter onOpen={props.onOpen}/>
         <DarkMode/>
     </Flex>
    </>
  )
}

export default Acessibilidade