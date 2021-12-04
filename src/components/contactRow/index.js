import * as React from "react";
import { Link } from "gatsby";
import Container from "../container";

import * as styles from "./style.module.scss";

import DownArrow from "../../svgs/down-arrow.svg";

const ContactRow = ({content}) => {
  return (
    <>
      <div className={styles.contactRow}>
        <Container size="large">
          <div className={styles.contactRowInner}>
            <div className={styles.contactRowImage}>
              {content.img && (
                <img src={content.img} alt={content.imgAlt} />
              )}
            </div>
            <div className={styles.contactRowContent}>
              <h1>Let's chat</h1>
              <h2>Get in touch</h2>
              <p>tel: <a href="tel:07123456789">07123456789</a></p>
              <p>mail: <a href="mailto:boothp959@gmail.com?subject=Website Enquiry">boothp959@gmail.com</a></p>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.contactForm}>
        <Container size="medium">
          <form method="/pages/success" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.formField}>
              <p>First Name</p>
              <input name="First Name" type="text" placeholder="First Name" />
            </div>
            <div className={styles.formField}>
              <p>Last Name</p>
              <input name="Last Name" type="text" placeholder="Last Name" />
            </div>
            <div className={styles.formField}>
              <p>Enquiry Type</p>
              <select name="Enquiry Type">
                <option selected>General Enquiry</option>
                <option>Kitchen Fitting</option>
                <option>Bathroom Fitting</option>
                <option>Door Fitting</option>
              </select>
              <DownArrow />
            </div>
            <div className={styles.formField}>
              <p>Subject</p>
              <input name="Subject" type="text" placeholder="Subject" />
            </div>
            <div className={[styles.formField, styles['full']].join(" ")}>
              <p>Enquiry</p>
              <textarea name="Enquiry" placeholder="Enquiry" />
            </div>
            <div className={[styles.formField, styles['full']].join(" ")}>
              <input type="submit" value="Submit Enquiry" />
            </div>
          </form>
        </Container>
      </div>
    </>
  )
};

export default ContactRow;
