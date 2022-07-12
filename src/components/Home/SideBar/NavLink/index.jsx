import React from 'react'
import {
    Flex,
    Text
  } from '@chakra-ui/react';
import {AiOutlineHome} from 'react-icons/ai';
import {FaUsers} from 'react-icons/fa'
import {MdOutlineHomeRepairService} from 'react-icons/md'

const NavLink = (props) => {

    
    const link = [
        {
          id:0,
          name:'Home',
          icon: <AiOutlineHome/>,
          href:'/'
        },
        {
         id:1,
         name:'Quem Somos',
         icon: <FaUsers/>,
         href:'/quemsomos/'
       },
       {
         id:2,
         name:'Serviço',
         icon: <MdOutlineHomeRepairService/>,
         href:'/servico/'
       },
    ]

  return (
    <>
 {
                link.map( (l) => {
                    return(
                        <>
                        <a href={l.href}>
                                <Flex
                                w={props.onOpen ? '55px' : '100%'}
                                align={'center'}
                                cursor={'pointer'}
                                p={"1rem"}
                                justify={props.onOpen ? 'center' : 'start'}
                                border={'2px solid #fff'}
                                borderRight={props.onOpen ? 'none' : '2px solid #fff'}
                                borderRadius = { props.onOpen ? '40px 0 0 40px': '10px'}
                                m = { props.onOpen ? '.8rem 0  0 auto':'1rem auto 0 auto'}
                                title={!props.onOpen ? "" : l.name}
                                transition={'.5s ease-in-out'}
                                _hover={{
                                    backgroundColor:'rgba(250,0,0,.75)',
                                    color:'#fff'
                                }}
                                >
                                <Flex
                                justify={'center'}
                                borderRadius={'50%'}
                                color={'#fff'}
                                align={'center'}
                                cursor={'pointer'}
                                _hover={{
                                    
                                }}
                                >
                                    {l.icon}
                                </Flex>
                                <Text 
                                    ml={'1rem'} 
                                    display={props.onOpen ? 'none' : 'flex'}
                                    fontWeight={'bold'}
                                    color={'#fff'}
                                    >
                                        {l.name}
                                </Text>
                                </Flex>
                        </a>
                        </>
                    )
                })
            }
    </>
  )
}

export default NavLink