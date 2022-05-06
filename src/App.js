import "./App.scss";
import { HomeShowcaseOne } from "./components/home/homeShowcaseOne";
import { HomeShowcaseTwo } from "./components/home/homeShowcaseTwo";
import NavbarOne from "./components/shared/NavbarOne";
import { NavbarThree } from "./components/shared/NavbarThree";

function App() {
  return (
    <>
      <NavbarOne />
      <NavbarThree />
      <HomeShowcaseOne />
      <HomeShowcaseTwo />
    </>
  );
}

export default App;
