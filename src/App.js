//PACKAGES
import { BrowserRouter, Routes, Route } from "react-router-dom";

//SCSS
import "./App.scss";

//SHARED
import Navbar from "./views/shared/navbar";

//PAGES
import Home from "./views/home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={"< />"} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
