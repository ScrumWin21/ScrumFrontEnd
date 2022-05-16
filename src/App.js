import "./App.scss";
import { HomeShowcaseTwo } from "./components/index/homeShowcaseTwo";
import { HomeShowcaseOne } from "./components/index/homeShowcaseOne";
import NavbarOne from "./components/shared/NavbarOne";
import { NavbarThree } from "./components/shared/NavbarThree";
import { HomeShowcaseThree } from "./components/index/homeShowcaseThree";
import { HomeShowcaseFour } from "./components/index/homeShowcaseFour";
import HomeShowcaseFive from "./components/index/homeShowcaseFive";
import HomeShowcaseSeven from "./components/index/homeShowcaseSeven";
import HomeShowcaseEight from "./components/index/homeShowcaseEight";

import HomeShowcaseEleven from "./components/index/homeShowcaseEleven";
import HomeShowcaseTwelve from "./components/index/homeShowcaseTwelve";

function App() {
  return (
    <>
      <NavbarOne />
      <NavbarThree />
      <HomeShowcaseOne />
      <HomeShowcaseTwo />
      <HomeShowcaseThree />
      <HomeShowcaseFour />
      <HomeShowcaseFive />
      <HomeShowcaseSeven />
      <HomeShowcaseEight />
      <HomeShowcaseEleven />
      <HomeShowcaseTwelve />
    </>
  );
}

export default App;
