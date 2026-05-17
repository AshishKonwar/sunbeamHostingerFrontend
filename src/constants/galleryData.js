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

const CLOUDINARY_BASE = "https://res.cloudinary.com/dahuajpp7/image/upload/f_auto,q_auto,w_800";

export const GALLERY_IMAGES = [
  { id: 1, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/MOPM.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Komori Lithrone Printing" },
  { id: 2, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/MOPM02.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Sheetfed Offset Bicolour" },
  { id: 3, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/MOPM03.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Sheetfed Offset Monocolour" },
  { id: 4, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/2a.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "CTP System" },
  { id: 5, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/2b.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "CTP Processor" },
  { id: 6, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/2c.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Pre Press Technology" },
  { id: 7, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/2d.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Plate Making" },
  { id: 8, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image5.jpg`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Digital Printing" },
  { id: 9, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image6.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Konica Minolta" },
  { id: 10, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image7.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Digital Mono" },
  { id: 11, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image8.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Lamination Machine" },
  { id: 12, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image9.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Finishing Equipment" },
  { id: 13, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image10.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Binding Machine" },
  { id: 14, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image11.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Cutting Machine" },
  { id: 15, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image12.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Folding Machine" },
  { id: 16, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image13.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Packaging Equipment" },
  { id: 17, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image14.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Press Floor" },
  { id: 18, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image15.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Production Area" },
  { id: 19, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image16.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Storage" },
  { id: 20, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image17.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Quality Check" },
  { id: 21, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/image18.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Dispatch" },
  { id: 22, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/books1.jpg`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Books" },
  { id: 23, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/books2.jpg`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Magazines" },
  { id: 24, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/books3.jpg`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Catalogues" },
  { id: 25, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/books4.jpg`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Brochures" },
  { id: 26, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/books5.jpg`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Publications" },
  { id: 27, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/POSTER_1.png`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Posters" },
  { id: 28, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/POSTER_2.png`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Posters" },
  { id: 29, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/POSTER_3.png`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Posters" },
  { id: 30, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/LEAFLETS_1.png`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Leaflets" },
  { id: 31, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/LEAFLETS_2.png`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Leaflets" },
  { id: 32, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/photos_1.png`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Print Samples" },
  // { id: 34, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/photos_3.png`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Print Samples" },
  // { id: 36, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/photos_5.png`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Complete Press Solutions" },
  // { id: 37, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/photos_6.png`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Complete Press Solutions" },
  { id: 39, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/IMG_4920.jpg`, category: GALLERY_CATEGORIES.PRODUCTS, title: "Finished Work" },
  { id: 50, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic01.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Our Team" },
  { id: 51, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic02.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Team Collaboration" },
  { id: 52, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic03.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Team Work" },
  { id: 53, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic04.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Staff" },
  { id: 54, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/collagepic05.jpg`, category: GALLERY_CATEGORIES.INFRASTRUCTURE, title: "Workforce" },
  { id: 55, image: `${CLOUDINARY_BASE}/v1779047092/sunbeam/gallery/crew_members.jpg`, category: GALLERY_CATEGORIES.TEAM, title: "Crew Members" },
];