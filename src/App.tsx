// import "bootstrap/dist/css/bootstrap.css";

const books = [
  "The Nightingale by Kristin Hannah",
  "One Hundred Years of Solitude by Gabriel García Márquez",
  "The Kite Runner by Khaled Hosseini",
  "The Handmaid's Tale by Margaret Atwood",
  "A Song of Ice and Fire series (starting with A Game of Thrones) by George R.R. Martin",
];

const headingReadingList = "Reading list";

const summerTravelDestinations = [
  "Santorini, Greece",
  "Maui, Hawaii, USA",
  "Barcelona, Spain",
  "Bali, Indonesia",
  "Queenstown, New Zealand",
];

const headingPlaces = "Recommended places to visit";
import ListGroup from "./ListGroup.tsx";
import Rabbit from "./button.tsx";
import Links from "./links.tsx";

function App() {
  return (
    <>
      <div>
        <ListGroup items={books} heading={headingReadingList} />
      </div>
      <div>
        <ListGroup items={summerTravelDestinations} heading={headingPlaces} />
      </div>
      <div>
        <Rabbit />
      </div>
      <div>
        <Links />
      </div>
    </>
  );
}

export default App;
