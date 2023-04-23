import { spoon } from "../assets";

const Newsletter = () => {
  return (
    <div className="relative z-0 md:py-0 py-8 md:px-0 px-8 w-full">
      <div className="md:py-16 py-8 flex justify-center items-center">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 items-center">
              <h4 className="subtitle">Newsletter</h4>
              <img
                src={spoon}
                alt="spoon"
                className="object-contain h-[10px] w-10"
              />
              <h1 className="title">Subscribe to Our Newsletter</h1>
            </div>
            <p className="text text-white">And never miss latest Updates!</p>
          </div>
          <div className="flex md:flex-row flex-col flex-1 gap-8 items-center">
            <input
              type="text"
              className="flex flex-1 md:w-40 w-2/3 h-11 border border-goldenLight text font-cormorant bg-transparent outline-none p-4"
              placeholder="Email Address"
            />
            <button className="btn md:w-40 w-2/3">subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
