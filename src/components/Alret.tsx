import {ReactNode} from 'react'

interface Props {
  children: string;
  // text= string;
  // children = ReactNode;
}

const Alret = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Alret;
