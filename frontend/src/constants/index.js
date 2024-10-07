import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Lex1,
  Lex2,
  vesen,
   Xlogo,
   Eshop,
    Portfolio,
    Ndibs,
    desk3,
    desk4,
    desk5,
    desk6
} from "../assets";

export const navLinks = [
  {

    to : "/",
    title : "Home"
  },
  {
    to: "about",
    title: "About",
  },
 
  {
    to : "Services",
    title : "Services"
  },
  {
    to: "contact",
    title: "Contacts",
  },
];

const services = [
  {
    title: "Developer ",
    icon: Lex1,
  }, 
 
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
   {
    title: "Intense Coding",
    icon: Lex2,
  }
  


  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const about = [
  {
    title : "Overview",
    points : [
      "We provide a complete range of services to turn your great ideas into profitable business solutions ",
      
    ]
  },
  {
    title : "Who we are?",
    points : [
      " We have over the years grown from a provider of retirement benefits into one of the East Africa’s leading providers of innovative Retirement, Financial, Infrastructural and Consulting Solutions.",
     
    ]
  }
]

const experiences = [
  {
    title: "Sustainability", 
    iconBg: "#000000",
    date: "1",
    points: [
      "We build our customers’ financial security in an ecosystem that drives social impact to the economy, society and environment.",
    ],
  },
  {
    title: "  Innovation", 
    iconBg: "#000000",
    date: "  2",
    points: [
      "We are proactive and continually improve our offerings to respond to the current and future needs of our customers",
    ],
  },
  {
    title: " Respect", 
    iconBg: "#000000",
    date: " 3",
    points: [
      "We are committed to providing dignity to our stakeholders across our operations and interactions",
    ],
  },
  {
    title: " Teamwork", 
    iconBg: "#000000",
    date: "4",
    points: [
      "We believe in working collaboratively to deliver our promise to our customers and stakeholders.",
    ],
  }
  
  
 
];

const testimonials = [
  {
    testimonial:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fund Administration",
    description:[
      "Good pensions management is a balance of achieving operational efficiency whilst meeting exacting standards of governance and evolving legislation for trustees."
    ],    
    image: desk3,
    source_code_link: "services",
  },
  {
    name: "Gratuity Management ",
    description:
      "We appreciate that gratuity must be paid to employees at the end of their contract and is often a major financial obligation – one that demands advance planning and budgeting.",
   
    image: desk4,
    source_code_link: "services/gratuity",
  },
  {
    name: "Training & Consultancy",
    description:
      "We appreciate that gratuity must be paid to employees at the end of their contract and is often a major financial obligation – one that demands advance planning and budgeting.",
   
    image: desk5,
    source_code_link: "services/training",
  },
];

export { services, technologies, experiences, testimonials, projects,about };