import React from "react";

interface Props {
  children: string;
  // color?: 'primary'|'secondary' | 'danger';
  onClick: () => void;
  onClose: () => void;
}

const Button = ({ children, onClick , onClose}: Props) => {
  // return <button className={"btn btn-" + color} onClick={onClick}>{children}</button>;
  return (
    <div className="alert alert-warning alert-dismissible" onClick={onClick}>
      {children}
      <button
        type="button"
        className=" btn btn-primary"
        data-bs-dismiss="alert"
        onClick={onClose}
      >An Overview of Rabbits (click here..)</button>
    </div>
  );
};

export default Button;
