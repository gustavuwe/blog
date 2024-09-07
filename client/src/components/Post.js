import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

export default function Post({_id, title, summary, cover, content, createdAt, author }) {


    return (
        <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={cover} alt=""/>
          </Link> 
        </div>
        <div className="texts">
          <Link to={`/post/${_id}`}> {/* Título da Postagem */}
          <h2 className="postTitle">{title}</h2>
          </Link>
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{format(new Date(createdAt), "dd/MM/yyyy 'as' H:m")}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    )
}