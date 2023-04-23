import { useState, useRef, useEffect } from "react";

import { meal } from "../assets";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Video = () => {
  const videoRef = useRef();
  const [lunched, setLunched] = useState(false);

  const toggle = () => setLunched((prevState) => !prevState);

  const handlePlayVideo = () => {
    videoRef.current.play();
  };
  const handlePauseVideo = () => {
    videoRef.current.pause();
  };

  useEffect(() => {
    if (lunched) {
      handlePlayVideo();
    } else {
      handlePauseVideo();
    }
  }, [lunched]);

  return (
    <div className="md:h-screen h-[60vh] relative z-0">
      <video
        ref={videoRef}
        src={meal}
        type="video/mp4"
        controls={false}
        muted
        loop
        className="h-full w-full object-cover"
      />
      <div className="absolute bg-[#000000a6] inset-0 flex justify-center items-center">
        <div
          onClick={toggle}
          className="flex cursor-pointer justify-center items-center rounded-full w-28 h-28 border border-golden"
        >
          {lunched ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
