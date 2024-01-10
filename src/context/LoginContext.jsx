import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const getData = () => {
    axios
      .get("http://localhost:5005/users")
      .then((res) => setUser(res.data[0]))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        user: user,
        setUser,
        username: username,
        setUsername,
        password: password,
        setPassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
