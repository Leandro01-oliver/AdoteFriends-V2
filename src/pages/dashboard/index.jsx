import React from 'react'
import { GlobalContext } from '../../../context/globalContext'
import DashBoardPage from '../../components/Dasboard'

const DashBoard = () => {
  return (
    <>
      <GlobalContext>
        <DashBoardPage/>
      </GlobalContext>
   </>
  )
}

export default DashBoard