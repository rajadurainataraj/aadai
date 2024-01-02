import styled from "styled-components";
import Carousel from "../Carousel/carousel";
import GridCard from "./GridCard";

const GridWrapper = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 650px repeat(2, 280px);
  grid-auto-rows: minmax(100px, auto);
  gap: 10px;

  > div:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1/3;
    min-width: 100%;
  }
  > div > img {
    width: 100%;
    height: 100%;
  }
`;

const images = [
  "https://via.placeholder.com/250/92c952",
  "https://via.placeholder.com/250/771796",
  "https://via.placeholder.com/250/24f355",
  "https://via.placeholder.com/250/d32776",
];
const GridContainer = () => {
  return (
    <GridWrapper>
      <div>
        <Carousel />
      </div>
      {images.map((img, index) => {
        return <GridCard key={index} image={img} />;
      })}
    </GridWrapper>
  );
};

export default GridContainer;
