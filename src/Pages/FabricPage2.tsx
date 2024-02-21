import { useLocation, useNavigate } from "react-router";
import "./ButtonPage.css";
import FashionButton from "../components/FashionButton";
import { useEffect, useState } from "react";

//the label for the fabrics
const buttonLabels = ["linen", "cotton"];

const ButtonPage2 = () => {
  const navigate = useNavigate();

  const location = useLocation();
  //to get the type from the previous page when navigated to. Otherwise, the type is null and they need to go to the start
  const type =
    location.state?.type || "Some info is lost, go back to the type page";
  const [header, setHeader] = useState(""); //to change header

  useEffect(() => { //to set the header
    if (type === "Some info is lost, go back to the type page") {
      //set headerto tell them to go to start
      setHeader(type);
    } else { //tell the type and ask for fabric
      setHeader("The type is " + type + ". What fabric is it?");
    }
  }, [type]);


  //button click function
  const handleClick = (label: string) => {
    console.log("Button clicked:", label);
    //send the type and 
    navigate(`/Page3`, { state: { type: type, fabric: label } });
  };

  //return button click
  const handleReturnClick = () => {//for button click
    navigate(`/`);
  };

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

export default ButtonPage2;
