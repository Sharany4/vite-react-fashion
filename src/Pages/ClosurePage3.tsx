import { useLocation, useNavigate } from "react-router";
import "./ButtonPage.css";
import FashionButton from "../components/FashionButton";
import { useEffect, useState } from "react";

// labels for closure
const buttonLabels = ["Has closure", "No closure"];

const ClosurePage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const type =
    location.state?.type || "Some info is lost, go back to the type page";
  const fabric =
    location.state?.fabric || "Some info is lost, go back to the type page";

  const [header, setHeader] = useState(""); //change header

  useEffect(() => {
    if (
      type === "Some info is lost, go back to the type page" ||
      fabric === "Some info is lost, go back to the type page"
    ) {
      //if either type of fabric is empty, go to start.
      setHeader(type);
    } else {
      setHeader(
        "The type is " +
          type +
          ". The fabric is " +
          fabric +
          ". Does it have a closure?"
      );
    }
  }, [type]);

  const handleClick = (label: string) => {
    console.log("Button clicked:", label);
    // Navigate to the next page with the type, fabric and closure
    if (label == "Has closure") {
      navigate(`/Page4`, {
        state: { type: type, fabric: fabric, closure: true },
      });
    } else {
      navigate(`/Page4`, {
        state: { type: type, fabric: fabric, closure: false },
      });
    }
  };

  //for return click
  const handleReturnClick =() => {
    navigate(`/`);
  }

  return (
    <div className="page1">
      {" "}
      {/* map the list of labels to the button, and pass thelabel through*/}
      <h1 className="h1"> {header} <button className = "return" key={"return to start"} onClick={() => handleReturnClick()}>start</button></h1>
      {buttonLabels.map((label) => (
        <FashionButton key={label} onClick={() => handleClick(label)}>
          {label}
        </FashionButton>
      ))}
    </div>
  );
};

export default ClosurePage;
