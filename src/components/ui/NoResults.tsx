import React from "react";
import NoResultsImg from "../../assets/images/no-results.png";

interface IProps {
  message?: string;
}

const NoResults: React.FC<IProps> = ({ message = "No Products Found" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src={NoResultsImg}
        alt="no search results alert"
        className="w-40 object-cover"
      />
      <p className="text-xl font-medium text-primary-text/80 text-center">
        {message}
      </p>
    </div>
  );
};

export default React.memo(NoResults);
