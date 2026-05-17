export const RESOURCES_CONFIG = {
  pageTitle: "Resources",
  pageDescription: "This section provides useful information to help you prepare your designs and understand the printing process better. Whether you are placing a small order or a large-scale project, following these guidelines ensures better results and a smoother workflow.",
  faqSectionTitle: "❓ FAQ",
  designTipsTitle: "Design Tips",
  filePreparationTitle: "File Preparation Tips",
  glossaryTitle: "Printing Glossary"
};

export const FAQ_DATA = [
  {
    id: 1,
    question: "What file formats do you accept?",
    answer: "We recommend submitting files in PDF format as it preserves layout, fonts, and design elements accurately. Other formats may be accepted depending on the project, but PDF is preferred for best results.",
  },
  {
    id: 2,
    question: "What is the ideal resolution for printing?",
    answer: "For high-quality printing, files should be prepared at 175 DPI (dots per inch). Lower resolution images may appear blurred or pixelated when printed.",
  },
  {
    id: 3,
    question: "Do you handle bulk and large-scale printing projects?",
    answer: "Yes, we are equipped with advanced offset printing machines and infrastructure to handle both small and large-volume printing efficiently.",
  },
  {
    id: 4,
    question: "Do you undertake government or institutional work?",
    answer: "Yes, we regularly work with government departments, semi-government organisations, and institutions, ensuring compliance with required standards and timely delivery.",
  },
  {
    id: 5,
    question: "How long does printing take?",
    answer: "Turnaround time depends on the type, quantity, and complexity of the project. We always aim to deliver within committed timelines.",
  },
];

export const DESIGN_TIPS = {
  intro: "Good design plays a crucial role in achieving high-quality print results. Keeping a few key points in mind can significantly improve the final output.",
  tips: [
    { id: 1, text: "Use high-resolution images (175 DPI) to ensure clarity" },
    { id: 2, text: "Design in CMYK color mode instead of RGB for accurate color reproduction" },
    { id: 3, text: "Maintain proper margins to avoid important content being cut off" },
    { id: 4, text: "Avoid using very thin lines or very small text" },
    { id: 5, text: "Embed or outline fonts to prevent font-related issues" },
  ]
};

export const FILE_PREPARATION = {
  intro: "Preparing your files correctly helps avoid delays and ensures that the final printed product matches your expectations.",
  tips: [
    { id: 1, text: "Submit files in PDF format whenever possible" },
    { id: 2, text: "Include a bleed of at least 3mm to allow clean edge cutting" },
    { id: 3, text: "Convert all text to outlines or embed fonts" },
    { id: 4, text: "Ensure images are properly linked and not missing" },
    { id: 5, text: "Double-check layout, spelling, and alignment before submission" },
  ]
};

export const PRINTING_GLOSSARY = [
  {
    id: 1,
    term: "Offset Printing",
    definition: "A printing method used for high-volume jobs that delivers consistent and high-quality results, ideal for books, brochures, and catalogues.",
  },
  {
    id: 2,
    term: "Digital Printing",
    definition: "A faster printing method suitable for smaller quantities and quick turnaround projects.",
  },
  {
    id: 3,
    term: "Bleed",
    definition: "Extra space added around a design to ensure that there are no white edges after cutting.",
  },
  {
    id: 4,
    term: "GSM (Grams per Square Meter)",
    definition: "A measurement used to describe paper thickness. Higher GSM indicates thicker paper.",
  },
  {
    id: 5,
    term: "Pre-Press",
    definition: "The process of preparing files and plates before actual printing begins.",
  },
];