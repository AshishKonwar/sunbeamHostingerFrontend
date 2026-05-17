export const CAROUSEL_CONFIG = {
  sectionTitle: "Our Services",
  autoPlayInterval: 3000,
  seeMoreLink: "/services",
  seeMoreText: "See More"
};

const CLOUDINARY_BASE = "https://res.cloudinary.com/dahuajpp7/image/upload/f_auto,q_auto,w_800";

export const CAROUSEL_IMAGES = [
  `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic01.jpg`,
  `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic03.jpg`,
  `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic04.jpg`,
  `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic02.jpg`,
  `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic05.jpg`
];

export const FEATURED_SERVICES = [
  {
    id: 1,
    title: "Multicolour Offset Printing",
    image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/books4.jpg`,
    description: "High volume, high quality printing using advanced Komori offset technology.",
  },
  {
    id: 2,
    title: "Corporate & Commercial Printing",
    image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image5.jpg`,
    description: "Reliable printing solutions for offices, institutions, and organisations.",
  },
  {
    id: 3,
    title: "Finishing & Binding",
    image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic01.jpg`,
    description: "Professional finishing that enhances durability and presentation.",
  }
];