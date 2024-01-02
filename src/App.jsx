import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel/carousel";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Footer from "./components/footer/Footer";
import GridContainer from "./components/grid-container/GridContainer";
import PhotoCard from "./components/photo-card/PhotoCard";
import { store } from "./store";
import { Provider } from "react-redux";

import AddItem from "./components/AddItem";
import { ThemeContext } from "./ThemeContext";
import { useContext, useState } from "react";
import Counter from "./Counter";
import CardSlide from "./CardSlide";
import { ClassCompound } from "./ClassCompound";
import Modal from "./Modal";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
<<<<<<< Updated upstream
    <>
      <Header />
      <Carousel />
=======
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Provider store={store}>
        {/* <Carousel />
>>>>>>> Stashed changes
      <PhotoCard />
      <GridContainer />
      <Footer /> */}
        <BrowserRouter>
          {/* <Test /> */}
          {/* <Navbar /> */}
          <Routes>
            <Route path="/addItem" element={<AddItem />} />
          </Routes>
          {/* <ClassCompound /> */}
          <Modal />
          {/* <Test />
          <CardSlide /> */}
          {/* <Counter/> */}
        </BrowserRouter>
      </Provider>
    </ThemeContext.Provider>
  );
}

export default App;