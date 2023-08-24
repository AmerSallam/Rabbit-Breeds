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
    <>
      <h1>{heading}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 2 }}>
      
          <ul style={{ listStyle: "none", padding: 0 }}>
            {Object.keys(rabbitBreeds).map((breed) => (
              <li
                key={breed}
                className={selectedBreed === breed ? "btn-success" : "list-group-item"}
                onClick={() => handleBreedClick(breed)}
                style={{
                  color: "blue",
                  cursor: "pointer",
                  padding: "8px",
                  backgroundColor: selectedBreed === breed ? "#e0e0e0" : "white",
                  border: selectedBreed === breed ? "1px solid #ccc" : "1px solid transparent",
                  borderRadius: "4px",
                  marginBottom: "4px",
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
                className="rounded float-start active"
                alt={selectedBreed}
                style={{ maxWidth: "100%" }}
              />
              <p className="text-center mt-2">{selectedBreed}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ListGroup;
