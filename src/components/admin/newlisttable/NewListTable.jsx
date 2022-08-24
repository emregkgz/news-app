import * as React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./newlisttable.scss";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import RemoveNew from "../removenew/RemoveNew";
import { useNew } from "../../../context/NewContext";


export default function Datatable() {
  const { news } = useNew();

    const navigate = useNavigate();


    const newDetail = (id) => {
      navigate(`new/update/${id}`, { state: { id: id } });
      console.log(id);
    };



  return (
    <div className="datatable">
      <table variant="simple">
        <thead>
          <tr>
            <th>Konu</th>
            <th>İçerik</th>
            <th>Tarih</th>
            <th>URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map((newws, index) => (
            <tr key={index}>
              <td>
                <div className="picerik">{newws.konu}</div>
              </td>
              <td>
                <div className="picerik">{newws.icerik}</div>
              </td>
              <td>{newws.tarih}</td>
              <td>
                <div className="picerik">{newws.url}</div>
              </td>
              <td>
                <div className="cellAction">
                  
                    <button
                      className="update-btn"
                      onClick={() => {
                        newDetail(newws.id);
                      }}
                    >
                      <BorderColorIcon />
                    </button>
                  
                  <RemoveNew value={newws.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
