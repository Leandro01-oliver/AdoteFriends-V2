import React,{useContext} from 'react'
import { Flex } from '@chakra-ui/react'
import {MdDashboard} from 'react-icons/md'
import { GlobalProvider } from '../../../../../../../context/globalContext';

const AcessoDashBoard = (props) => {

  const { colorMode } = useContext(GlobalProvider);

  return (
    <>
    <a 
    href={'/dashboard'}
    >
       <Flex
      display={props.profile ? 'flex' : 'none'}
      w={'35px'}
      h={'35px'}
      transition={'.5s ease-in-out'}
      justify={'center'}
      cursor={'pointer'}
      borderRadius={'40px'}
      align={'center'}
      mr={'1rem'}
      border={colorMode === 'light' ? '2px solid rgba(250,0,0,.75)':'2px solid rgba(0,0,0,.75)'}
      color={colorMode === 'light'? 'rgba(250,0,0,.75)':'#000'}
      bg={colorMode === 'light' ? '#fff' : 'transparent'}
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
      <MdDashboard/>
     </Flex>
    </a>
    </>
  )
}

export default AcessoDashBoard