import { jus, spoon } from "../assets";

const Special = () => {
  return (
    <div className="min-h-screen py-8 w-full">
      <div className="flex flex-col main gap-16">
        <div className="flex flex-col gap-2 items-center">
          <span className="subtitle">Menu that fits you palatte</span>
          <img
            src={spoon}
            alt="spoon"
            className="object-contain h-[10px] w-10"
          />
          <h1 className="title">Today’s Special</h1>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between gap-8">
          <div className="flex flex-col gap-12">
            <h3 className="md:text-5xl text-4xl font-semibold font-cormorant md:leading-[58px] leading-10">
              Wine & Beer
            </h3>
            <div className="flex flex-col gap-10">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-8">
                    <h4 className="text-golden md:text-2xl text-xl font-bold font-cormorant md:leading-7 leading-6">
                      Chapel Hill Shiraz
                    </h4>
                    <div className="h-[1px] w-28 bg-cream"></div>
                    <h6 className="md:text-2xl text-xl font-bold font-cormorant md:leading-7 leading-6">
                      $56
                    </h6>
                  </div>
                  <p className="text">AU | Bottle</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={jus}
            alt="jus"
            className="object-contain w-auto md:h-[400px] h-[300px]"
          />
          <div className="flex flex-col gap-12">
            <h3 className="md:text-5xl text-4xl font-semibold font-cormorant md:leading-[58px] leading-10">
              Cocktails
            </h3>
            <div className="flex flex-col gap-10">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-8">
                    <h4 className="text-golden md:text-2xl text-xl font-bold font-cormorant md:leading-7 leading-6">
                      Aperol Spritz
                    </h4>
                    <div className="h-[1px] w-28 bg-cream"></div>
                    <h6 className="md:text-2xl text-xl font-bold font-cormorant md:leading-7 leading-6">
                      $20
                    </h6>
                  </div>
                  <p className="text">
                    Aperol | Villa Marchesi prosecco | soda | 30ml
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="btn">View More </button>
        </div>
      </div>
    </div>
  );
};

export default Special;
