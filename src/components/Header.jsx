import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="border-onyx border-b-2 w-full sticky top-0 py-3 bg-white">
      <div className="flex justify-around">
        <a href="/">
          <img src={Logo} alt="Generations Backflow" />
        </a>
        <div className="flex items-end">
          <div className="w-72 pb-1 ml-2 text-lg flex justify-between">
            <a href="/#about">about</a>
            <a href="/#services">services</a>
            <a href="/#contact">contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
