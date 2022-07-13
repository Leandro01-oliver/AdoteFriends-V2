import React,{useContext} from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image';
import LogoImg from '../../../../../public/logo.png';
import Acessibilidade from './Acessibilidade';
import { GlobalProvider } from '../../../../../context/globalContext';

const Logo = (props) => {
    
  const { colorMode } = useContext(GlobalProvider);

  return (
    <>
       <Flex
       bg={colorMode === 'light' ? '#fff!important' : 'rgba(250,250,250,.85)'}
       borderRadius={props.onOpen ? '0':'10px'}
       justify={'space-between'}
       align={'center'}
       p={'1rem'}
       mt={'.25rem'}
       mb={'1.5rem'}
       >
          <Image
                src={LogoImg}
                width={props.onOpen ? '50px' : '70px'}
                height={props.onOpen ? '50px': '70px'}
                style={{
                    borderRadius: '50%',
                    cursor: 'pointer'
                }}
            />
       <Acessibilidade onOpen={props.onOpen}/>
       </Flex>
    </>
  )
}

export default Logo