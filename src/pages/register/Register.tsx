import "./Register.css"

//shadcn
import { Input } from "../../components/ui/input"

//hooks
import { useState } from "react"

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleSubmit = ((e: React.FormEvent) => {
        if(confirmPassword !== password){
            e.preventDefault();
            //code for validation
        } else if(password.length < 8 ){
            e.preventDefault()
            //code for validation
        } else {
            e.preventDefault();
            // console.log(username);
            // console.log(password);
            // console.log(confirmPassword);
            
            //code for handleSubmit
    
            setUsername("");
            setPassword("");
            setConfirmPassword("");
        }
    })

    return (
        <div className="form-container">
            <h1>New Here?! Register and see what your friends are watching!</h1>
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <Input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                    <button type="submit" className="register-button">Register</button>
                </form>
        </div>
    )
}

export default Register