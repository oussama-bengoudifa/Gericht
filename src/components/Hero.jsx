import { hero, loading } from "../assets";

import { Info } from "../components";

import { ImageLoader } from "react-image-and-background-image-fade";

const Hero = () => {
  return (
    <div className="md:absolute inset-0 md:min-h-screen md:pt-0 pt-10 w-full">
      <div className="flex justify-center items-center h-full main">
        <div className="md:px-0 px-8  flex md:flex-row flex-col items-center gap-10 justify-between w-full">
          <Info
            subtitle="Chase the new Flavour"
            title="The key to Fine dining"
            button="explore menu"
            caption="Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus "
          />
          <div className="h-auto md:w-[500px]">
            <ImageLoader src={hero} transitionTime="0.3s">
              {({ hasLoaded, shouldShowLoader, hasFailed, src }) => (
                <div className="AwesomeOLoader">
                  {shouldShowLoader && !hasFailed && (
                    <div className="flex justify-center items-center w-[500px]">
                      <img
                        src={loading}
                        alt="loading_img"
                        className="w-[10%] object-contain"
                      />
                    </div>
                  )}

                  {hasFailed && (
                    <div className="AwesomeoLoader__failed">
                      Awesome-o has failed :(
                    </div>
                  )}

                  {hasLoaded && (
                    <img
                      src={src}
                      alt="hero_img"
                      className="w-[90%] object-contain"
                    />
                  )}
                </div>
              )}
            </ImageLoader>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
