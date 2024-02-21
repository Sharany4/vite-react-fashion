import FashionButton from "../components/FashionButton"; //the button component
import "./ButtonPage.css"; //the css file for the pages
import { useNavigate } from "react-router-dom";

//labels for each button
const buttonLabels = ["dress", "skirt", "pant", "shirt"];

const ButtonPage1 = () => {
  const navigate = useNavigate();

  //button function to navigate to next page and send the
  const handleClick = (label: string) => {
    console.log("Button clicked:", label);
    // Navigate to the next page with the label

    //navigate(`/Page2`);
    navigate(`/Page2`, { state: { type: label } });
  };

  return (
    <div className="page1">
      {" "}
      {/* map the list of labels to the button, and pass thelabel through*/}
      <h1> What type is it?</h1>
      {buttonLabels.map((label) => (
        <FashionButton key={label} onClick={() => handleClick(label)}>
          {label}
        </FashionButton>
      ))}
    </div>
  );
};

export default ButtonPage1;
