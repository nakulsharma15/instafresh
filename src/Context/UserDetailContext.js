import { useContext, createContext , useState } from "react";
const UserDetailContext = createContext();

const useUserDetail = () => useContext(UserDetailContext);

const UserDetailProvider = ({children}) => {
    const [ userDetail , setUserDetail ] = useState({
        wishlist:[],
        cart:[]
    })
    return(
        <UserDetailContext.Provider value={{ userDetail , setUserDetail } }>{children}</UserDetailContext.Provider>
    )
}

export { useUserDetail , UserDetailProvider}; 

