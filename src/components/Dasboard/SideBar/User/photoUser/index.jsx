import React from 'react'
import { Avatar } from '@chakra-ui/react'

const PhotoUser = (props) => {
  return (
    <>
        <Avatar
         w={'40px'}
         h={'40px'}
         mx={props.onOpen ? 'auto':'0'}
         cursor={'pointer'}
        />
    </>
  )
}

export default PhotoUser