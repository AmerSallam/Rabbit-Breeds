// import "bootstrap/dist/css/bootstrap.css";
// import RabbitImageComponent from "./components/RabbitImageComponent.tsx"; // Import the component

import ListGroup from "./components/ListGroup.tsx";
import Rabbit from "./components/button.tsx";
// import Links from "./components/links.tsx";

function App() {
  const rabbitBreeds = [
    "Dutch Rabbit",
    "Lop Rabbit",
    "Netherland Dwarf",
    "Flemish Giant",
    "Rex Rabbit",
    "Angora Rabbit",
    "Himalayan Rabbit",
    "Lionhead Rabbit",
    "Jersey Wooly",
    "Havana Rabbit",
    "American Fuzzy Lop",
    "New Zealand Rabbit",
  ];

  const headingRabbitBreeds = "Rabbit Breeds";
  return (
    <>
      <div>
        <ListGroup items={rabbitBreeds} heading={headingRabbitBreeds} />
      </div>

      <div>
        <Rabbit />
      </div>
     
    </>
  );
}

export default App;
