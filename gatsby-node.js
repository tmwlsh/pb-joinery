const path = require('path')
// const { urlMap } = require('./src/utils/urls')

const services = [
  {
    title: "Bathroom Fitting",
    url: "bathroom-fitting"
  },
  {
    title: "Kitchen Fitting",
    url: "kitchen-fitting"
  },
  {
    title: "Door Specialists",
    url: "door-specialists"
  }
];

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  services.forEach((service) => {
    console.log(`Creating ${service.title} page at ${service.url}.`);
    createPage({
      path: `services/${service.url}`,
      component: path.resolve(__dirname, 'src/templates/service.js'),
      context: { ...service },
    });
  });
}
