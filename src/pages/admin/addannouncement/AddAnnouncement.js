import React , {useState} from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../../../components/admin/layout/navbar/Navbar";
import Sidebar from "../../../components/admin/layout/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./addannouncement.scss";
import { useAnnouncement } from '../../../context/AnnouncementContext';
import { baseService } from '../../../api/baseService';

const AddAnnouncement = () => {
  const [file, setFile] = useState ("");
  const{announcementsValue, setAnnouncementsValue}=useAnnouncement()
  
   const onInputChange = async (e) => {
     if (e.target.files[0]) {
       console.log(e.target.files);
       const file = e.target.files[0];
       const base64 = await convertBase64(file);
       setFile(base64);
       console.log("file",file)
     }
   };

   const convertBase64 = (filess) => {
     return new Promise((resolve, reject) => {
       const fileReader = new FileReader();
       fileReader.readAsDataURL(filess);
       fileReader.onload = () => {
         resolve(fileReader.result);

         formik.setFieldValue("img", fileReader.result);
       };
       fileReader.onerror = (error) => {
         reject(error);
       };
     });
   };



  const formik = useFormik({
    initialValues: {
      konu: "",
      icerik: "",
      tarih: "",
      img: "",
    },
    validationSchema: Yup.object({
      konu: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      icerik: Yup.string()
        .min(5, "Must be 20 characters or more")
        .required("Required"),
      tarih: Yup.date("date format").required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      let reqBody = {
        konu: values.konu,
        icerik: values.icerik,
        tarih: values.tarih,
        img: values.img,
      };
      baseService.add("/announcements", reqBody).then(() => {
        setAnnouncementsValue(!announcementsValue);
        resetForm();
        setFile("")
      });
    },
  });




  
  return (
    <div>
      <Navbar />
      <div className="addannouncement">
        <Sidebar />
        <div className="addannouncement-container">
          <div className="top">
            <h1>Add Announcement</h1>
          </div>

          <div className="addannouncement-content">
            <div className="addbottom">
              <div className="left">
                <img
                  src={
                    file
                      ? file
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="right">
             

                <form onSubmit={formik.handleSubmit}>
                  <div className="formInput">
                    <label htmlFor="img">
                      Image:
                      <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    <input
                      id="img"
                      type="file"
                      onChange={(e) => onInputChange(e)}
                      style={{ display: "none" }}
                    />
                    {formik.touched.img && formik.errors.img ? (
                      <div className="input-alert">{formik.errors.img}</div>
                    ) : null}
                  </div>
                  <div className="formInput">
                    <label htmlFor="konu">Konu</label>
                    <input
                      id="konu"
                      type="text"
                      {...formik.getFieldProps("konu")}
                    />
                    {formik.touched.konu && formik.errors.konu ? (
                      <div className="input-alert">{formik.errors.konu}</div>
                    ) : null}
                  </div>
                  <div className="formInput">
                    <label htmlFor="tarih"> Tarih</label>
                    <input
                      id="tarih"
                      type="date"
                      {...formik.getFieldProps("tarih")}
                    />
                    {formik.touched.tarih && formik.errors.tarih ? (
                      <div className="input-alert">{formik.errors.tarih}</div>
                    ) : null}
                  </div>
                  <div className="formInput">
                    <label htmlFor="icerik">İçerik</label>
                    <textarea
                      id="icerik"
                      className="form-textarea"
                      {...formik.getFieldProps("icerik")}
                    />
                    {formik.touched.icerik && formik.errors.icerik ? (
                      <div className="input-alert">{formik.errors.icerik}</div>
                    ) : null}
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncement;
