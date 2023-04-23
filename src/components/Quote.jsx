import { chef, signature } from "../assets";

import { Info } from "../components";

const Quote = () => {
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
        <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-20">
          <div className="h-auto w-[500px]">
            <img src={chef} alt="hero_img" className="w-[90%] object-contain" />
          </div>
          <div className="flex flex-col gap-16">
            <Info
              title={"What we believe in"}
              subtitle={"Chef’s Word"}
              caption={
                "auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc."
              }
              quote
            />
            <div className="flex flex-col gap-2">
              <h4 className="font-cormorant md:text-3xl text-2xl">Kevin Luo</h4>
              <span className="text">Chef & Founder</span>
            </div>

            <img
              src={signature}
              alt="signature"
              className="object-contain w-56 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
