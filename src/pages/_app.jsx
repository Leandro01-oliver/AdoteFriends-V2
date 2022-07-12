import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContext } from '../../context/globalContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
     <GlobalContext>
      <Component {...pageProps} />
      </GlobalContext>
    </ChakraProvider>
  )
}

export default MyApp