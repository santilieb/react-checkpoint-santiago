import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <li className="card">{children}</li>;
};

export default Card;
