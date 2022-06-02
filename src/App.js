import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Products } from "./components/shopDetails/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
