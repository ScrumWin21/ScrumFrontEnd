import "./App.scss";
import { HomeShowcaseTwo } from "./components/index/homeShowcaseTwo";
import { HomeShowcaseOne } from "./components/index/homeShowcaseOne";
import NavbarOne from "./components/shared/NavbarOne";
import { NavbarThree } from "./components/shared/NavbarThree";
import { HomeShowcaseThree } from "./components/index/homeShowcaseThree";
import { HomeShowcaseFour } from "./components/index/homeShowcaseFour";

function App() {
  return (
    <>
      <NavbarOne />
      <NavbarThree />
      <HomeShowcaseOne />
      <HomeShowcaseTwo />
      <HomeShowcaseThree />
      <HomeShowcaseFour />
    </>
  );
}

export default App;
