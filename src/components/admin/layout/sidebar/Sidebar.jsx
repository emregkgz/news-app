import React from 'react'
import {Link} from 'react-router-dom'
import CampaignIcon from "@mui/icons-material/Campaign";
import  './sidebar.scss'
import NewspaperIcon from "@mui/icons-material/Newspaper";

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <p className="title">LISTS</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <NewspaperIcon className="icon" />
              <span>News</span>
            </li>
          </Link>
          <Link to="/admin/announcements" style={{ textDecoration: "none" }}>
            <li>
              <CampaignIcon className="icon" />
              <span>Announcements</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
