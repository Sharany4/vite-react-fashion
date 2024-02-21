
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TypePage from "./Pages/TypePage1"; //import all the used pages
import FabricPage from "./Pages/FabricPage2";
import ClosurePage from "./Pages/ClosurePage3";
import FindPage from "./Pages/FindPage4";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TypePage />} /> {/*home page, to get the type of item*/}
          {/*<Route path="page1" element={<TypePage />} /> */}
          <Route
            path="page2"
            Component={(props) => <FabricPage {...props}/>} 
          />
          <Route
            path="page3"
            Component={(props) => <ClosurePage {...props}/>} 
          />
          <Route
            path="page4"
            Component={(props) => <FindPage {...props}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
