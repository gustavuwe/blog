import Post from "../components/Post.js";
import { useContext, useEffect, useState } from "react";
// import { SearchContext } from "../SearchContext.js";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("")
  const [postsFiltered, setPostsFiltered] = useState([])
  const [filterData, setFilterData] = useState([]);
  // const { searchTerm, setSearchTerm } = useContext(SearchContext);

    useEffect(() => {
      fetch("http://localhost:4000/post").then((response) => {
        response.json().then((posts) => {
          console.log(posts);
          setPosts(posts);
          setFilterData(posts)
        });
      });
    }, []);

    const handleFilter = (value) => {
      const res = filterData.filter(f => f.title.toLowerCase().includes(value.toLowerCase()))
      setPosts(res)
    }

    // const handleChange = (value) => {
    //   setSearchedTerm("")
    //   if (value !== "") {
    //     setSearchedTerm(value)
    //     setFilteredPosts()
    //     console.log(searchedTerm)
    //     console.log(posts)
    //   } else if (value === "") {  
    //     setPostsFiltered(posts)
    //   } else {
    //     setPostsFiltered([])
    //   }
    // }

    // async function setFilteredPosts() {
    //   console.log("a")
    //   const postsFiltereds = []
    //   for (let i = 0; i < posts.length; i++) {
    //     console.log(posts[i].title)
    //     if ((posts[i].title.toLowerCase()).includes(searchedTerm.toLowerCase())) {
    //       postsFiltereds.push(posts[i])
    //       setPostsFiltered(postsFiltereds)
    //     }
    // }
    // } 

    // async function setFilteredPosts() {
    //   console.log("a")
    //   console.log(`posts Filtered: ${postsFiltered}`)
    //   const postsFiltereds = []
    //   for (let i = 0; i < posts.length; i++) {
    //     console.log(posts[i].title)
    //     const arrayPostsWords = []
    //     arrayPostsWords.push(posts[i].title.toLowerCase().split(" "))
    //     const arraySearchTermWords = []
    //     arraySearchTermWords.push(searchedTerm.toLowerCase().split(" "))
    //     console.log(`array de postwords ${arrayPostsWords}`)
    //     console.log(`array de searchterms ${arraySearchTermWords}`)
    //     for (let j = 0; j < arraySearchTermWords.length; j++) {
    //       console.log("CHEGOU CHEGOU CHEGOU CHEGOU CHEGOU")
    //       if (arrayPostsWords.includes(arraySearchTermWords[j])) {
    //         console.log("POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI POSSUI ")
    //         postsFiltereds.push(posts[i])
    //         setPostsFiltered(postsFiltereds)
    //       }
    //     }
    //     // if ((posts[i].title.toLowerCase().split(" ")).includes(searchedTerm.toLowerCase().split(" "))) {
    //     //   postsFiltereds.push(posts[i])
    //     //   setPostsFiltered(postsFiltereds)
    //     // }
    // }
    // } 

    // setPostsFiltered(posts.title.filter(post => post.toLowerCase().includes(searchedTerm.toLowerCase())))
    return (
      <>
      <div className="container">
          <div className="searchbar"
      style={{
         // Add this line for box shadow
      }}
    >
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
        className="inputSearchbar"
        type="text"
        onChange={e => handleFilter(e.target.value)}
        style={{
          width: "100%",
          border: "none",
          zIndex: "1",
        }}
      />
    </div>
    </div>
      {/* {posts.length > 0 && posts.map((post) => <Post {...post} />)} */}
        {/* postsFiltered.length > 0 && postsFiltered.map((post) => <Post {...post} />) */}
        {/* {posts.map((post, i) => {
          <Post {...post} />
        })} */}
        {posts.length > 0 && posts.map((post) => <Post {...post} />)}
      </>
    )
  }

//   useEffect(() => {
//     fetch("/api/posts")
//       .then((response) => response.json())
//       .then((posts) => setPosts(posts));
//   }, []);

//   const filteredPosts = posts.filter((post) => {
//     const lowerCaseSearchTerm = searchTerm.toLowerCase();
//     const lowerCaseTitle = post.title.toLowerCase();

//     return lowerCaseTitle.includes(lowerCaseSearchTerm);
//   });

//   return (
//     <div>
//       {filteredPosts.length > 0 &&
//         filteredPosts.map((post) => <Post key={post._id} {...post} />)}
//     </div>
//   );
// }
