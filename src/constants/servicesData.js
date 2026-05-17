export const SERVICES_CONFIG = {
  pageTitle: "Our Services",
  pageSubtitle: "Professional printing solutions for all your needs"
};

const CLOUDINARY_BASE = "https://res.cloudinary.com/dahuajpp7/image/upload";

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Multicolour Offset Printing",
    images: [
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/books1`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/books2`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/books3`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/books4`,
    ],
    about: "High volume, high quality printing using advanced Komori offset technology.",
    items: ["Books, magazines, brochures, catalogues"],
  },
  {
    id: 2,
    title: "Digital Printing (Colour & Mono)",
    images: [
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/LEAFLETS_1`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/LEAFLETS_2`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/IMG_4939`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/IMG_4935`,
    ],
    about: "Fast and flexible printing for urgent and small quantity requirements.",
    items: ["Flyers, certificates, documents"],
  },
  {
    id: 3,
    title: "Complete Press Solutions",
    images: [
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/IMG_4939`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/IMG_4935`,
    ],
    about: "End to end services from design support to final delivery.",
    items: [],
  },
  {
    id: 4,
    title: "Finishing & Binding",
    images: [
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/image10`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/image11`,
    ],
    about: "Professional finishing that enhances durability and presentation.",
    items: ["Lamination", "Perfect & Hard Binding"],
  },
  {
    id: 5,
    title: "Corporate & Commercial Printing",
    images: [
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/IMG_4919`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/IMG_4920`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/books3`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/books4`,
    ],
    about: "Reliable printing solutions for offices, institutions, and organisations.",
    items: ["Letterheads, reports, catalogues"],
  },
  {
    id: 6,
    title: "Event & Promotional Materials",
    images: [
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/POSTER_1`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/POSTER_2`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/POSTER_3`,
    ],
    about: "Print materials designed for visibility and impact.",
    items: ["Posters, banners, flyers"],
  },
  {
    id: 7,
    title: "Custom Printing Solutions",
    images: [
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/image11`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/image12`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/image13`,
      `${CLOUDINARY_BASE}/f_auto,q_auto,w_800/sunbeam/services/image15`,
    ],
    about: "Tailor made printing based on size, material, finish, and quantity.",
    items: [],
  },
];