import { contact } from "../assets";

import { Info } from "../components";

const Contact = () => {
  return (
    <div className="relative z-0 md:py-0 py-8">
      <div
        style={{
          backgroundImage: "url('/src/assets/bg.png')",
          backgroundSize: "cover",
          opacity: "0.4",
        }}
        className="w-full min-h-screen  md:relative absolute inset-0 z-10"
      ></div>
      <div className="md:px-0 px-8 relative md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:absolute z-40 w-full">
        <div className="flex md:flex-row flex-col justify-center items-center gap-20">
          <div className="flex flex-col gap-8">
            <Info
              title={"Find Us"}
              subtitle={"Contact"}
              caption={
                "Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG"
              }
            />
            <div className="flex flex-col gap-4">
              <span className="subtitle text-golden">Opening Hours</span>
              <p className="text text-white">Mon - Fri: 10:00 am - 02:00 am</p>
              <p className="text text-white">Mon - Fri: 10:00 am - 02:00 am</p>
            </div>
            <div className="py-8">
              <button className="btn">visit us</button>
            </div>
          </div>
          <div className="h-auto md:w-[500px]">
            <img
              src={contact}
              alt="contact_img"
              className="md:w-[90%] w-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
