import {createContext, useState, useEffect} from "react";

const GlobalProvider = createContext({});

const GlobalContext = ({children}) => {


    const [dashboardActive,setdashboardActive] = useState(false);

    const handlerdashboardActive = () => setdashboardActive(!dashboardActive);

    const value = { 
        handlerdashboardActive,
        dashboardActive
    }

    
    return (
        <GlobalProvider.Provider 
            value={value}
        >
            {children}
        </GlobalProvider.Provider>
    )
}

export{GlobalContext, GlobalProvider}