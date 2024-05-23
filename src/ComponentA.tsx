import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

interface UserProps{
    username: string|null;
}

export const UserContext = createContext<UserProps>({ username: null });

function ComponentA(){ // Provider component

    const [user, setUser] = useState<string>("");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <input 
                type="text" 
                placeholder="Enter name" 
                onChange={(e) => setUser(e.target.value)}
            />
            <h2>Hello {user}</h2>
            <UserContext.Provider value={{username: user}}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;