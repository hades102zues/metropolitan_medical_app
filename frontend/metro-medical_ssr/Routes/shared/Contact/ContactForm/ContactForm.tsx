import React from "react";
import styles from "./ContactForm.module.css";

import * as Yup from "yup";
import { useFormik, Form, Field } from "formik";
import ReCAPTCHA from "react-google-recaptcha";

//const BASE_URL = "https://eec7708ca3f7.ngrok.io";
const BASE_URL = "http://localhost:3001";

const CONTACT_FORM_TARGET_URL = BASE_URL + "/send-contact-form";
const RECAPTCHA_KEY = "6LcNtcIZAAAAAGdb6P0gJmQ5ANM1UdoYRjUnyB9I";

const ContactForm = () => {
  interface InitialValues {
    fullName: string;
    email: string;
    subject: string;
    message: string;
    captchaDidVerify: boolean;

    formDidSubmit: boolean; //server responded with a 2xx
    errorDidOccur: boolean; //responded with anything other than 2xx
    isWaiting: boolean; //used to display Sending...  on the button until server response returns
  }

  const contactFormSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Please supply your full name.")
      .required("Please supply your full name."),

    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Please enter a valid email address."),

    subject: Yup.string()
      .min(5, "Please enter a subject.")
      .required("Please enter a subject."),

    message: Yup.string()
      .min(5, "Please supply a message.")
      .required("Please supply a message."),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      captchaDidVerify: false, //flag for captcha verify

      //have a flag for each status/scenerio you planned to have occur
      isWaiting: false, //used to signal waiting on server response
      formDidSubmit: false, //used to display success message if status 200 - form accepted
      errorDidOccur: false, //displays error message if status 400 - form rejected
    },
    onSubmit: (values) => {
      if (!values.captchaDidVerify) return;

      interface FetchPackage {
        fullName: string;
        email: string;
        subject: string;
        message: string;
      }
      interface Headers {
        "Content-Type": string;
      }

      interface FetchParameters {
        method: string;
        headers: HeadersInit;
        body: BodyInit;
      }

      const fetchPackage: FetchPackage = {
        fullName: values.fullName,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };

      const fetchParameters: FetchParameters = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fetchPackage),
      };

      formik.setFieldValue("isWaiting", true);
      formik.setFieldValue("formDidSubmit", false);
      formik.setFieldValue("errorDidOccur", false);

      fetch(CONTACT_FORM_TARGET_URL, fetchParameters)
        .then((response) => {
          formik.setFieldValue("isWaiting", false);

          if (response.status === 200)
            formik.setFieldValue("formDidSubmit", true);
          if (response.status === 400)
            formik.setFieldValue("errorDidOccur", true);
        })
        .catch((err) => {
          formik.setFieldValue("isWaiting", false);
          formik.setFieldValue("errorDidOccur", true);
          console.error("Error caught on form request.", err);
        });
    },
    validationSchema: contactFormSchema,
  });

  const onRecaptchaVerify = () => {
    formik.setFieldValue("captchaDidVerify", true);
  };

  const onRecaptchaExpired = () => {
    formik.setFieldValue("captchaDidVerify", false);
  };

  return (
    <div className={styles.contactUs}>
      <div className="wrapper">
        <div className={styles.formHeading}>
          <h2 className={styles.mainFormHead}>Leave Us Your Info</h2>
          <p className={styles.secondFormHead}>and we will get back to you.</p>
        </div>
        <div className={styles.contactFormArea}>
          <div className={styles.contactForm}>
            {formik.values.formDidSubmit ? null : (
              <form onSubmit={formik.handleSubmit} className={styles.form}>
                <input
                  placeholder="Full Name*"
                  className={styles.form_item + " " + styles.itemAdjust}
                  type="text"
                  id="fullName"
                  name="fullName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  style={{
                    border:
                      formik.touched.fullName && formik.errors.fullName
                        ? "1px solid red"
                        : null,
                  }}
                />
                <input
                  placeholder="Email*"
                  className={styles.form_item + " " + styles.itemAdjust}
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  style={{
                    border:
                      formik.touched.email && formik.errors.email
                        ? "1px solid red"
                        : null,
                  }}
                />
                <input
                  placeholder="Subject*"
                  className={styles.form_item}
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  style={{
                    border:
                      formik.touched.subject && formik.errors.subject
                        ? "1px solid red"
                        : null,
                  }}
                />
                <textarea
                  rows={6}
                  placeholder="Message*"
                  className={styles.form_textarea}
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  style={{
                    border:
                      formik.touched.message && formik.errors.message
                        ? "1px solid red"
                        : null,
                  }}
                ></textarea>
                <ReCAPTCHA
                  sitekey={RECAPTCHA_KEY}
                  onChange={onRecaptchaVerify}
                  onExpired={onRecaptchaExpired}
                />

                <button type="submit" className={styles.form_button}>
                  {formik.values.isWaiting ? "Sending..." : "Submit Now"}
                </button>
              </form>
            )}

            {formik.values.formDidSubmit ? (
              <p className={styles.form_submit}>
                Your form has been submitted.
              </p>
            ) : null}

            {formik.values.errorDidOccur ? (
              <p className={styles.form_error}>
                An error has occured. Please, try a gain Later.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
