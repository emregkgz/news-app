import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../../../components/admin/layout/navbar/Navbar";
import SideBar from "../../../components/admin/layout/sidebar/Sidebar";
import "./news.scss";
import NewListTable from "../../../components/admin/newlisttable/NewListTable";

const News = () => {
  return (
    <div>
      <Navbar />
      <div className="news">
        <SideBar />
        <div className="news-container">
          <div className="top">
            <h1>News</h1>
            <Link to="addnew" className="link">
              Add New
            </Link>
          </div>

          <div className="news-content">
            <NewListTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
