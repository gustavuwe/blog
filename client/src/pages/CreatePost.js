import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "../components/Editor.js";
import { UserContext } from "../UserContext.js";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {


      // if (response.ok) {
      //   setIsAuthenticated(true)
      // } else {
      //   setIsAuthenticated(false)
      // }
    verifyJWT()
    console.log(userInfo?.username)
  }, []);

  async function verifyJWT() {
    const response = await fetch("http://localhost:4000/perfil", {
      method: "GET",
      credentials: "include"
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });


  }

  async function createNewPost(event) {
      const data = new FormData();
      data.set("title", title);
      data.set("summary", summary);
      data.set("content", content);
      data.set("file", files[0]);

      event.preventDefault();

      const response = await fetch("http://localhost:4000/post", {
        method: "POST",
        body: data,
        credentials: "include",
      });

      console.log(response.ok);

      if (response.ok) {
        setRedirect(true);
      }
    }
  // const data = new FormData();
  // data.set("title", title);
  // data.set("summary", summary);
  // data.set("content", content);
  // data.set("file", files[0]);

  // event.preventDefault();

  // const response = await fetch("http://localhost:4000/post", {
  //   method: "POST",
  //   body: data,
  //   credentials: "include",
  // });

  // console.log(response.ok);

  // if (response.ok) {
  //   setRedirect(true);
  // }

  const username = userInfo?.username

  if (redirect || !username) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={createNewPost}>
      <input
        type="title"
        placeholder={"Titulo"}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="summary"
        placeholder={"Sumario"}
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      <input type="file" onChange={(event) => setFiles(event.target.files)} />
      <Editor value={content} onChange={setContent} />
      <button className="formButton" style={{ marginTop: "5px" }}>
        Criar Post
      </button>
    </form>
  );
}