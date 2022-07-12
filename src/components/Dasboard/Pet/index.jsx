import React,{useContext} from 'react'
import { Box, Flex,InputGroup,Input,InputRightElement } from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import { MdLibraryAdd } from 'react-icons/md'
import { GlobalProvider } from '../../../../context/globalContext'

const PetPage = () => {

    const { colorMode } = useContext(GlobalProvider);

  return (
    <>
         <Box
        w={'calc(100% - 70px)'}
        minH={'100vh'}
        p={'1rem'}
        >
            <Flex
                w={'100%'}
                p={'1rem'}
                borderRadius={'10px'}
                justify={'space-between'}
                boxShadow={'0px 0px 10px 0 rgba(0,0,0,.5)'}
            >
                <Box>
                <InputGroup>
                    <Input placeholder='Enter amount' />
                    <InputRightElement children={'$'} />
                </InputGroup>
                </Box>
               
               <Flex
                    align={'center'}
                    bg={colorMode === 'light' ? '#fff!important' : 'rgba(250,250,250,.85)'}
                    p={'.5rem'}
                    borderRadius={'40px'}
               >
                   <Flex
                        w={'30px'}
                        h={'30px'}
                        borderRadius={'50%'}
                        justify={'center'}
                        align={'center'}
                        cursor={'pointer'}
                        transition={'.5s ease-in-out'}
                        border={colorMode === 'light' ? '2px solid rgba(250,0,0,.75)':'2px solid rgba(0,0,0,.75)'}
                        color={colorMode === 'light'? 'rgba(250,0,0,.75)':'#000'}
                        bg={colorMode === 'light' ? '#fff' : 'transparent'}
                        _hover={colorMode === 'light' ? {
                          backgroundColor:'rgba(250,0,0,.75)',
                          color:'#fff',
                          border:'2px solid rgba(250,0,0,.75)'
                        }:{
                          backgroundColor:'transparent',
                          color:'rgba(0,0,0,.5)',
                          border:'2px solid transparent',
                          boxShadow:'0 0 10px 0 rgba(0,0,0,.5)'
                        }}
                        >
                        <MdLibraryAdd/>
                        </Flex>
                    <Flex
                        w={'30px'}
                        h={'30px'}
                        borderRadius={'50%'}
                        justify={'center'}
                        align={'center'}
                        cursor={'pointer'}
                        ml={'1rem'}
                        transition={'.5s ease-in-out'}
                        border={colorMode === 'light' ? '2px solid rgba(250,0,0,.75)':'2px solid rgba(0,0,0,.75)'}
                        color={colorMode === 'light'? 'rgba(250,0,0,.75)':'#000'}
                        bg={colorMode === 'light' ? '#fff' : 'transparent'}
                        _hover={colorMode === 'light' ? {
                          backgroundColor:'rgba(250,0,0,.75)',
                          color:'#fff',
                          border:'2px solid rgba(250,0,0,.75)'
                        }:{
                          backgroundColor:'transparent',
                          color:'rgba(0,0,0,.5)',
                          border:'2px solid transparent',
                          boxShadow:'0 0 10px 0 rgba(0,0,0,.5)'
                        }}
                    >
                       <FiEdit/>
                        </Flex>
               </Flex>
            </Flex>
        </Box>
    </>
  )
}

export default PetPage