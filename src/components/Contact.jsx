import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Contact() {
  const [message, setMessage] = useState("");
  const emailRegex = /\S+@\S+\.\S+/; // Regular expression for basic email validation

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "48fbefb2-5bdf-4d96-b1c3-2f81421212b1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Basic email validation
    if (!emailRegex.test(object.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Form submitted successfully!");
      event.target.reset(); // Clear the form inputs
    } else {
      setMessage("Failed to submit form. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] relative flex flex-col">
        <div className="flex-grow flex justify-center items-center ">
          <section className=" max-xl:h-full max-xl:w-[90vw] h-[80vh] w-[40vw]">
            <form onSubmit={onSubmit} className="px-4">
              <h2 className="heading-area flex  pt-16 text-5xl">Contact Me</h2>
              <p className="text-sm pt-1 tracking-tighter text-gray-400 ">
                Feel free me message me on any queries or for any collaboration.
              </p>
              <div className="flex justify-between items-center flex-wrap pt-8 max-xl:gap-5">
                <div>
                  <h4 className="text-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </h4>
                  <input
                    className=" flex px-3 py-1 rounded-md max-xl:w-[320px] w-[260px] text-sm h-9 shadow-sm transition-colors file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-white border border-gray-500 focus:border-cyan-400 bg-transparent"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <h4 className="text-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </h4>
                  <input
                    className=" flex px-3 py-1 rounded-md max-xl:w-[320px] w-[260px] text-sm h-9 shadow-sm transition-colors file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-white border border-gray-500 focus:border-cyan-400 bg-transparent"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="pt-10">
                <h4 className="text-lg peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </h4>
                <textarea
                  className="flex min-h-[60px] w-full rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-transparent text-white border border-gray-500 focus:border-cyan-500 h-32 resize-none align-top leading-tight"
                  placeholder="Type your message here" name="message"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center pt-8">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap border border-solid border-black text-white bg-cyan-500/80 text-sm h-9 px-4 w-full rounded-md tracking-tighter shadow-sm hover:bg-cyan-500/90"
                  type="submit"
                >
                  Let&apos;s Talk
                </button>
              </div>
              <p className="text-gray-200/80 py-7 tracking-tighter text-[14px] max-xl:text-[14px]">
                {message && <span>{message}</span>}
                <br />
                In case of <span className="text-amber-500/80">error</span> feel
                free to drop mail on <span className="text-cyan-500/90">priyanshukusinha@gmail.com</span>
              </p>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

