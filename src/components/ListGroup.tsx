import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              index === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => console.log(setSelectedItem(index))}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
