import { useRef, useState } from "react";

import { Info } from "../components";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { pic1, pic2, pic3, pic4 } from "../assets";

const Gallery = () => {
  const scrollable = useRef(null);
  const [length, setLength] = useState(305);

  const scrollIt = (toRight) => {
    scrollable.current.scrollBy({
      left: length * (toRight ? 1 : -1),
      behavior: "smooth",
    });

    console.log({ scroll: scrollable.current.x });
    setLength((prevState) => prevState * 2);
  };

  return (
    <div className="min-h-screen justify-center flex items-center w-full py-8">
      <div className="h-full md:flex-row flex-col gap-20 flex justify-center items-center w-full">
        <div className="flex flex-1 px-16">
          <Info
            title={"Photo Gallery"}
            subtitle={"Instagram"}
            caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu."
            button={"view more"}
          />
        </div>
        <div className="relative z-0 md:max-w-[50%] max-w-[100%] flex items-center gap-8">
          <div className="absolute z-20 h-full left-4 top-0 translate-y-1/2">
            <div
              onClick={() => scrollIt(false)}
              className="bg-black flex justify-center p-2 group cursor-pointer rounded"
            >
              <AiOutlineArrowLeft
                fontSize={20}
                className="text-golden group-hover:text-white duration-300"
              />
            </div>
          </div>
          <div className="absolute z-20 h-full right-4 top-0 translate-y-1/2">
            <div
              onClick={() => scrollIt(true)}
              className="bg-black flex justify-center p-2 group cursor-pointer rounded"
            >
              <AiOutlineArrowRight
                fontSize={20}
                className="text-golden group-hover:text-white duration-300"
              />
            </div>
          </div>
          <div ref={scrollable} className="flex w-max overflow-x-scroll gap-8">
            <div className="min-w-[301px] group h-[447px] flex justify-center items-center relative">
              <img
                src={pic1}
                alt="pic"
                className="object-cover w-full h-full duration-300"
              />
              <div className="absolute cursor-pointer bg-[#000000a6] inset-0 flex justify-center items-center group-hover:opacity-100 opacity-0 duration-300 z-10">
                <BsInstagram fontSize={40} />
              </div>
            </div>
            <div className="min-w-[301px] group h-[447px] flex justify-center items-center relative">
              <img
                src={pic2}
                alt="pic"
                className="object-cover w-full h-full duration-300"
              />
              <div className="absolute cursor-pointer bg-[#000000a6] inset-0 flex justify-center items-center group-hover:opacity-100 opacity-0 duration-300 z-10">
                <BsInstagram fontSize={40} />
              </div>
            </div>
            <div className="min-w-[301px] group h-[447px] flex justify-center items-center relative">
              <img
                src={pic3}
                alt="pic"
                className="object-cover w-full h-full duration-300"
              />
              <div className="absolute cursor-pointer bg-[#000000a6] inset-0 flex justify-center items-center group-hover:opacity-100 opacity-0 duration-300 z-10">
                <BsInstagram fontSize={40} />
              </div>
            </div>
            <div className="min-w-[301px] group h-[447px] flex justify-center items-center relative">
              <img
                src={pic4}
                alt="pic"
                className="object-cover w-full h-full duration-300"
              />
              <div className="absolute cursor-pointer bg-[#000000a6] inset-0 flex justify-center items-center group-hover:opacity-100 opacity-0 duration-300 z-10">
                <BsInstagram fontSize={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
