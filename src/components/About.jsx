import BurstPipe from "../assets/burstPipe.jpeg";
import Orville from "../assets/orville.jpg";

const About = () => {
  return (
    <section id="about" className="">
      <div className="h-3/4 flex justify-center items-center p-5 mx-5">
        <img
          src={Orville}
          width={400}
          height={400}
          alt=""
          className="border border-black"
        />
        <div className="mx-5 text-secondary">
          <h2 className="text-4xl font-bold underline">
            About Generations Backflow
          </h2>
          <p className="text-2xl pt-3 pr-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            eum consequatur modi sapiente nulla animi, sit deleniti nesciunt
            inventore rem, quasi voluptas qui. Quisquam cupiditate facilis
            placeat obcaecati alias animi.
          </p>
        </div>
        <img
          src={BurstPipe}
          width={300}
          height={300}
          alt=""
          className="border border-black"
        />
      </div>
    </section>
  );
};

export default About;
