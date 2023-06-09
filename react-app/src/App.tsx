import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import LikeIcon from "./components/LikeIcon";

function App() {
  let items = ["New York", "San Francisco", "Los Angeles", "San Diego"];
  let btnSubmitEnabled = false;

  const [alertVisible, setAlertVisibility] = useState(false);
  const [selectedCityName, setSelectedCity] = useState("none");

  const handleSelectedItem = (item: string) => {
    console.log(`clicked on ${item}`);
    btnSubmitEnabled = true;
    setSelectedCity(item);
  };
  const handleButtonClickCancel = () => {
    console.log("clicked Cancel Button");
    setAlertVisibility(false);
    setSelectedCity("none");
  };
  const handleButtonClickSubmit = () => {
    console.log("clicked Submit Button");
    setAlertVisibility(true);
  };
  const handleLikeIconClick = (itemID: string, isLiked: boolean) => {
    console.log(itemID, "is-liked?>", isLiked);
  };

  return (
    <div>
      <h1>Some Application</h1>

      <Alert type="primary">
        Select your <strong>favorite</strong> city
      </Alert>

      {alertVisible && (
        <Alert type="success" onClose={() => setAlertVisibility(false)}>
          You selected <strong>{selectedCityName}</strong> as your favorite
          city!
        </Alert>
      )}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
      <div className="col-10">
        <Button
          type="secondary"
          enabled
          onButtonClick={() => {
            handleButtonClickCancel();
          }}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          onButtonClick={() => {
            handleButtonClickSubmit();
          }}
        >
          Submit
        </Button>
      </div>

      <div className="col-12">
        <LikeIcon
          ID={"abc-123"}
          size={25}
          isLiked={false}
          onClick={handleLikeIconClick}
        />{" "}
        Like
      </div>
    </div>
  );
}

export default App;
