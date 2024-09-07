import "./App.css";

import { Route, Routes } from "react-router-dom";

import Post from "./components/Post.js";
import Header from "../src/components/Header";
import Layout from "../src/components/Layout";
import IndexPage from "../src/pages/IndexPage";
import LoginPage from "../src/pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "../src/pages/PostPage";
import EditPost from '../src/pages/EditPost.js'

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/registrar" element={<RegisterPage />} />

            <Route path="/criar" element={<CreatePost />} />

            <Route path="/post/:id" element={<PostPage />} />

            <Route path="/editar/:id" element={<EditPost /> } />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
