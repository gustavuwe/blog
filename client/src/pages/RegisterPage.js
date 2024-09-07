import { useState } from "react"

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function register(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/registrar', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'}
        })
        if (response.status === 200) {
            alert('Cadastrado com Sucesso!') // alterar depois
        } else {
            alert('Falha no registro!') // alterar depois
        }
    }

    return (
        <>
            <form className="register" onSubmit={register}>
                <h1>Cadastro</h1>
                <input 
                    type="text"
                    placeholder="usuario"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                 />
                <input
                 type="password"
                 placeholder="senha"
                 value={password}
                 onChange={event => setPassword(event.target.value)}
                 />
                <button className="auth-btn">Registrar-se</button>
            </form>
        </>
    )
}