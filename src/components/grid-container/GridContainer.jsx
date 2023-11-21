import styled from "styled-components";
import Carousel from "../Carousel/carousel";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 650px repeat(2, 1fr);
  grid-auto-rows: minmax(240px, auto);
  gap: 10px;
  > div {
    background-color: lightcoral;
  }
  > div:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1/3;
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
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img src={image} alt="random" />
          </div>
        );
      })}
      {/* <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div> */}
    </GridWrapper>
  );
};

export default GridContainer;
