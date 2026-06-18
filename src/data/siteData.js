import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaCloud,
  FaCog,
  FaLaptopCode
} from "react-icons/fa";
import docadmin from "../assets/images/docadmin.jpg";
import akshar from "../assets/images/akshar.jpg";
import boutique from "../assets/images/boutique.jpg";

export const navLinks = [
  {
    title: "Home",
    href: "#hero"
  },
  {
    title: "Services",
    href: "#services"
  },
  {
    title: "Why Us",
    href: "#why-us"
  },
  {
    title: "Portfolio",
    href: "#portfolio"
  },
  {
    title: "Contact",
    href: "#contact"
  }
];

export const heroData = {
    badge:"Trusted By 100+ Businesses",
    title: "Building Digital Experiences That Matter",
    description: "Envir Galaxy Technology builds scalable web applications, custom software and digital solutions that help businesses innovate, automate and grow.",
    primaryBtn: "Get Started",
    secondaryBtn: "View Work",
    stats: [
      {
        value: "50+",
        label: "Clients Served"
      },
      {
        value: "100+",
        label: "Projects Delivered"
      },
      {
        value: "24/7",
        label: "Support"
      }
    ]
};

export const servicesData = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Modern, responsive and scalable web applications."
  },

  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "Cross-platform applications built for performance."
  },

  {
    icon: FaPalette,
    title: "UI / UX Design",
    description:
      "User-centered designs that improve engagement."
  },

  {
    icon: FaLaptopCode,
    title: "Custom Software",
    description:
      "Tailored solutions built for unique business needs."
  },

  {
    icon: FaCloud,
    title: "Cloud Solutions",
    description:
      "Reliable infrastructure and deployment strategies."
  },

  {
    icon: FaCog,
    title: "Maintenance & Support",
    description:
      "Continuous updates and long-term support."
  }
];

export const featuresData = [
  {
    title: "Experienced Team",
    description:
      "Skilled developers and designers delivering high-quality digital solutions."
  },

  {
    title: "Modern Technologies",
    description:
      "Using the latest tools and frameworks to build future-ready products."
  },

  {
    title: "Client-Centric Approach",
    description:
      "Every project is tailored around business goals and user needs."
  },

  {
    title: "Long-Term Support",
    description:
      "Continuous maintenance and support beyond project delivery."
  }
];

export const projectsData = [
  {
    title: "Business Management System",
    category: "Web Application",
    description:
      "A complete business management platform designed to streamline operations.",
    image:akshar
  },

  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Modern online shopping experience with optimized performance.",
    image:boutique
  },

  {
    title: "Healthcare Dashboard",
    category: "Custom Software",
    description:
      "Centralized analytics and reporting system.",
    image: docadmin
  }
];

export const testimonialsData = [
  {
    name: "Raj Patel",
    company: "TechNova Solutions",
    review:
      "Envir Galaxy Technology delivered exactly what we needed. Their team was responsive, professional and highly skilled."
  },

  {
    name: "Amit Shah",
    company: "GrowthSphere",
    review:
      "From planning to deployment, the entire experience was smooth and transparent. Highly recommended."
  },

  {
    name: "Neha Mehta",
    company: "SmartEdge Systems",
    review:
      "Their technical expertise helped us launch faster and scale confidently."
  }
];

export const contactData = {
  email: "hello@envirgalaxy.com",
  phone: "+91 98765 43210",
  location: "Rajkot, Gujarat, India"
};

export const footerLinks = [
  "Home",
  "Services",
  "Portfolio",
  "Testimonials",
  "Contact"
];