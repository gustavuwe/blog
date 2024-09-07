import { useState } from "react"
import { useParams, Navigate } from "react-router-dom"

export default async function DeletePostBtn() {
    const { id } = useParams
    const [redirect, setRedirect] = useState(false);

    async function editPost(event) {
        event.preventDefault()

        const response = await fetch("http://localhost:4000/post/" + id, {
            method: 'DELETE',
        })

        if (response.ok) {
            setRedirect(true)
        }

    }
    if (redirect === true) {
        return (
            <Navigate to={"/"} />
        )
    }
    return (
        <button className="deleteBtn" onSubmit={editPost}>
            Excluir Post
        </button>
    )
}