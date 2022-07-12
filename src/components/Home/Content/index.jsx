import React from 'react'
import { Box } from '@chakra-ui/react'
import Carousel from './Caroussel'

const Content = () => {
  return (
    <>
        <Box
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