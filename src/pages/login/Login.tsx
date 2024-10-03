import "./Login.css"

//shadcn
import { Input } from "../../components/ui/input"

//hooks
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = ((e: React.FormEvent) => {
        e.preventDefault();
        console.log(username);
        console.log(password);

        setUsername("");
        setPassword("");
    })

    return (
        <div className="form-container">
            <h1>Log in to save and share your series!</h1>
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <button type="submit" className="login-button">Login</button>
                </form>
            <h2>Don't have login?</h2>
            <button onClick={(() => navigate('/register'))} className="register_button">Register Here!</button>
        </div>
    )
}

export default Login