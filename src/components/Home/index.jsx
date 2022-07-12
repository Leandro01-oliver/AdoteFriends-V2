import React from 'react'
import { Flex } from '@chakra-ui/react'
import SideBar from './SideBar'
import Content from './Content'

const HomePage = () => {
  return (
    <>
        <Flex>
             <SideBar/>
             <Content/>
        </Flex>
    </>
  )
}

export default HomePage