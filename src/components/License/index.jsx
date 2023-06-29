import content from "./data";
const License = () => {
  return (
    <div className="m-5 p-5">
      <h2>Licenses</h2>
      <div className="grid gap-5 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {content.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              width="500px"
              height="100%"
              alt=""
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default License;
