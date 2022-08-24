import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteNew from "../pages/site/news/News";
import SiteAnnouncement from "../pages/site/announcement/Announcements";
import Announcements from "../pages/admin/announcements/Announcements";
import News from "../pages/admin/news/News";
import AddNew from "../pages/admin/addnew/AddNew";
import UpdateNew from "../pages/admin/updatenew/UpdateNew";
import UpdateAnnouncement from "../pages/admin/updateannouncement/UpdateAnnouncement";
import AddAnnouncement from "../pages/admin/addannouncement/AddAnnouncement";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<SiteNew />} />
          <Route path="announcements" element={<SiteAnnouncement />} />
        </Route>
        <Route path="/admin/">
          <Route index element={<News />} />
          <Route path="addnew" element={<AddNew />} />
          <Route path="new/update/:id" element={<UpdateNew />} />
          <Route path="announcements/">
            <Route path="update/:id" element={<UpdateAnnouncement />} />
            <Route path="addannouncement" element={<AddAnnouncement />} />
            <Route index element={<Announcements />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
