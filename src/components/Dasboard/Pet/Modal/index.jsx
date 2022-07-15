import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    FormControl,
    Input,
    FormLabel
  } from '@chakra-ui/react'
import axios from 'axios'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../../../../Config/connectingFirebase';

const ModalPet = (props) => {

    const [file,setFile] = useState(null);
    const [namePet,setNamePet] = useState('');
    const [descricaoPet,setDescricaoPet] = useState('');
    const [getUrl,setGetUrl] = useState('');


    const handlerPet = () => {

        const storageRef = ref(storage, `images/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
             
                if(namePet == "" || descricaoPet == ""){
                    alert("Preencha todos os campos")
              }else{
                   axios.post('/api/pet/post',
                      {
                          ImgPet: downloadURL,
                          NamePet: namePet,
                          DescricaoPet: descricaoPet
                      }
                  )
              }
    })
}

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
          <FormControl
          >
            <Box
              mt={'3rem'}
            >
                <FormLabel 
                   htmlFor='img-pet'
                   border={'2px dashed rgba(0,0,0,.5)'}
                   p={'1rem'}
                   borderRadius={'10px'}
                >
                    Nome do Pet
                    </FormLabel>
                <Input id='img-pet' 
                type='file' 
                display={'none'}
                onChange={(e)=>setFile(e.target.files[0])}
                />
            </Box>
            <Box>
                <FormLabel htmlFor='nome-pet'>
                  Nome do Pet
                </FormLabel>
                <Input id='nome-pet' type='text' 
                onChange={(e)=>setNamePet(e.target.value)}
                />
            </Box>
            <Box>
                <FormLabel htmlFor='descricao-pet'>
                  Descrição do Pet
                </FormLabel>
                <Input id='descricao-pet' type='text' 
                onChange={(e)=>setDescricaoPet(e.target.value)}
                />
            </Box>
            <Button
            onClick={handlerPet}
            w={'100%'}
            mt={'1rem'}
            >
                Save
            </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalPet