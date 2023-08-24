import React, { useState } from "react";

function Links() {
  // Array of rabbit breeds

  const rabbitBreeds = {
    "Dutch Rabbit":
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSc5YQ4z9dkzPu09u6Y4hj4FulNwhzrUN41y4Woo5NSwdrLbD2ElQgVsRaRKjW0YOyPK_PlzN5ace9F1Fg",
    "Lop Rabbit":
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQZM-Y6hXqBhhKNPSWvL52PZRU0PAhUQt77eP-b70YUU-tWcQ8d0S2nJsAeUfCMkFzrJ2wr1LYweOMxBhQ",
    "Netherland Dwarf":
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQc-aRLs5zDVzQiC5vDYMcQTfPibdLa4LlfrNM2pV0zhjXsAdEjj0OnBP87rWuexg9_xjvtccXJIFUoHTs",
    "Flemish Giant":
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS6GRmrfLCO3-QtN0DjZGVvzo5LpR5VUwjBRpHJNHAvuGgpJs78Xslp8Q76MKmokEq3ayg7QGQJgtEeXgg",
    "Rex Rabbit":
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTSomyvrZeHFTiPwjf0MFNzTKEj2o5uiClLz54eLZk6CO6gIUsEGLV-tpIBSEJbEpKdt9_ngFczf-X64gE",
    "Angora Rabbit":
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Fluffy_white_bunny_rabbit.jpg",
    "Himalayan Rabbit":
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSZv11TiI-MHfZqfgs72lt55rwsYGt66cgDgTUES4rsxChF-D17j4QWZGfFXtryaK5CL7v4EkUN9UQVs_k",
    "Lionhead Rabbit":
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2xpb25oZWFkLXJhYmJpdC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==",
    "Jersey Wooly": "https://www.petplan.co.uk/images/breeds/jersey-wooly.png",
    "Havana Rabbit":
      "https://upload.wikimedia.org/wikipedia/commons/9/99/OtisHavana.jpg",
    "American Fuzzy Lop":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Conejillo_de_indias.jpg/250px-Conejillo_de_indias.jpg",
    // Add more breed-image mappings here
  };

  const [selectedBreed, setSelectedBreed] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 2 }}>
        <ul>
          {Object.keys(rabbitBreeds).map((breed) => (
            <li
              key={breed}
              className={
                breed === selectedBreed
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => setSelectedBreed(breed)}
              style={{ color: "blue" }}
            >
              {breed}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 2 }}>
        {selectedBreed && (
          <img
            src={rabbitBreeds[selectedBreed]}
            alt={selectedBreed}
            style={{ maxWidth: "100%" }}
          />
        )}
      </div>
    </div>
  );
}

export default Links;
