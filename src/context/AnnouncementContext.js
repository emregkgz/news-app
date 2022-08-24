
import { createContext, useContext, useEffect, useState } from "react";
import { baseService } from "../api/baseService";


const AnnouncementContext = createContext();

export const AnnouncementProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementsValue, setAnnouncementsValue] = useState(true);

  useEffect(() => {
    baseService
      .getAll("/announcements")
      .then((res) => {
        setAnnouncements(res);
      })
      .catch((err) => console.log(err));
  }, [announcementsValue]);


  const values = {
    announcements,
    setAnnouncements,
    announcementsValue,
    setAnnouncementsValue,
  };



  return (
    <AnnouncementContext.Provider value={values}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncement = () => useContext(AnnouncementContext);
