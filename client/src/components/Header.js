import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import AutocompleteSearchBar from "../components/AutocompleteSearchBar.js";
// import { SearchContext } from "../SearchContext.js";
import Input from "../components/Input.js";
// import { Input } from "@/components/ui/input"

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [results, setResults] = useState([]);
  const [valueSearched, setValueSearched] = useState([]);

  // const { searchTerm, setSearchTerm } = useContext(SearchContext);

  useEffect(() => {
    fetch("http://localhost:4000/perfil", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    window.location.reload();
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        MeuBlog
      </Link>
      <nav>
        {username && (
          <>
            {/* <AutocompleteSearchBar query={query} setQuery={setQuery}/>  <AutocompleteSearchBar query={query} setQuery={setQuery}/> */}
            {/* <Input /> */}
            <Link to="/criar" className="createPostLink">
              Criar um post
            </Link>
            <a onClick={logout} className="logout">
              Sair
            </a>
          </>
        )}
        {!username && (
          <>
            {/* <input
              type="text"
              placeholder="Pesquisar posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            /> */}
            <Link to="/login">Login</Link>
            <Link to="/registrar">Registrar</Link>
          </>
        )}
      </nav>
    </header>
  );
}
