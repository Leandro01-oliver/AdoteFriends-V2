import React, { useEffect,useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../../../../Config/connectingFirebase'
import AcessoDashBoard from './AcessoDashBoard'
import Login from './Login'

const Acoes = (props) => {

    const [profile,setProfile] = useState([]);

    useEffect(()=>{
       onAuthStateChanged(auth,(u)=>{
                setProfile(u);
       })
    },[]);

    console.log(profile);
  return (
    <>
    <Flex
     display={props.onOpen ? 'none' : 'flex'}
    >
        <Login profile={profile} />
        <AcessoDashBoard profile={profile}/>
    </Flex>
    </>
  )
}

export default Acoes