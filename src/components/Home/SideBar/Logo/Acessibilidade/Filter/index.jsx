import React,{useContext} from 'react'
import { Flex,useDisclosure } from '@chakra-ui/react'
import ModalFilter from './Modal'
import {AiFillFilter} from 'react-icons/ai'
import { GlobalProvider } from '../../../../../../../context/globalContext'

const Filter = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { colorMode } = useContext(GlobalProvider);

  return (
    <>
     <Flex
      w={'35px'}
      h={'35px'}
      border={colorMode === 'light' ? '2px solid rgba(250,0,0,.75)':'2px solid rgba(0,0,0,.75)'}
      transition={'.5s ease-in-out'}
      color={colorMode === 'light'? 'rgba(250,0,0,.75)':'#000'}
      justify={'center'}
      cursor={'pointer'}
      bg={colorMode === 'light' ? '#fff' : 'transparent'}
      borderRadius={'40px'}
      align={'center'}
      mr={'1rem'}
      onClick={onOpen}
      _hover={colorMode === 'light' ? {
        backgroundColor:'rgba(250,0,0,.75)',
        color:'#fff',
        border:'2px solid rgba(250,0,0,.75)'
       }:{
        backgroundColor:'transparent',
        color:'rgba(0,0,0,.5)',
        border:'2px solid transparent',
        boxShadow:'0 0 10px 0 rgba(0,0,0,.5)'
       }}
     >
      <AiFillFilter/>
     </Flex>
     <ModalFilter isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default Filter