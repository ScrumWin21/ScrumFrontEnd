//PACKAGES
import { BrowserRouter, Routes, Route } from "react-router-dom";

//SCSS
import "./App.scss";

//SHARED
import Navbar from "./views/shared/navbar";

//VIEWS
import Home from "./views/home";
import MyAccount from "./views/myAccount";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/myAccount" element={<MyAccount />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
