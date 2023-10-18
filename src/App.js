import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Err404page from "./Err404page";
import RootLayout from "./RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./css/App.css";

const rouTer = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />}></Route>
      <Route path="About" element={<About />}></Route>
      <Route path="Contact" element={<Contact />}></Route>
      <Route path="*" element={<Err404page />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={rouTer} />
      <div>&nbsp;</div>
      <div>&nbsp; </div>
      <div>&nbsp; </div>
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          right: "10px",
          color: "gray",
          float: "right",
          fontSize: "0.7em",
          background: "yellow",
        }}
      ></div>
    </>
  );
}

export default App;
