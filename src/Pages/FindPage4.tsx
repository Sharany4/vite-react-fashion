import { useEffect, useState } from "react";
import FashionItem from "../components/FashionItem";
import { useLocation, useNavigate } from "react-router";
import "./ButtonPage.css";

//here i need to make bjrcts then try to fidn the objects from the props sent in

const itemsList = [
  //this is the list for the items. next, need to make a thing
  // to find the fcorrect object from tehe props
  {
    src: (
      <FashionItem
        type={"skirt"}
        children={""}
        closure={false}
        fabric={"cotton"}
        date={"2020"}
        pattern={"black circle skirt with a rainbow elastic band"}
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"dress"}
        children={""}
        closure={true}
        fabric={"linen"}
        date={"2021"}
        pattern={
          "tropical leaves on a collared dress with short sleeves and a button closure in front"
        }
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"pant"}
        children={""}
        closure={false}
        fabric={"cotton"}
        date={"2017"}
        pattern={"aztec black and which palazo pant with elastic waitband"}
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"shirt"}
        children={""}
        closure={true}
        fabric={"cotton"}
        date={"2019"}
        pattern={
          "white anchors on a navy blue collared shirt with no sleeves and button closure"
        }
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"shirt"}
        children={""}
        closure={true}
        fabric={"cotton"}
        date={"2019"}
        pattern={
          "pink and white stripes on a collared shipr with no sleeves and button closure"
        }
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"shirt"}
        children={""}
        closure={true}
        fabric={"cotton"}
        date={"2018"}
        pattern={
          "blue denim with white daisies skirt with elastic waistband and zipper"
        }
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"pant"}
        children={""}
        closure={false}
        fabric={"cotton"}
        date={"2019"}
        pattern={"black shorts with a aztec elastic band"}
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"skirt"}
        children={""}
        closure={false}
        fabric={"cotton"}
        date={"2019"}
        pattern={"pink watermelon pattern skirt with an elastic band"}
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"dress"}
        children={""}
        closure={true}
        fabric={"cotton"}
        date={"2022"}
        pattern={
          "bee pattern on yellow fabric on a knee length shoulderless dress with zipper"
        }
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"dress"}
        children={""}
        closure={true}
        fabric={"cotton"}
        date={"2022"}
        pattern={
          "white with spotted colours om a knee length shoulderless dress with zipper"
        }
      ></FashionItem>
    ),
  },
  {
    src: (
      <FashionItem
        type={"dress"}
        children={""}
        closure={true}
        fabric={"cotton"}
        date={"2024"}
        pattern={
          "blue gengim with cars with collar and sleeves in black on a knee length dress with zipper"
        }
      ></FashionItem>
    ),
  },
];

const FindPage4 = () => {
  const navigate = useNavigate();

  const [searchResult, setSearchResult] = useState<{ src: JSX.Element }[]>([]);

  const searchItems = (
    typeCriteria: string,
    fabricCriteria: string,
    closureCriteria: boolean
  ) => {
    const result = itemsList.filter(
      (item) =>
        item.src.props.type.includes(typeCriteria) &&
        item.src.props.fabric.includes(fabricCriteria) &&
        item.src.props.closure === closureCriteria
    );
    setSearchResult(result);
  };

  const location = useLocation();
  const type =
    location.state?.type || "Some info is lost, go back to the type page";
  const fabric =
    location.state?.fabric || "Some info is lost, go back to the type page";
  const closure = location.state?.closure || false;

  const [header, setHeader] = useState("");
  //seeing if varaibles are valid
  useEffect(() => {
    if (
      type === "Some info is lost, go back to the type page" ||
      fabric === "Some info is lost, go back to the type page"
    ) {
      //setting the heder for both scenraios
      setHeader(type);
    } else {
      setHeader("Found results");
    }
  }, [type]);

  useEffect(() => {
    // Call searchItems with predefined criteria after component is mounted
    console.log("closure state:", closure);
    searchItems(type, fabric, closure);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  //return button click
  const handleReturnClick = () => {
    //for button click
    navigate(`/`);
  };

  return (
    <div className="page1">
      <h1 className="h1">
        {header}{" "}
        <button
          className="return"
          key={"return to start"}
          onClick={() => handleReturnClick()}
        >
          start
        </button>
      </h1>

      {/* Print search result in a single line */}
      <div style={{ whiteSpace: "nowrap", overflowX: "auto" }}>
        {searchResult.map((item, index) => (
          <span key={index}>
            <div className="text">
              {index + 1} {". "}
              {item.src.props.pattern}
            </div>
          </span>
        ))}
      </div>
      {searchResult.length === 0 && (
        <div className="text">
          {"There are no items that match that description."}
        </div>
      )}
      {/* get the decription, search for it in array*/}
    </div>
  );
};

export default FindPage4;
