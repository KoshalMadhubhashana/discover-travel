import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import "./multiple-item-carousel.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  "https://images.unsplash.com/photo-1569670380606-fd47201d42da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1580910531902-1112518b26ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1543043204-3f4e66dc5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1586847956959-3f47dab7bfc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1566485622840-713a03ac692d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
];
class MultipleItemCarousel extends Component {
  state = {};
  render() {
    return (
      <div className="carousel-container">
        <Carousel
          ssr
          autoPlay
          infinite
          autoPlaySpeed={2000}
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
        >
          {images.slice(0, 5).map((image) => {
            return (
              <Image
                draggable={false}
                style={{ width: "100%", height: "97%" }}
                src={image}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default MultipleItemCarousel;
