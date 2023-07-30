import ServiceBlock from "./ServiceBlock";

const SERVICE_DATA = [
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-1.png",
    title: "web design"
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-2.png",
    title: "ecommerce"
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-3.png",
    title: "automation"
  }
];

export default function ServicesSection() {
  return (
    <div className="services-section">
      <h2>our services</h2>
      <div className="services-container">
        {SERVICE_DATA.map((data) => (
          <ServiceBlock block={data} />
        ))}
      </div>
    </div>
  );
}