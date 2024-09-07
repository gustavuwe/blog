import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../UserContext"

export default function LoginPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const {setUserInfo} = useContext(UserContext);
    async function login(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'Application/Json'},
            credentials: 'include',
        })

        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(true);
            })
            setRedirect(true)
        } else {
            alert('wrong credentials') // alterar depois
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div>
           <form className="login" onSubmit={login}>
                <h1>Login</h1>
                <input type="text" 
                placeholder="usuario"
                value={username}
                onChange={
                    event => setUsername(event.target.value)
                    }/>
                <input type="password"
                placeholder="senha"
                value={password}
                onChange={
                    event => setPassword(event.target.value)
                }/>
                <button className="auth-btn">Login</button>
            </form> 
        </div>
    )
}