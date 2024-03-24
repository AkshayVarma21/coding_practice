import { createContext, useContext } from "react";


export const UserContext = createContext(undefined)

export const useUserContext = ()=>{
    const user = useContext(UserContext)

    if(user === undefined){
        throw new Error("Context value is undefined")
    }

    return user;
}