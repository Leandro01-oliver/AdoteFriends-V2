import React,{useContext} from 'react';
import {Flex,useDisclosure,Box} from '@chakra-ui/react';
import { GlobalProvider } from '../../../../context/globalContext';
import {AiOutlineMenu} from 'react-icons/ai'
import DrawerSideBarDashboard from './Drawer';
import Logo from '../../Home/SideBar/Logo';
import NavLink from './NavLink';
import User from './User';

const SideBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useContext(GlobalProvider);

  return (
    <>
 <Flex
     w={'70px'}
     h={'100vh'}
     bg={colorMode === 'light' ? '#ccc!important' : 'rgba(0,0,0,.5)'}
     py={'1rem'}
     direction={'column'}
    >
         <Flex 
         display={'flex'}
         w={'30px'}
         h={'30px'}
         color={'#fff'}
         onClick={onOpen}
         justify={'center'}
         align={'center'}
         borderRadius={'50px'}
         mx={'auto'}
         cursor={'pointer'}
         border={'2px solid #fff'}
         transition={'.5s ease-in-out'}
         _hover={{
            boxShadow:'0 0 20px 0 rgba(250,0,0,.5)',
            border:'2px solid rgba(250,0,0,.5)',
            color:'rgba(250,0,0,.5)'
         }}
         >
           <AiOutlineMenu/>
         </Flex>
         <Box
         my={'1rem'}
         >
            <Logo onOpen={onOpen}/>
            <NavLink onOpen={onOpen}/>
         </Box>
         <User onOpen={onOpen}/>
        </Flex>

        <DrawerSideBarDashboard isOpen={isOpen}  onClose={onClose}/>
    </>
  )
}

export default SideBar