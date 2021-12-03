import * as React from "react";
import Layout from "../components/layout";
import ImageContent from "../components/imageContent";
import CtaRow from "../components/ctaRow";

const ServicePage = () => {

  const service1Content = {
    mainHeader: "Bathroom Fitting",
    header: false,
    layout: "reversed",
    mainCopy: "We specialise in Kitchens, Bathrooms, Doors & Maintenance. Our expert team make sure that every job is finished in a perfect manner, and our reviews speak for themselves.",
    link: {
      text: "Read More",
      url: "/"
    }
  }

  const service2Content = {
    mainHeader: "Kitchen Fitting",
    header: false,
    layout: "regular",
    mainCopy: "We specialise in Kitchens, Bathrooms, Doors & Maintenance. Our expert team make sure that every job is finished in a perfect manner, and our reviews speak for themselves.",
    link: {
      text: "Read More",
      url: "/"
    }
  }

  const service3Content = {
    mainHeader: "Door Specialists",
    header: false,
    layout: "reversed",
    mainCopy: "We specialise in Kitchens, Bathrooms, Doors & Maintenance. Our expert team make sure that every job is finished in a perfect manner, and our reviews speak for themselves.",
    link: {
      text: "Read More",
      url: "/"
    }
  }

  const ctaRowContent = {
    header: "Want a free quote?",
    text: "Get in touch today to recieve a free, no obligation quote & to discuss your project in depth with one of our industry professionals.",
    link: {
      text: "Get in touch",
      url: "/"
    }
  }

  return (
    <Layout>
      <ImageContent content={service1Content} />
      <ImageContent content={service2Content} />
      <ImageContent content={service3Content} />
      <CtaRow content={ctaRowContent} />
    </Layout>
  )
};

export default ServicePage;
