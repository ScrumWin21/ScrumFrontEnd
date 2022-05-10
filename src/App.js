import "./App.scss";
import { HomeShowcaseOne } from "./components/index/homeShowcaseOne";
import NavbarOne from "./components/shared/NavbarOne";
import { NavbarThree } from "./components/shared/NavbarThree";

function App() {
  return (
    <>
      <NavbarOne />
      <NavbarThree />
      <HomeShowcaseOne />
    </>
  );
}

export default App;
