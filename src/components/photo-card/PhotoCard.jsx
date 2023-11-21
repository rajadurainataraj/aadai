import styled from "styled-components";

const images = [
  "https://via.placeholder.com/600/92c952",
  "https://via.placeholder.com/600/771796",
];

const Card = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  > div {
    width: 49%;
    height: 250px;
  }

  > div > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const PhotoCard = () => {
  return (
    <Card>
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img src={image} alt="section" />
          </div>
        );
      })}
    </Card>
  );
};

export default PhotoCard;
