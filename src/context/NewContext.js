
import { createContext, useContext, useEffect, useState } from "react";
import { baseService } from "../api/baseService";


const NewContext = createContext();

export const NewProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [newsValue, setNewsValue] = useState(true);

  useEffect(() => {
    baseService.getAll("/news")
      .then((res) => {
        setNews(res);
      })
      .catch((err) => console.log(err));
  }, [newsValue]);


  const values = {
    news,
    setNews,
    setNewsValue,
    newsValue,
  };



  return (
    <NewContext.Provider value={values}>
      {children}
    </NewContext.Provider>
  );
};

export const useNew = () => useContext(NewContext);
