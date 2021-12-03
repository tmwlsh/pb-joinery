import * as React from "react";
import Layout from "../components/layout";
import Container from "../components/container";

const ServiceTemplate = (props) => {
  const data = props.pageContext;
  return (
    <Layout>
      <Container size="large">
        <h1>{data.title}</h1>
      </Container>
    </Layout>
  )
};

export default ServiceTemplate;
