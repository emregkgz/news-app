import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./addnew.scss";
import Navbar from "../../../components/admin/layout/navbar/Navbar";
import Sidebar from "../../../components/admin/layout/sidebar/Sidebar";

import { baseService } from "../../../api/baseService";
import { useNew } from "../../../context/NewContext";

const AddNew = () => {
  const { setNewsValue, newsValue } = useNew();

  const formik = useFormik({
    initialValues: {
      konu: "",
      icerik: "",
      url: "",
      tarih: "",
    },
    validationSchema: Yup.object({
      konu: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      icerik: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      tarih: Yup.date("date format").required("Required"),
      url: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter website"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      let reqBody = {
        konu: values.konu,
        icerik: values.icerik,
        tarih: values.tarih,
        url: values.url,
      };
      baseService.add("/news", reqBody).then(() => {
        setNewsValue(!newsValue);
        resetForm();
      });
    },
  });

  return (
    <div>
      <Navbar />
      <div className="addnew">
        <Sidebar />
        <div className="addnew-container">
          <div className="top">
            <h1>News</h1>
          </div>

          <div className="addnew-content">
            <div className="addbottom">
              <div className="right">
                <form onSubmit={formik.handleSubmit}>
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
                    {formik.touched.textarea && formik.errors.textarea ? (
                      <div className="input-alert">
                        {formik.errors.textarea}
                      </div>
                    ) : null}
                  </div>
                  <div className="formInput">
                    <label htmlFor="url">Haber Linki</label>
                    <input
                      id="url"
                      type="url"
                      {...formik.getFieldProps("url")}
                    />
                    {formik.touched.url && formik.errors.url ? (
                      <div className="input-alert">{formik.errors.url}</div>
                    ) : null}
                  </div>
                  <button type="submit">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
