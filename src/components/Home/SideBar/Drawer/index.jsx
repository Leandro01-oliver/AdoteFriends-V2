import React,{useContext} from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    ModalFooter
  } from '@chakra-ui/react';
import NavLink from '../NavLink';
import Logo from '../Logo';
import User from '../User';
import { GlobalProvider } from '../../../../../context/globalContext';

const DrawerSideBarHomePage = (props) => {

  const { colorMode } = useContext(GlobalProvider);
  
  return (
    <>

    <Drawer 
        isOpen={props.isOpen} 
        onClose={props.onClose}
        placement='left'
        size={'sm'}
        >
            <DrawerOverlay />
            <DrawerContent
                bg={colorMode === 'light' ? '#ccc!important' : 'rgba(0,0,0,.85)'}
                pt={'3rem'}
                pb={'1rem'}
            >
            <DrawerCloseButton />
            <DrawerBody
            >
                 <Logo/>
                 <NavLink/>
            </DrawerBody>
            <ModalFooter>
            <User/>
            </ModalFooter>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default DrawerSideBarHomePage