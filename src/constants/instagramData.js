import insta_image01 from "../assets/pictures/Insta_image01.jpeg";
import insta_image02 from "../assets/pictures/Insta_image02.jpeg";
import insta_image03 from "../assets/pictures/Insta_image03.jpeg";
import insta_image05 from "../assets/pictures/Insta_image05.jpeg";
import insta_image06 from "../assets/pictures/Insta_image06.jpeg";

export const INSTAGRAM_CONFIG = {
  mainHandle: "@sunbeamprintingpress",
  mainHashtag: "#sunbeamprintingpress",
  displayLimit: 5,
  tagline: "Where your ideas come to life in print"
};

export const INSTAGRAM_HANDLES = {
  SUNBEAM: "@sunbeamprintingpress",
  MONIKUT: "@monikut_publication"
};

export const INSTAGRAM_POSTS = [
  { 
    id: 1,
    src: insta_image01, 
    postUrl: "https://www.instagram.com/sunbeamprintingpress/reel/DOlTXerEu6E/", 
    handle: INSTAGRAM_HANDLES.SUNBEAM,
    type: "reel"
  },
  { 
    id: 2,
    src: insta_image02, 
    postUrl: "https://www.instagram.com/sunbeamprintingpress/reel/DP4Llxsks_6/", 
    handle: INSTAGRAM_HANDLES.SUNBEAM,
    type: "reel"
  },
  { 
    id: 3,
    src: insta_image03, 
    postUrl: "https://www.instagram.com/sunbeamprintingpress/reel/DUssIghkqnB/", 
    handle: INSTAGRAM_HANDLES.SUNBEAM,
    type: "reel"
  },
  { 
    id: 4,
    src: insta_image06, 
    postUrl: "https://www.instagram.com/sunbeamprintingpress/p/DRm028cEmb3/", 
    handle: INSTAGRAM_HANDLES.SUNBEAM,
    type: "post"
  },
  { 
    id: 5,
    src: insta_image05, 
    postUrl: "https://www.instagram.com/monikut_publication/p/DSoegl8k5W3/", 
    handle: INSTAGRAM_HANDLES.MONIKUT,
    type: "post"
  }
];