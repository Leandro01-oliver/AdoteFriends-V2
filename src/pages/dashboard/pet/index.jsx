import { Flex } from '@chakra-ui/react'
import React from 'react'
import PetPage from '../../../components/Dasboard/Pet'
import SideBar from '../../../components/Dasboard/SideBar'

const Pet = () => {
  return (
    <>
    <Flex>
        <SideBar/>
        <PetPage/>
    </Flex>
    </>
  )
}

export default Pet