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
      <p
        //type="button"
        className=" active "
        //data-bs-dismiss="alert"
        onClick={onClose}
      ></p>
    </div>
  );
};

export default Button;
