import * as React from "react";
import Layout from "../components/layout";
import ContactRow from "../components/contactRow";

import KitchenImg from "../images/kitchen-1.jpg";

const contactRowContent = {
  mainHeader: "Bathroom Fitting",
  header: false,
  img: KitchenImg,
  imgAlt: "Kitchen Image",
  mainCopy: "We specialise in Kitchens, Bathrooms, Doors & Maintenance. Our expert team make sure that every job is finished in a perfect manner, and our reviews speak for themselves.",
  link: {
    text: "Read More",
    url: "/services/bathroom-fitting"
  }
}

const ContactPage = () => {

  return (
    <Layout>
      <ContactRow content={contactRowContent} />
    </Layout>
  )
};

export default ContactPage;
