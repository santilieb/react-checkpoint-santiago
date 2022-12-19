import React from "react";

const Card = (props: any) => {
  return <article className="card">{props.children}</article>;
};

export default Card;
