// src/constants/ourServicesCarouselData.js
import image1 from "../assets/pictures/collagepic01.jpg";
import image2 from "../assets/pictures/collagepic02.jpg";
import image3 from "../assets/pictures/collagepic03.jpg";
import image4 from "../assets/pictures/books4.JPG";
import image5 from "../assets/pictures/collagepic05.jpg";
import image6 from "../assets/pictures/image5.jpg";
import image7 from "../assets/pictures/collagepic04.jpg";

export const CAROUSEL_CONFIG = {
  sectionTitle: "Our Services",
  autoPlayInterval: 3000, 
  seeMoreLink: "/services",
  seeMoreText: "See More"
};

export const CAROUSEL_IMAGES = [
  image1, 
  image3, 
  image7, 
  image2, 
  image5
];

export const FEATURED_SERVICES = [
  {
    id: 1,
    title: "Multicolour Offset Printing",
    image: image4,
    description: "High volume, high quality printing using advanced Komori offset technology.",
  },
  {
    id: 2,
    title: "Corporate & Commercial Printing",
    image: image6,
    description: "Reliable printing solutions for offices, institutions, and organisations.",
  },
  {
    id: 3,
    title: "Finishing & Binding",
    image: image1,
    description: "Professional finishing that enhances durability and presentation.",
  }
];