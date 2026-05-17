import React from "react";
import NoResultsImg from "../../assets/images/no-results.png";

const NoResults: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src={NoResultsImg}
        alt="no search results alert"
        className="w-40 object-cover"
      />
      <p className="text-xl font-medium text-primary-text/80 text-center">
        No Results Match Your Search
      </p>
    </div>
  );
};

export default NoResults;
