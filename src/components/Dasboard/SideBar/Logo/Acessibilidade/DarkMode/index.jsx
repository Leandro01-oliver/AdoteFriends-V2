import React,{useContext,useEffect,useState} from 'react'
import { Flex } from '@chakra-ui/react'
import { GiSolarTime } from 'react-icons/gi'
import { GlobalProvider } from '../../../../../../../context/globalContext';

const DarkMode = () => {

  const { colorMode, toggleColorMode } = useContext(GlobalProvider);

  return (
    <>
     <Flex
         w={'35px'}
         h={'35px'}
         border={colorMode === 'light' ? '2px solid rgba(250,0,0,.75)':'2px solid rgba(0,0,0,.75)'}
         transition={'.5s ease-in-out'}
         color={colorMode === 'light'? 'rgba(250,0,0,.75)':'#000'}
         onClick={toggleColorMode}
         bg={colorMode === 'light' ? '#fff' : 'transparent'}
         justify={'center'}
         cursor={'pointer'}
         borderRadius={'40px'}
         align={'center'}
         mr={'1rem'}
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
      <GiSolarTime/>
     </Flex>
    </>
  )
}

export default DarkMode