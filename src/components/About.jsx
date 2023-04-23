import { G, knife } from "../assets";

import { Info } from "../components";

const About = () => {
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
      <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-20">
        <div className="flex justify-center items-center">
          <img src={G} alt="logo" className="object-container w-80 h-auto" />
        </div>
      </div>
      <div className="md:px-0 px-8  relative md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:absolute z-40 w-full">
        <div className="flex md:flex-row flex-col justify-between items-center gap-10 main">
          <Info
            title="About Us"
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et."
            button="Know More"
            right
          />
          <img
            src={knife}
            alt="knife"
            className="object-contain md:w-20 w-10 md:h-[600px] h-auto"
          />
          <Info
            title="Our History"
            caption="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."
            button="Know More"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
