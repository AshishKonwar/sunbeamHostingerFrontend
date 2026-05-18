import { lazy, Suspense } from "react";
import { CircularProgress, Box } from "@mui/material";

const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const MyGallery = lazy(() => import("../pages/MyGallery"));
const Resources = lazy(() => import("../pages/Resources"));
const Quotation = lazy(() => import("../pages/Quotation"));

const PageLoader = () => (
  <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="200px"
  >
    <CircularProgress />
  </Box>
);

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
    description: "Printing Press Dashboard - Home"
  },
  {
    path: "/services",
    element: <Services />,
    title: "Services",
    description: "Our printing services"
  },
  {
    path: "/about",
    element: <About />,
    title: "About",
    description: "About our company"
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
    description: "Get in touch with us"
  },
  {
    path: "/quotation",
    element: <Quotation />,
    title: "Get Quotation",
    description: "Request a quote for our printing services"
  },
  {
    path: "/gallery",
    element: <MyGallery/>,
    title: "Gallery",
    description: "View our work gallery"
  },
  {
    path: "/resources",
    element: <Resources />,
    title: "Resources",
    description: "Downloads and FAQs"
  }
];

export const LazyRoute = ({ children }) => (
  <Suspense fallback={<PageLoader />}>
    {children}
  </Suspense>
);