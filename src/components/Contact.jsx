import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
const contact = () => {
  return (
    <div id="contact" className="py-5 text-primary">
      <div className="grid 2xl:grid-cols-2 grid-cols-1">
        {/* //todo: list */}
        <div className="text-center pt-5">
          <h2 className="text-5xl pb-5">Contact Info</h2>
          <div className="text-2xl">
            <div className="flex justify-center items-center p-3">
              <AiOutlinePhone className="mx-2" />
              (951) 315-9828
            </div>
            <div className="flex justify-center items-center p-3">
              <MdOutlineEmail className="mx-2" />
              iebackflow@gmail.com
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default contact;
