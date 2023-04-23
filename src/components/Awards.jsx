import { award, step1, step2, step3 } from "../assets";

import { Info } from "../components";

const Awards = () => {
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
      <div className="relative main md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:absolute z-40 w-full">
        <div className="flex md:flex-row flex-col gap-20 items-center justify-center">
          <div className="flex flex-col gap-16">
            <Info subtitle="Awards & recognition" title="Our Laurels" />
            <div className="flex flex-col gap-8">
              <div className="flex gap-8 items-center">
                <img
                  src={step1}
                  alt="step"
                  className="object-contain w-16 h-16"
                />
                <div className="flex flex-col gap-2">
                  <h4 className="subtitle text-golden">Bib Gourmond</h4>
                  <p className="text max-w-sm">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <img
                  src={step2}
                  alt="step"
                  className="object-contain w-16 h-16"
                />
                <div className="flex flex-col gap-2">
                  <h4 className="subtitle text-golden">Rising Star</h4>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <img
                  src={step3}
                  alt="step"
                  className="object-contain w-16 h-16"
                />
                <div className="flex flex-col gap-2">
                  <h4 className="subtitle text-golden">Outstanding Chef</h4>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-auto md:w-[500px]">
            <img
              src={award}
              alt="award_img"
              className="md:w-[90%] w-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
