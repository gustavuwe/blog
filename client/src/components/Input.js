import { useState, useEffect } from "react";

export default function Input({ setResults }) {
  const [input, setInput] = useState("");
  const [postUsernames, setPostUsernames] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //   const fetchData = (value) => {
  //     fetch("http://localhost:4000/post")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         const results = json.filter((user) => {
  //           return (
  //             value &&
  //             user &&
  //             user.username &&
  //             user.username.toLowerCase().includes(value)
  //           );
  //         });
  //         setResults(results);
  //       });
  //   };

  //   const handleChange = (value) => {
  //     setInput(value);
  //     fetchData(value);
  //   };

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        console.log(posts);
        for (let i = 0; i < posts.length; i++) {
          postUsernames.push(posts[i].title);
        }
        console.log(postUsernames);
      });
    });
  }, []);

    const filteredPosts = posts.filter((post) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const lowerCaseUsername = post.author.username.toLowerCase();

    return lowerCaseUsername.includes(lowerCaseSearchTerm);
  });

  return (
    <div className="input-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);

          fetch("http://localhost:4000/post")
            .then((response) => response.json())
            .then((posts) => {
              const filteredPosts = posts.filter((post) => {
                const lowerCaseSearchTerm = searchTerm.toLowerCase();
                const lowerCaseUsername = post.author.username.toLowerCase();

                return lowerCaseUsername.includes(lowerCaseSearchTerm);
              });

              setPosts(filteredPosts);
            });
        }}

        

        // onChange={(event) => handleChange(event.target.value)}
      />

        {filteredPosts.length > 0 &&
        filteredPosts.map((post) =>
        //   <Post key={post._id} {...Post} />
        console.log("a")
        )}
    </div>
  );
}
