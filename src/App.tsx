// import "bootstrap/dist/css/bootstrap.css";
// import RabbitImageComponent from "./components/RabbitImageComponent.tsx"; // Import the component
import React, { useState } from "react";
import ListGroup from "./components/ListGroup.tsx";
import Button from "./components/button.tsx";
// import Links from "./components/links.tsx";

function App() {
  // const rabbitBreeds = [
  //   "Dutch Rabbit",
  //   "Lop Rabbit",
  //   "Netherland Dwarf",
  //   "Flemish Giant",
  //   "Rex Rabbit",
  //   "Angora Rabbit",
  //   "Himalayan Rabbit",
  //   "Lionhead Rabbit",
  //   "Jersey Wooly",
  //   "Havana Rabbit",
  //   "American Fuzzy Lop",
  //   "New Zealand Rabbit",
  // ];

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

  const headingRabbitBreeds = "Rabbit Breeds";
  const [alertVisible, setAlertVisibility] = useState(false);
  const alret =
    "Rabbit breeds exhibit a captivating diversity, encompassing a range of sizes, colors, fur textures, and personalities. From the charming and compact Netherland Dwarf to the majestic Flemish Giant, each breed possesses unique characteristics that make them intriguing companions. The Lop Rabbit's endearing floppy ears, the luxurious coat of the Angora Rabbit, and the distinctive mane of the Lionhead Rabbit all contribute to the enchantment of these furry creatures. Whether you're drawn to the elegance of the Himalayan Rabbit or the playful nature of the American Fuzzy Lop, exploring the world of rabbit breeds reveals a tapestry of captivating traits and individuality. Whether as cherished pets, show animals, or simply admired for their beauty, rabbit breeds offer a delightful spectrum of choices for enthusiasts and animal lovers alike.";
  return (
    <div>
      <ListGroup rabbitBreeds={rabbitBreeds} heading={headingRabbitBreeds} />

      <div>
        {alertVisible && (
          <div className="alert alert-warning alert-dismissible ">
            {alret}

            <button
              type="button"
              className="btn-close"
              onClick={() => setAlertVisibility(false)}
              aria-label="Close"
            ></button>
          </div>
        )}
        <Button
          className="btn btn-primary"
          onClick={() => setAlertVisibility(true)}
        >
          An Overview of Rabbits
        </Button>
      </div>
    </div>
  );
}

export default App;
