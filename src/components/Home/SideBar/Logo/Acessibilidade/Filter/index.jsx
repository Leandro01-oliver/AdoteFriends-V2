import React from 'react'
import { Flex,useDisclosure } from '@chakra-ui/react'
import ModalFilter from './Modal'
import {AiFillFilter} from 'react-icons/ai'

const Filter = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
     <Flex
      w={'35px'}
      h={'35px'}
      border={'2px solid rgba(250,0,0,.75)'}
      transition={'.5s ease-in-out'}
      color={'rgba(250,0,0,.75)'}
      justify={'center'}
      cursor={'pointer'}
      borderRadius={'40px'}
      align={'center'}
      mr={'1rem'}
      onClick={onOpen}
      _hover={{
          backgroundColor:'rgba(250,0,0,.75)',
          color:'#fff'
      }}
     >
      <AiFillFilter/>
     </Flex>
     <ModalFilter isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default Filter