import React from "react";
import CardStyles from "./styles/CardStyles";

const Card = props => {
  return (
    <CardStyles>
      <div className="Content">{props.title}</div>
    </CardStyles>
  );
};

export default Card;
