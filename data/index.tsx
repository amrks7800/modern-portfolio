import { FiExternalLink } from "react-icons/fi"

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  {
    name: "Blog",
    link: "https://personal-blog-zeta-ebon.vercel.app/",
    icon: <FiExternalLink />,
  },
]

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "md:col-span-3 md:row-span-2 lg:col-span-2 lg:row-span-2",
    imgClassName: "w-full h-full opacity-90",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "md:col-span-3 md:row-span-1 lg:col-span-1",
    imgClassName: "bottom-0 absolute",
    titleClassName: "justify-start",
    img: "/globe.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-3 md:row-span-1 lg:col-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "md:col-span-3 md:row-span-1 lg:col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Built my first state management library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 lg:col-span-2",
    imgClassName: "absolute right-0 bottom-0 w-48 md:w-72 lg:w-96 opacity-90",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full text-center",
    img: "",
    spareImg: "",
  },
]

export const projects = [
  {
    id: 1,
    title: "CodeVerse - My Personal Blog",
    des: "Explore the latest and greatest in my tech stack and learn more about all the new tech trends in the world.",
    img: "/blog.png",
    iconLists: ["/astro.svg", "/tail.svg", "/ts.svg", "/md.svg"],
    link: "https://github.com/amrks7800/personal-blog",
    live: "https://personal-blog-zeta-ebon.vercel.app/",
  },
  {
    id: 2,
    title: "HomeLocator - Real Estate Agency App",
    des: "Done as a freelancing gig for a real estate agency located in cairo",
    img: "/hl.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/shad.svg"],
    link: "https://github.com/amrks7800/home-locator",
    live: "https://homelocator.net",
  },
  {
    id: 3,
    title: "Pulse - healthcare management tool",
    des: "A website to manage appointments between doctors and patients in a simple manner.",
    img: "/pulse.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://github.com/amrks7800/pulse",
    live: "https://pulse-ashy-psi.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/amrks7800/iphone",
    live: "https://iphone-eight-chi.vercel.app/",
  },
  {
    id: 5,
    title: "StoreIt - the perfect cloud storage solution",
    des: "Inspired by tech giants products like Google drive, storeit is the best cloud storage solution",
    img: "/storeit.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "aws.svg"],
    link: "https://github.com/amrks7800/storeit",
    live: "https://storeit-sk11.vercel.app/",
  },
]

export const testimonials = [
  {
    quote:
      "I worked with Amr on several frontend apps using React. I learnt a lot about React from Amr, Amr can explain deep topics in React with simple words and examples. Also, he know well how to choose the proper technology for the project in hand. I am looking forward to work with him again.",
    name: "Mohamed abdelsalam",
    title: "Fullstack developer",
    img: "/abso.jpg",
  },
  {
    quote:
      "Amr is an exceptional front-end React developer. His attention to detail and ability to create user-friendly interfaces consistently exceed expectations. He combines technical proficiency with a keen eye for design, making him a valuable asset to any project.",
    name: "Islam mohamed",
    title: "PHP Laravel developer",
    img: "/islam.jpg",
  },
]

export const companies = []

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Assisted in the development of a web-based platform using React.js, and Next.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/viv.png",
  },
  {
    id: 2,
    title: "Freelancer",
    desc: "Worked and Participated on a lot of freelancing gigs for various clients",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
]

export const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
}
