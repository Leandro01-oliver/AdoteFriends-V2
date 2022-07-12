import { Flex } from '@chakra-ui/react'
import React from 'react'
import SideBar from './SideBar'
import Content from './Content'

const DashBoardPage = () => {
  return (
    <>
       <Flex>
            <SideBar/>
            <Content/>
       </Flex>
    </>
  )
}

export default DashBoardPage