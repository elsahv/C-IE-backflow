const ContactForm = () => {
  return (
    <div className="pl-3">
      <h2 className="text-4xl">Contact Form</h2>
      <form>
        <h4 className="pl-1 pt-3 pb-1">Name</h4>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="2xl:w-[500px] w-[100%] py-2 pl-3"
        />
        <h4 className="pl-1 pt-3 pb-1">Email</h4>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="2xl:w-[500px] w-[100%] py-2  pl-3"
        />
        <h4 className="pl-1 pt-3 pb-1">Message</h4>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Message"
          className="2xl:w-[500px] w-[100%] py-2  pl-3"
        />
      </form>
      <button className="mt-5 bg-primary text-white p-2"> send message</button>
    </div>
  );
};

export default ContactForm;
