import React from "react";
import star from "../../../star.svg";

type RankingProps = {
  total: number;
};
const Ranking = ({ total }: RankingProps) => {
  return (
    <div>
      {Array.from(Array(total).keys()).map((_, i) => (
        <img
          key={i}
          src={star}
          width="30px"
          height="30px"
          className="star-icon"
          alt="start"
        />
      ))}
    </div>
  );
};

export default Ranking;
