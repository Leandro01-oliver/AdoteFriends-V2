import React,{useContext} from 'react'
import { Flex } from '@chakra-ui/react'
import Acoes from './Acoes'
import PhotoUser from './photoUser'
import { GlobalProvider } from '../../../../../context/globalContext'

const User = (props) => {

  const { colorMode } = useContext(GlobalProvider);

  return (
    <>
       <Flex
        bg={colorMode === 'light' ? '#fff!important' : 'rgba(250,250,250,.85)'}
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