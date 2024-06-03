import React,{useState} from "react";
import "./login.css";
export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const name = "Admin";
    const pass = "admin@123";

    const handleForm = (event) =>{
        event.preventDefault();
        if(username === name && password === pass){
            console.log("Login Successful");
            setUsername("");
            setPassword("");
        }
        else{
            console.log("Error");
        }
        console.log(username, password)
    }
    return(
        <div className="login-container">
            <h2>Login</h2>
        <form onSubmit={handleForm}>
            <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
        </div>
    )
}