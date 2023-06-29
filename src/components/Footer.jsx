const today = new Date();

const FooterSection = () => {
  return (
    <footer className="bg-test1 w-full bg-lavender p-5 text-center relative bottom-0">
      <div className="flex justify-between">
        <span>Generations-Backflow</span>
        <span className=" text-black">
          Copyright &copy; {today.getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
