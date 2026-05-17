import img2a from "../assets/pictures/2a.jpg";
import img2b from "../assets/pictures/2b.jpg";
import img2c from "../assets/pictures/2c.jpg";
import img2d from "../assets/pictures/2d.jpg";
import imgBooks1 from "../assets/pictures/books1.JPG";
import imgBooks2 from "../assets/pictures/books2.JPG";
import imgBooks3 from "../assets/pictures/books3.JPG";
import imgBooks4 from "../assets/pictures/books4.JPG";
import imgBooks5 from "../assets/pictures/books5.JPG";
import imgCollage1 from "../assets/pictures/collagepic01.jpg";
import imgCollage2 from "../assets/pictures/collagepic02.jpg";
import imgCollage3 from "../assets/pictures/collagepic03.jpg";
import imgCollage4 from "../assets/pictures/collagepic04.jpg";
import imgCollage5 from "../assets/pictures/collagepic05.jpg";
import imgCrew from "../assets/pictures/crew_members.jpg";
import img10 from "../assets/pictures/image10.jpg";
import img11 from "../assets/pictures/image11.jpg";
import img12 from "../assets/pictures/image12.jpg";
import img13 from "../assets/pictures/image13.jpg";
import img14 from "../assets/pictures/image14.jpg";
import img15 from "../assets/pictures/image15.jpg";
import img16 from "../assets/pictures/image16.jpg";
import img17 from "../assets/pictures/image17.jpg";
import img18 from "../assets/pictures/image18.jpg";
import img5 from "../assets/pictures/image5.jpg";
import img6 from "../assets/pictures/image6.jpg";
import img7 from "../assets/pictures/image7.jpg";
import img8 from "../assets/pictures/image8.jpg";
import img9 from "../assets/pictures/image9.jpg";
import imgIMG4920 from "../assets/pictures/IMG_4920.jpg";
import imgMOPM from "../assets/pictures/MOPM.jpg";
import imgMOPM02 from "../assets/pictures/MOPM02.jpg";
import imgMOPM03 from "../assets/pictures/MOPM03.jpg";
import imgPhotos1 from "../assets/pictures/photos_1.png";
import imgPhotos3 from "../assets/pictures/photos_3.png";
import imgPhotos5 from "../assets/pictures/photos_5.png";
import imgPhotos6 from "../assets/pictures/photos_6.png";
import imgPoster1 from "../assets/pictures/POSTER_1.png";
import imgPoster2 from "../assets/pictures/POSTER_2.png";
import imgPoster3 from "../assets/pictures/POSTER_3.png";
import imgLeaflets1 from "../assets/pictures/LEAFLETS_1.png";
import imgLeaflets2 from "../assets/pictures/LEAFLETS_2.png";

export const GALLERY_CATEGORIES = {
  ALL: "all",
  INFRASTRUCTURE: "Infrastructure",
  PRODUCTS: "Products",
  TEAM: "Team"
};

export const GALLERY_CONFIG = {
  title: "Our Gallery",
  subtitle: "A glimpse of our work, infrastructure, and finished products.",
  categories: ["all", "Infrastructure", "Products", "Team"]
};

export const GALLERY_IMAGES = [
  { id: 1, image: imgMOPM, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Komori Lithrone Printing" },
  { id: 2, image: imgMOPM02, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Sheetfed Offset Bicolour" },
  { id: 3, image: imgMOPM03, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Sheetfed Offset Monocolour" },
  { id: 4, image: img2a, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "CTP System" },
  { id: 5, image: img2b, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "CTP Processor" },
  { id: 6, image: img2c, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Pre Press Technology" },
  { id: 7, image: img2d, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Plate Making" },
  { id: 8, image: img5, category: GALLERY_CATEGORIES.PRODUCTS, title: "Digital Printing" },
  { id: 9, image: img6, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Konica Minolta" },
  { id: 10, image: img7, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Digital Mono" },
  { id: 11, image: img8, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Lamination Machine" },
  { id: 12, image: img9, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Finishing Equipment" },
  { id: 13, image: img10, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Binding Machine" },
  { id: 14, image: img11, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Cutting Machine" },
  { id: 15, image: img12, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Folding Machine" },
  { id: 16, image: img13, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Packaging Equipment" },
  { id: 17, image: img14, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Press Floor" },
  { id: 18, image: img15, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Production Area" },
  { id: 19, image: img16, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Storage" },
  { id: 20, image: img17, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Quality Check" },
  { id: 21, image: img18, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Dispatch" },
  { id: 22, image: imgBooks1, category: GALLERY_CATEGORIES.PRODUCTS, title: "Books" },
  { id: 23, image: imgBooks2, category: GALLERY_CATEGORIES.PRODUCTS, title: "Magazines" },
  { id: 24, image: imgBooks3, category: GALLERY_CATEGORIES.PRODUCTS, title: "Catalogues" },
  { id: 25, image: imgBooks4, category: GALLERY_CATEGORIES.PRODUCTS, title: "Brochures" },
  { id: 26, image: imgBooks5, category: GALLERY_CATEGORIES.PRODUCTS, title: "Publications" },
  { id: 27, image: imgPoster1, category: GALLERY_CATEGORIES.PRODUCTS, title: "Posters" },
  { id: 28, image: imgPoster2, category: GALLERY_CATEGORIES.PRODUCTS, title: "Posters" },
  { id: 29, image: imgPoster3, category: GALLERY_CATEGORIES.PRODUCTS, title: "Posters" },
  { id: 30, image: imgLeaflets1, category: GALLERY_CATEGORIES.PRODUCTS, title: "Leaflets" },
  { id: 31, image: imgLeaflets2, category: GALLERY_CATEGORIES.PRODUCTS, title: "Leaflets" },
  { id: 32, image: imgPhotos1, category: GALLERY_CATEGORIES.PRODUCTS, title: "Print Samples" },
  { id: 34, image: imgPhotos3, category: GALLERY_CATEGORIES.PRODUCTS, title: "Print Samples" },
  { id: 36, image: imgPhotos5, category: GALLERY_CATEGORIES.PRODUCTS, title: "Complete Press Solutions" },
  { id: 37, image: imgPhotos6, category: GALLERY_CATEGORIES.PRODUCTS, title: "Complete Press Solutions" },
  { id: 39, image: imgIMG4920, category: GALLERY_CATEGORIES.PRODUCTS, title: "Finished Work" },
  { id: 50, image: imgCollage1, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Our Team" },
  { id: 51, image: imgCollage2, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Team Collaboration" },
  { id: 52, image: imgCollage3, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Team Work" },
  { id: 53, image: imgCollage4, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Staff" },
  { id: 54, image: imgCollage5, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Workforce" },
  { id: 55, image: imgCrew, category: GALLERY_CATEGORIES.TEAM, title: "Crew Members" },
];