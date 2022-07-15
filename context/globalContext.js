import {createContext, useState, useEffect} from "react";
import {useColorMode} from '@chakra-ui/react'
const GlobalProvider = createContext({});

const GlobalContext = ({children}) => {


    const [dashboardActive,setdashboardActive] = useState(false);

    const handlerdashboardActive = () => setdashboardActive(!dashboardActive);

    const { colorMode, toggleColorMode } = useColorMode()

    const [user,setUser] = useState([]);

    
    const value = { 
        handlerdashboardActive,
        dashboardActive,
        toggleColorMode,
        colorMode
    }

    useEffect(()=>{
     
    },[])
    
    return (
        <GlobalProvider.Provider 
            value={value}
        >
            {children}
        </GlobalProvider.Provider>
    )
}

export{GlobalContext, GlobalProvider}