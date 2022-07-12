import React,{useContext} from 'react'
import { Box } from '@chakra-ui/react'
import Carousel from './Caroussel'
import { GlobalProvider } from '../../../../context/globalContext';

const Content = () => {

  const { colorMode } = useContext(GlobalProvider);

  return (
    <>
        <Box
        bg={colorMode === 'light' ? 'Dark' : 'Light'}
         w={'calc(100% - 70px)'}
         minH={'100vh'}
         p={'1rem'}
        >
            <Carousel/>
        </Box>
    </>
  )
}

export default Content