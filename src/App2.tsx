// import Links from "./components/links.tsx";
import RabbitImageComponent from "./components/RabbitImageComponent.tsx";
// import imageFigurePosition from "./components/css/imageFigurePosition.css"

function App2() {
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
  return (
    <div>
    <RabbitImageComponent breedNames={rabbitBreeds} />
  </div>
  );
}

export default App2;
