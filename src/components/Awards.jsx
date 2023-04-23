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

          <div className="relative z-0">
            <div className="absolute right-0 bottom-0">
              <svg
                width="140"
                className="h-auto md:w-[300px] w-auto translate-x-1/3 opacity-80"
                viewBox="0 0 391 415"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M228.756 415C181.766 415 140.97 405.82 106.368 387.461C72.1938 369.102 45.9221 344.125 27.5533 312.531C9.18442 280.509 0 244.645 0 204.938C0 165.658 10.2524 130.435 30.7571 99.267C51.6891 68.0993 79.8831 43.7629 115.339 26.2577C151.223 8.75257 191.164 0 235.164 0C255.241 0 275.105 1.9213 294.756 5.76389C314.406 9.17953 330.212 13.876 342.173 19.8534C345.591 21.9882 347.726 23.9095 348.581 25.6173C349.435 27.3251 350.076 30.3138 350.503 34.5833L356.27 113.997C356.27 115.705 355.202 116.772 353.066 117.199C350.93 117.626 349.435 117.199 348.581 115.918C335.765 83.8966 317.396 59.1332 293.474 41.6281C269.552 24.1229 241.358 15.3704 208.892 15.3704C163.611 15.3704 128.368 30.3138 103.165 60.2006C77.9608 90.0874 65.3589 130.435 65.3589 181.242C65.3589 224.792 73.2618 263.431 89.0675 297.16C104.873 330.463 126.66 356.294 154.426 374.653C182.193 393.012 213.591 402.191 248.62 402.191C265.28 402.191 278.096 400.057 287.067 395.787C296.037 391.517 302.445 384.046 306.29 373.372C310.134 362.698 312.057 347.114 312.057 326.62C312.057 305.273 310.134 290.116 306.29 281.15C302.872 271.757 296.251 265.566 286.426 262.577C276.601 259.589 260.368 258.094 237.727 258.094C235.591 258.094 234.523 256.386 234.523 252.971C234.523 249.555 235.377 247.847 237.086 247.847C270.406 249.982 298.6 251.049 321.668 251.049C343.027 251.049 365.241 250.409 388.309 249.128C390.017 249.128 390.872 250.622 390.872 253.611C391.299 256.6 390.658 258.094 388.949 258.094C382.542 257.667 378.056 258.735 375.493 261.296C372.93 263.431 371.221 267.701 370.367 274.105C369.513 280.509 369.086 291.397 369.086 306.767V333.025C369.086 352.238 369.726 365.687 371.008 373.372C372.289 381.057 372.93 386.394 372.93 389.383C372.93 391.944 372.503 393.652 371.649 394.506C371.221 395.36 369.726 396.214 367.163 397.068C314.193 409.023 268.057 415 228.756 415Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <img
              src={award}
              alt="award_img"
              className="w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;