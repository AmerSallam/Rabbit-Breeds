import React, { useState } from "react";

interface Props {
  rabbitBreeds:object;
}
function Links({rabbitBreeds}:Props) {
  // Array of rabbit breeds

  

  const [selectedBreed, setSelectedBreed] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 2 }}>
        <ul>
          {Object.keys(rabbitBreeds).map((breed) => (
            <li
              key={breed}
              className={selectedBreed === breed ? " btn-success" : "list-group-item"}
              onClick={() => setSelectedBreed(breed)}
              // onClick={() => console.log(breed)}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {breed}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 3 }}>
        {selectedBreed && (
          <div className="mx-auto p-2" >
            <img
              src={rabbitBreeds[selectedBreed]}
              className="rounded float-start"
              alt={selectedBreed}
              style={{ maxWidth: "100%" }}
            />
            <p style={{ textAlign: "center", marginTop: "8px" }}>
              {selectedBreed}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Links;
