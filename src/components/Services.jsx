export const services = [
  {
    id: 1,
    serviceItem: "service 1",
  },
  {
    id: 2,
    serviceItem: "service 2",
  },
  {
    id: 3,
    serviceItem: "service 3",
  },
  {
    id: 4,
    serviceItem: "service 4",
  },
  {
    id: 5,
    serviceItem: "service 5",
  },
  {
    id: 6,
    serviceItem: "service 6",
  },
  {
    id: 7,
    serviceItem: "service 7",
  },
  {
    id: 8,
    serviceItem: "service 8",
  },
];

const Services = () => {
  return (
    <section id="services" className="text-secondary flex justify-center">
      <div className="text-center">
        <h2 className="text-5xl py-3 underline">Services</h2>
        {services.map((item) => (
          <div key={item.id}>
            <p className="text-2xl">{item.serviceItem}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
