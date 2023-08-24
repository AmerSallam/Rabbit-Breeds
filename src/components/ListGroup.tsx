import React, { useState } from "react";

interface Props {
  rabbitBreeds: { [key: string]: string };
  heading: string;
}

function ListGroup({ rabbitBreeds, heading }: Props) {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  const handleBreedClick = (breed: string) => {
    setSelectedBreed(breed);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 2 }}>
        <p>{heading}</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.keys(rabbitBreeds).map((breed) => (
            <li
              key={breed}
              className={selectedBreed === breed ? "list-group-item active" : "list-group-item"}
              onClick={() => handleBreedClick(breed)}
              style={{
                color: "blue",
                cursor: "pointer",
                padding: "8px",
                backgroundColor: selectedBreed === breed ? "#f0f0f0" : "white",
              }}
            >
              {breed}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 3 }}>
        {selectedBreed && (
          <div className="mx-auto p-2">
            <img
              src={rabbitBreeds[selectedBreed]}
              className="rounded float-start"
              alt={selectedBreed}
              style={{ maxWidth: "100%" }}
            />
            <p className="text-center mt-2">{selectedBreed}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListGroup;
