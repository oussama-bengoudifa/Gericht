/* eslint-disable react/prop-types */
import { spoon, quote as quoteImg } from "../assets";

const Info = ({ title, caption, subtitle, button, right, quote }) => {
  const styles = right ? "text-right items-end" : "text-left items-start";
  return (
    <div className={`${styles} flex flex-col  gap-8`}>
      <div className="flex flex-col  gap-2">
        {subtitle && (
          <div className="flex flex-col  gap-2">
            <span className="subtitle">{subtitle}</span>
            <img
              src={spoon}
              alt="spoon"
              className="object-contain h-[10px] w-10"
            />
          </div>
        )}
      </div>
      {subtitle ? (
        <p className="title max-w-xl text-left">{title}</p>
      ) : (
        <div className={`${styles} flex flex-col gap-2`}>
          <p className="title max-w-xl">{title}</p>
          <img
            src={spoon}
            alt="spoon"
            className="object-contain h-[10px] w-10"
          />
        </div>
      )}
      <div className={`text max-w-xl ${styles}`}>
        <p>
          {quote && <img src={quoteImg} className="object-contain pb-4" />}
          {caption}
        </p>
      </div>

      {button && <button className="btn">{button}</button>}
    </div>
  );
};

export default Info;
