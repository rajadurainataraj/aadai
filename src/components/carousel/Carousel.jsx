import { useEffect, useState } from "react";
// import styled from "styled-components";

// const CarouselPointer = styled.div`
//   display: flex;
//   justify-content: center;
//   > div {
//     width: 10px;
//     height: 10px;
//     background-color: #cbc9c9;
//     border-radius: 100%;
//     margin: 0 20px;
//   }

//   > div:active {
//     background-color: red;
//   }
// `;
const images = [
  "https://via.placeholder.com/600/92c952",
  "https://via.placeholder.com/600/771796",
  "https://via.placeholder.com/600/24f355",
  "https://via.placeholder.com/600/d32776",
];

const Carousel = () => {
  const [count, setCount] = useState(0);

  function next() {
    if (count >= images.length - 1) return setCount(0);
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return (
    <div className="carousal-container">
      <img src={images[count]} alt="random image" />
      {/* <CarouselPointer>
        {images.map((_, i) => (
          <div key={i}></div>
        ))}
      </CarouselPointer> */}
    </div>
  );
};

export default Carousel;
