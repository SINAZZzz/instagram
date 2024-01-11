import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
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
    <AppContext.Provider
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
    </AppContext.Provider>
  );
};

export default AppContextProvider;
