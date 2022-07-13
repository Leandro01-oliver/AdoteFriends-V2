import React,{useContext,useState} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  Box,
  InputLeftElement,
  InputGroup,
  Flex,
  Text
} from '@chakra-ui/react'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgClose} from 'react-icons/cg'
import { GlobalProvider } from '../../../../../../../../context/globalContext';
import Image from 'next/image'

const ModalFilter = (props) => {

  const { colorMode } = useContext(GlobalProvider);

  const [search,setSearch] = useState('');

  const handlerClearSearch = () => {
  }

  return (
    <>
  <Modal 
    isOpen={props.isOpen}
    onClose={props.onClose}
    bg={colorMode === 'light' ? 'Dark' : 'Light'}
  >
        <ModalOverlay />
        <ModalContent
        bg={'transparent'}
        boxShadow={'none'}
        w={'100%'}
        maxW={'800px'}
        >
          <ModalBody>
          <Box
             bg={'#fff'}
             w={'100%'}
             p={'1rem'}
             borderRadius={'10px'}
            >
            <InputGroup
            color={'rgba(250,0,0,.5)'}
            position={'relative'}
            >
              <InputLeftElement
                pointerEvents='none'
                top={'.75rem'}
                left={'.25rem'}
                fontSize={'1.5rem'}
                children={<AiOutlineSearch />}
              />
              <Input
               w={'100%'}
               maxW={'800px'}
               h={'60px'}
               border={'2px solid rgba(250,0,0,.5)!important'}
               bg={'#fff'}
               maxLength={'100'}
               fontSize={'20px'}
               pr={'3.5rem'}
               onChange={(e)=>{setSearch(e.target.value)}}
               _hover={{
                border:'2px solid transparent',
                boxShadow:'none'
               }}
               _focus={{
                border:'2px solid transparent',
                boxShadow:'none'
               }}
            />
             <Flex
                w={'30px'}
                h={'30px'}
                border={'2px solid rgba(250,0,0,.5)'}
                position={'absolute'}
                borderRadius={'50%'}
                justify={'center'}
                cursor={'pointer'}
                align={'center'}
                top={'1rem'}
                transition={'.5s ease-in-out'}
                right={'1rem'}
                fontSize={'1.5rem'}
                onClick={handlerClearSearch}
                _hover={{
                  border:'2px solid transparent',
                  boxShadow:'0 0 10px 0 rgba(250,0,0,.5)',
                  color:'rgba(250,0,0,.5)'
                }}
               >
               <CgClose />
            </Flex>
            </InputGroup>
            <Box
              mt={'1rem'}
              px={'.5rem'}
              display={search ? 'block' : 'none'}
            >
            <Box
            mb={'1rem'}
            ml={'.5rem'}
            >
              <Text
              fontWeight={'bold'}
              color={'rgba(250,0,0,.5)'}
              fontSize={'1.5rem'}
              >
                 {search}
              </Text>
            </Box>
              <Flex
                align={'center'}
                px={'.5rem'}
                borderRadius={'10px'}
                border={'2px solid rgba(250,0,0,.5)'}
                cursor={'pointer'}
                color={'rgba(250,0,0,.5)'}
                transition={'.5s ease-in-out'}
                _hover={{
                  backgroundColor:'rgba(250,0,0,.5)',
                  color:'#fff',
                  border:'2px solid #fff',
                  boxShadow:'0 0 10px 0 rgba(250,0,0,.5)'
                }}
              >
                   <Box
                   mt={'.4rem'}
                   >
                    <Image
                        src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIQAxgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQMEBQIGB//EADwQAAEDAgQDBAcGBAcAAAAAAAEAAgMEEQUSITFBUWEGEyJxFDKBkaGxwSMzQlLR8GJy4fEHJCVTY4Ky/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAP/xAAfEQEBAAIBBAMAAAAAAAAAAAAAAQMRAhIxQVEhIjL/2gAMAwEAAhEDEQA/APfRmw1TJ5KPZzvNO+iiunuA1XBPWyLq5hDQWSyWvmdbXkP2VRS343XQ12Wu+CF/rRtKhfQQu1GZvkVBm318kMOiuOoHW8MgPK4UXokzQRla7+U3QQ3HBO65kY9m7HD2IANrcUDukN7JHQJX8V0Ddpqux6qjO4XQ2QIjxBVKnSXxeqeKtOuq9TqW6HZRVN3qnkqj3aq7K2zCNFQmOU7bG6FdU32mJ4cw6gzlx03DWPd8wFWxqoNRXSE7N8IXNJVNixWhkf4WtqAC7a4c0t+blHXMMdXMx24eV5Z/zI3in2qmWqJzVYIUbguR0qFRGCFnU7zTV7MpLWynI63XY+9a82yyasfax5d8wt71rjdVnnNx6/D9W8Bpx/skpKGIuaQWkW47oXc4rp6i57x17cke1QuI7w3dcg6nku23Db3vqq07c7KLk7arRwcWw2A/nbn95v8AVZNU49y7Lu6wHyW/EwRRsjaLBrQAqnl2hCEUIQkgajdDG7Usb7l2hBA6jgOzSPIqrNh7j91IB/MFopFBlvpJ2jRrXeTlE5r49ZI3NHMrUebDoseullfJTQyMErZaprW92T4QNSXacwoOnm3hIIPVVah2o58V6NuaQO76Ng8WgBvcczy8lDNRU0nrQt9mnyTRt5wi7VSnjuSvTPwmnN8rpGdM1/mqM2BuI+zqB/2Z9VFeRrKcODmuFwQb20Vl0pxOm9JvergAbVN58pLciPcbjgtOpwStDDZsclx+F1vmsx2H10EzZmw1EEzPVlazMLcQbaFp4j+6nKdU1VnxdxSco3HRXJX00wcagegyg2c+xdAet92e33lcHCquUZqeSnmYdnxzAgrluLlPD2mbje7Lmdoo8LpHVte19iY4zuNi5bA7Pygd5XzxwxDU3fb4rWoKcd22PDIS8WsJ3AiIeR/F7PevTHiu91jJllmoje6SmDIqaJ0s7hmLANm8Tr1+vJC3KPCoYGEuc98z7GSUusXn2aADgELp36c/RvvXNhfhb96KSPbXlqFFKCx7SL5enNSDRwPPcKNpIIxLUwNIu0OzEeWq21lYWC6re6wytZv1J/otVVIEISRTQkhA0JIQC5cU7rhzhzHvQRSkgaWPQrBpxHJ2hpRkfFLBBJK+nYdPEQLngTpz4rXrnAQPzsc4W2buszC7nEMTe6ra2GMMhjMer4zre/w3Cixv0zWtp2ZWPYCM2V+4vrY9VIUxoAPjzQqjgrkhSFJBEW6rjJ0U9ksqgrOhY/1mNPmLqpLgeGTuLpaCnc47nuwCVp5V0GorKh7P4bC7NDTRRuGxEbSfkrbaRzSLPa635grgCaIoTMdFa+W22iE699nMb5lCCg9veMsCQb6JEFtiQdwu2uBblK4e4gEm4AGiov4Q20L3ndzvkrygoWZKSIWtcXPt1U5RAhAQihCEroGUiUE81kdosbo8Bw2Wvr5AyKMaDi53ADqgq9r+0kHZ6g75w72plPd01O06yvOw8uaOy8OJDD2VOOFhxCYXkDRYMHBvRef7I4LW4viJ7U9pIy2pkH+To3atpo+Bt+Y7r3J0CoqVb7OYO9LHF17D8VtbfBVOzEL2UOcRU9NLPUOkkY2xzi+4sdzzTxmfuaOokPjY2IhzI23fry9l1awOmEGH0MYgdkbCCHyOBc0n66rKtRCEKoEWQhArIATQgLIAQhAJ7IQgzqs3mO+miFHOc8jiTxKFBWc1zdQ7TkopC59mA6uIaLcbqUnKHgndFKy9fE3fK7NfyCo3G2a0AbAWQShCoEISQNIoUM8rYmF0jg1oBJcTsEEWI10FBSS1NXI2KGJpc97tgAvBYLQ1HbbF2doMXiczCKd3+nUbxo8/7jhx6fu/Ja//ABExe93t7NUUhBANvTJQf/IX0SKJsTGsY0Na0ZQGiwA6IGG2XD9rgbKQqGU6bXQYeOyWibC54p5KiVsbH5c2boR+q36VjBI/K2UOYAw5r5efhG3HcLztQwz41hsTBFka4ySMmF3tHMddAvS0hzxF7Z+/a5xIdYaa2sLcllamQglK6qGhK6YQCEIQCEIQMLmV1o3HoulBWnLTv62CDMLhc3Kajc8XQoB+WRp03CkwppdWPkP4GZfaT/RV5X5R+I6HRXcGafR3yH1nvOo5DT9VRpJJXQqGhJInRAnmw20XzvFa6ftzismBYTI5mDwOtiFYw/ef8bCPivSYlildH2go8Lp8Mmlp52OdNV7MitsL8+nUWWxR0VPSMc2niZEHuL3BjQMzjqSepUCw+jgoKSKlpYmxQxNDWMbsArKEFUJyq1RAjOZzmg6XA1VglVqhxbqJAy2pvxHEIMigYKjtJUy9yM9LCWMmcbg5txv/AAj3r0sQeIWd5kD7DNk2vxsvLdmss9LXVA76tjmmyd2TbKL2IF7Cw34+1eqAsABwShoSQoGhJNA0JJ3QCEXRdAKpiLrRtbzPyVtZ+JOGdg5BBRc6x0QuXEg+G+3AIUHVTrC7a4G5WnQM7qihYdwwX+ayprPc2Np+8IHlcrbWkNNJCAQhJFKw5JoQgEihCDl2yzcUe5lNI45GtyWEh3BOn6rRdsvOdpZDHRyGKlMkr5A3LI4BrrAkb7a2GyhF7Ab+g0YnqM0sji8OhByvA5kDa3PdbioYXGYYoYIzE2KOAXgaLuaTsb3233V5UNCSEDQkmgaEkIGhJCB3WVWnNUO6Gy1FjSOzvf8AxOv8VKI3HUXKSQza8jshQNga2uge4gNaSbk9NFrCaM/iF1l5QdOaidTt9YCx6Gy0jcDwRvfyTv00WEO/b6s7mHk7xfNd+lVjDpZ/U6INu6FjtxOYHK+E3421A9uinGJxtAMrC33kIrQQq0VbTyC7ZW+9Tte13qkHyKDpJK6LoOJHBrHOcbAAknkF5DH5Ip8TwqmdNVPJkDmujFtySMx4Dwfu69ZUmQRkRFgkOgz7XXmInS1Pa+7ayB1PED9gAM7SLDffcO5bqLLp6mmZaWV7qdkZ8LWyNN3SNA0v5EnRWFXoAz0fPG2Zoe4vtMSXA36625BTqoaEk0DQkmgE0kIGhCEHErssbjyCx2W2K06w2gd10WbGBmBuLdVBwNhb4aoXVwNLDRJQM7KN2jRbmmhaQvoVCSe8tc2uhCg7DQAAo6lxjAyIQg7kiYQ24uXcVVeDHIGse8A8ikhFitW1tbRyXgrZw2xOV5Dx8QVq4Bi1RiEbfSGx3uRdoI+qEItbE0bHgZ2h2Q5hcbFeTwKUSY1iLhDCyVjdJWMs7W515680IVR7CAkwRlxLnFouTxXaEKATQhUCEIQNCEIgQhCKrV5tG3zKz3C2yELILb+ZQhCD/9k='}
                        alt="Picture of the author"
                        width={'60rem'}
                        height={'60rem'}
                        style={{
                          borderRadius:'10px'
                        }}
                      />
                   </Box>
                   <Box
                   ml={'1rem'}
                   >
                       <Text
                        fontWeight={'bolder'}
                        fontSize={'1.1rem'}
                       >
                          Página da Home
                       </Text>
                   </Box>
              </Flex>
            </Box>
            </Box>
            </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}

export default ModalFilter