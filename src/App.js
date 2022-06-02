import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { ProductPage } from "./views/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ProductPage" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
