import React from 'react'
import { Flex } from '@chakra-ui/react'
import { GiSolarTime } from 'react-icons/gi'

const DarkMode = () => {
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
         _hover={{
             backgroundColor:'rgba(250,0,0,.75)',
             color:'#fff'
         }}z
     >
      <GiSolarTime/>
     </Flex>
    </>
  )
}

export default DarkMode