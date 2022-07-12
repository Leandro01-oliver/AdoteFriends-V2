import { Flex } from '@chakra-ui/react'
import React from 'react'
import AdiconarInformacaoPage from '../../../components/Dasboard/AdicionarInformacao'
import SideBar from '../../../components/Dasboard/SideBar'

const IncluirInformacao = () => {
  return (
    <>
        <Flex>
           <SideBar/>
           <AdiconarInformacaoPage/>
        </Flex>
    </>
  )
}

export default IncluirInformacao