import BurstPipe from "../assets/burstPipe.jpeg";

const Hero = () => {
  return (
    <section className="">
      <div className="h-3/4 flex justify-center items-center p-5 mx-5">
        <img
          src={BurstPipe}
          width={400}
          height={400}
          alt=""
          className="border border-black"
        />
        <div className="mx-5">
          <h2 className="text-4xl font-bold">Have a burst pipe?</h2>
          <p className="text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            eum consequatur modi sapiente nulla animi, sit deleniti nesciunt
            inventore rem, quasi voluptas qui. Quisquam cupiditate facilis
            placeat obcaecati alias animi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
