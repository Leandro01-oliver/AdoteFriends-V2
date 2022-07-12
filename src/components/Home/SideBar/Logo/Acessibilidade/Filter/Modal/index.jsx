import React,{useContext} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { GlobalProvider } from '../../../../../../../../context/globalContext';

const ModalFilter = (props) => {

  const { colorMode } = useContext(GlobalProvider);

  return (
    <>
  <Modal isOpen={props.isOpen} onClose={props.onClose}
   bg={colorMode === 'light' ? 'Dark' : 'Light'}
  >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}

export default ModalFilter