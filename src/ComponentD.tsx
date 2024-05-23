import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() { // Consumer component
    const { username } = useContext(UserContext);
    
    return (
        <div className="box">
            <h1>ComponentD</h1>
            <h2>Username is {username}</h2>
        </div>
    );
}

export default ComponentD;