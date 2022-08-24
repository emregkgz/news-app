import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/admin/layout/sidebar/Sidebar";
import Navbar from "../../../components/admin/layout/navbar/Navbar";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, ListGroupItem } from "react-bootstrap";
import { useAnnouncement } from "../../../context/AnnouncementContext";
import "./announcements.scss";
import { baseService } from "../../../api/baseService";

const Announcements = () => {
  const { announcements, announcementsValue, setAnnouncementsValue } =
    useAnnouncement();

  const navigate = useNavigate();

  const announcementsDetail = (id) => {
    navigate(`update/${id}`, { state: { id: id } });
    console.log(id);
  };
  const deleteAnnouncement = (id) => {
    baseService.delete("/announcements", id).then((res) => {
      setAnnouncementsValue(!announcementsValue);
    });
  };
  return (
    <div>
      <Navbar />
      <div className="announcement">
        <Sidebar />
        <div className="announcement-container">
          <div className="top">
            <h1>News</h1>
            <Link to="addannouncement" className="link">
              Add Announcement
            </Link>
          </div>

          <div className="announcement-content">
            <div className="update-product-content">
              {announcements.map((data) => (
                <Card key={data.id} id={data.id}>
                  <Card.Img variant="top" src={data.img} />
                  <Card.Body>
                    <div className="card-tittle">
                      <Card.Title>{data.konu}</Card.Title>
                    </div>
                    <div className="card-author">{data.icerik}</div>
                  </Card.Body>

                  <ListGroupItem>{data.gecerlilikTarihi}</ListGroupItem>

                  <div className="card-buttons">
                    <button
                      className="product-update-btn"
                      onClick={() => {
                        announcementsDetail(data.id);
                      }}
                    >
                      <BorderColorIcon />
                    </button>

                    <button
                      className="product-remove-btn"
                      onClick={() => deleteAnnouncement(data.id)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
