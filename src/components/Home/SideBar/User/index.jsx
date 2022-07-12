import React from 'react'
import { Flex } from '@chakra-ui/react'
import Acoes from './Acoes'
import PhotoUser from './photoUser'

const User = (props) => {
  return (
    <>
       <Flex
        bg={'#fff'}
        p={'1rem'}
        borderRadius={props.onOpen ? '0':'10px'}
        mt={'auto'}
        w={'100%'}
        justify={'space-between'}
       >
           <PhotoUser onOpen={props.onOpen}/>
          <Acoes onOpen={props.onOpen}/>
       </Flex>
    </>
  )
}

export default User