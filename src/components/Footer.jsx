/* eslint-disable react/no-unescaped-entities */

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer relative z-0 md:py-0 py-8">
      <div className="md:py-16 py-8 md:px-0 px-8 w-full">
        <div className="flex md:flex-row flex-col justify-center items-center gap-20">
          <div className="flex flex-col md:order-1 order-2 items-center gap-6">
            <h3 className="subtitle">Contact Us</h3>
            <div className="flex gap-2 flex-col items-center text max-w-xs">
              <span>9 W 53rd St, New York, NY 10019, USA</span>
              <span>+1 212-344-1230</span>
              <span>+1 212-344-1230</span>
            </div>
          </div>
          <div className="flex flex-col md:order-2 order-1 items-center gap-6">
            <h3 className="title uppercase">Gerícht</h3>
            <div className="flex gap-2 flex-col items-center text max-w-xs">
              <span className="text-white text-center">
                "The best way to find yourself is to lose yourself in the
                service of others.”
              </span>
              <div className="flex items-center gap-2">
                <FaFacebookF color="#fff" cursor={"pointer"} />
                <FaTwitter color="#fff" cursor={"pointer"} />
                <FaInstagram color="#fff" cursor={"pointer"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col order-3 items-center gap-6">
            <h3 className="subtitle">Working Hours</h3>
            <div className="flex gap-2 flex-col items-center text max-w-xs">
              <span>Monday-Friday: 08:00 am -12:00 am</span>
              <span>Saturday-Sunday: 07:00am -11:00 pm</span>
            </div>
          </div>
        </div>
        <div className="pt-20 flex justify-center items-center">
          <span className="text">2021 Gerícht. All Rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
