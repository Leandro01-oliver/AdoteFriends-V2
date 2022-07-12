import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    ModalFooter
  } from '@chakra-ui/react';
import NavLink from '../NavLink';
import Logo from '../Logo';
import User from '../User';

const DrawerSideBar = (props) => {

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
                bg={'#ccc!important'}
                pt={'3rem'}
                pb={'1rem'}
            >
            <DrawerCloseButton />
            <DrawerBody>
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

export default DrawerSideBar