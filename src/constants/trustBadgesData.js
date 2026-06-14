import certificate1 from "../assets/pictures/certificate1.jpg";
import certificate2 from "../assets/pictures/certificate2.jpg";

import pdf1 from "../assets/pdfs/P & S REGISTRATION CERTIFICATE.pdf";
import pdf2 from "../assets/pdfs/TRADE LICENCE.pdf";
import pdf3 from "../assets/pdfs/Udyam Registration Certificate.pdf";

export const TRUST_CONFIG = {
  mainTitle: "Government & Client Trust",
  subtitle: "Trusted by Government & Institutional Clients",
  description: "We undertake printing projects for government departments, semi-government organisations, educational institutions, and corporate clients with a strong focus on quality, consistency, and timely delivery.",
  certificationsTitle: "Our Certifications",
  registrationDetails: [
  "Printing & Stationery Regd. No.: E-569596/75",
  "Registration Grade: A",
  "MSME Regd. No.: AS03B0003484",
  "UNNATI Registration No.: UNNATI/2025/AS-KM/00182"
  ]
};

export const TRUST_BADGES = [
  {
    id: 1,
    text: "Established in 2007",
  },
  {
    id: 2,
    text: "Komori Lithrone Technology",
  },
  {
    id: 3,
    text: "Trusted by Government Clients",
  },
  {
    id: 4,
    text: "UNNATI Certified",
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    title: "UNNATI Registration Certificate",
    description: "Certified Existing Unit under UNNATI 2024",
    image: certificate1,
    type: "image"
  },
  {
    id: 2,
    title: "UNNATI Industrial Scheme Certification",
    description: "Approved under Uttar Poorva Industrialization Scheme",
    image: certificate2,
    type: "image"
  },
  {
    id: 3,
    title: "P & S REGISTRATION CERTIFICATE",
    description: "PDF Document",
    file: pdf1,
    type: "pdf"
  },
  {
    id: 4,
    title: "TRADE LICENCE-2026-27",
    description: "PDF Document",
    file: pdf2,
    type: "pdf",
  },
  {
    id: 5,
    title: "Udyam Registration Certificate",
    description: "PDF Document",
    file: pdf3,
    type: "pdf",
  },
];