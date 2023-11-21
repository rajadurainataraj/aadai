import Carousel from "./components/Carousel/carousel";
import Footer from "./components/footer/Footer";
import GridContainer from "./components/grid-container/GridContainer";
import PhotoCard from "./components/photo-card/PhotoCard";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <PhotoCard />
      <GridContainer />
      <Footer />
    </>
  );
}

export default App;