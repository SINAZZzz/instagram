import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const username = localStorage.getItem("username");

  const getDataUser = () => {
    axios
      .get("http://localhost:5015/users")
      .then((res) => setUser(res.data[0]))
      .catch((error) => console.log("error", error));
  };

  const getDataPost = () => {
    axios
      .get("http://localhost:5015/posts")
      .then((res) => setPost(res.data))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getDataUser();
    getDataPost();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user: user,
        setUser,
        post: post,
        setPost,
        username,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
