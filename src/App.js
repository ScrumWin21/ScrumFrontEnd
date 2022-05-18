//PACKAGES
import { BrowserRouter, Routes, Route } from "react-router-dom";

//SCSS
import "./App.scss";

//SHARED
import Navbar from "./views/shared/navbar";

//PAGES
import Home from "./views/home";
import { ShopPage } from "./views/ShopPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={"< />"} />
          <Route path="/ShopPage" element={<ShopPage />} />
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
