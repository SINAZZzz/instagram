import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const username = localStorage.getItem("username");

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
        username,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
