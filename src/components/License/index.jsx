import content from "./data";
const License = () => {
  return (
    <div className="">
      <h2>Licenses</h2>
      <>
        {content.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              width="500px"
              height="500px"
              alt=""
              className=""
            />
          </div>
        ))}
      </>
    </div>
  );
};

export default License;
