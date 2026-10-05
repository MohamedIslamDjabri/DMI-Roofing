/**
 * DMI — Centralized Content System
 * 
 * Edit this file to change portfolio content, text, project links, and profile photos
 * without needing to touch any React components.
 */

export const siteConfig = {
  brand: "DMI",
  tagline: "ROOFING WEB DEVELOPMENT",
  name: "Mohamed Islam D.",
  title: "Founder & Web Developer",
  specialty: "Roofing Web Development",
  location: "Algeria — Remote Worldwide",
  availability: "Available for selected projects",
  email: "islammohamed.djabri@gmail.com",

  // Leave empty until you have a real business phone number.
  phone: "",

  bookingUrl: "#audit-form",

  profileImage: "/images/profile/mohamed-about.jpg",
  heroProfileImage: "/images/profile/mohamed-hero.jpg",

  marketsServed:
    "Serving roofing and exterior contractors across the USA, Canada, UK, Australia and UAE.",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Audit", href: "#audit-form" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "",

  headline: "Websites Built for Roofing Contractors",

  subheadline:
    "DMI builds modern, fast and conversion-focused websites for roofing contractors, designed to showcase their services, build trust and make it easier for local visitors to request a quote.",

  primaryCta: {
    label: "Get a Free Website Audit",
    url: "#audit-form",
  },

  secondaryCta: {
    label: "View Selected Projects",
    url: "#work",
  },

  techLine: "WordPress • React • Next.js • Responsive Development",

  mockup: {
    domain: "apexshield-roofing.com",
    badge: "Free Estimate",
    company: "ApexShield Roofing",
    serviceSubtitle: "Residential & Commercial Roofing Services",
    metric1Label: "Service",
    metric1Val: "Roof Replacement",
    metric2Label: "Customer Rating",
    metric2Val: "4.9 / 5.0 ★",
    phone: "CALL FOR ESTIMATE",
    buttonLabel: "Request an Estimate",
  },
};

export const trustItems = [
  "Roofing Websites",
  "Website Redesign",
  "Lead Generation",
  "WordPress & Next.js",
  "Mobile-First Design",
  "Service Area Pages",
  "Quote Request Funnels",
  "Performance Optimization",
];

export const problems = [
  {
    number: "01",
    title: "Outdated Website",
    description:
      "An outdated website can make a professional roofing company look less competitive and make it harder for visitors to take action.",
    icon: "devices_off",
  },
  {
    number: "02",
    title: "Poor Mobile Experience",
    description:
      "Roofing prospects may visit your website from a phone. Clear navigation, readable content and easy contact options are essential.",
    icon: "smartphone",
  },
  {
    number: "03",
    title: "Weak Quote CTAs",
    description:
      "If visitors cannot quickly find a quote or estimate option, potential opportunities can be lost.",
    icon: "request_quote",
  },
  {
    number: "04",
    title: "Poor Service Pages",
    description:
      "Dedicated pages for roof repair, replacement, storm damage and other services make the website easier to understand and easier to structure for search.",
    icon: "layers_clear",
  },
  {
    number: "05",
    title: "Slow Loading",
    description:
      "Large images, unnecessary scripts and poorly optimized websites can create a frustrating experience, especially on mobile devices.",
    icon: "timer_off",
  },
  {
    number: "06",
    title: "Weak Trust Signals",
    description:
      "Reviews, project photos, warranties, certifications and clear company information can help visitors feel more confident about contacting a contractor.",
    icon: "gpp_good",
  },
];

export const solutions = {
  badge: "BUILT FOR THE TRADE",

  heading: "A Better Website for Your Roofing Business",

  description:
    "DMI creates modern roofing websites focused on clear service information, strong trust signals, mobile usability and simple paths to contact or request an estimate.",

  benefits: [
    {
      title: "Roofing-Focused Design",
      description:
        "A professional visual system built around roofing services, project photography, trust signals and clear calls to action.",
    },
    {
      title: "Mobile-First Experience",
      description:
        "Clear navigation, readable content and prominent contact actions designed for phones, tablets and desktop devices.",
    },
    {
      title: "Project & Service Showcases",
      description:
        "Highlight completed roofing projects, core services, materials and service areas in a structured and visually engaging way.",
    },
    {
      title: "Performance-Focused Development",
      description:
        "Careful implementation, optimized images and a lightweight approach designed to create a fast, smooth browsing experience.",
    },
  ],

  quoteCalculatorPreview: {
    title: "Free Roof Estimate",
    step: "STEP 2 OF 3",

    serviceOptions: [
      {
        name: "Full Replacement",
        icon: "roofing",
        active: true,
      },
      {
        name: "Leak Repair",
        icon: "build",
        active: false,
      },
      {
        name: "Storm / Hail Damage",
        icon: "thunderstorm",
        active: false,
      },
      {
        name: "Commercial Roofing",
        icon: "domain",
        active: false,
      },
    ],

    defaultAddress: "Dallas, TX",

    guarantee:
      "Free estimate request — final inspection and project scope determined by the contractor.",

    buttonLabel: "Continue",
  },
};

/**
 * 6 Selected Roofing Projects
 *
 * Project images and Preview Project buttons should both open project.url.
 *
 * For external URLs:
 * target="_blank"
 * rel="noopener noreferrer"
 *
 * These projects are portfolio/demo concepts unless replaced with real client projects.
 */

export const projects = [
  {
    id: "apexshield",
    number: "01",
    title: "ApexShield Roofing",
    category: "Residential Roofing",
    type: "Residential",

    description:
      "Modern residential roofing website concept focused on services, trust, project photography and quote requests.",

    image: "/images/projects/apexshield.png",

    url: "https://apex-shield-wine.vercel.app",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],

    features: [
      "Roof Replacement",
      "Roof Repair",
      "Free Estimate",
      "Project Gallery",
      "Reviews",
      "Service Areas",
    ],

    featured: true,

    engineBadge: "Next.js",
    specSummary: "Residential Roofing Website",
  },

  {
    id: "stormguard",
    number: "02",
    title: "StormGuard Roofing",
    category: "Storm Damage & Emergency Roofing",
    type: "Emergency/Storm",

    description:
      "Conversion-focused roofing website concept built around storm damage, emergency services, inspection requests and insurance information.",

    image: "/images/projects/stormguard.png",

    url: "https://storm-guard-red.vercel.app",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    features: [
      "Emergency Roofing",
      "Insurance Information",
      "Inspection Request",
      "Service Areas",
      "Mobile CTA",
    ],

    featured: true,

    engineBadge: "Next.js",
    specSummary: "Storm Damage Roofing Website",
  },

  {
    id: "elitemetal",
    number: "03",
    title: "EliteMetal Roofing",
    category: "Premium Metal Roofing",
    type: "Residential",

    description:
      "Premium website concept for a roofing contractor specializing in modern metal roofing and high-end residential projects.",

    image: "/images/projects/elitemetal.png",

    url: "https://elite-metal.vercel.app",

    technologies: ["React", "TypeScript", "Tailwind CSS"],

    features: [
      "Standing Seam Metal",
      "Project Gallery",
      "Materials Guide",
      "Warranty",
      "Financing",
    ],

    featured: true,

    engineBadge: "React",
    specSummary: "Premium Metal Roofing Website",
  },

  {
    id: "procore",
    number: "04",
    title: "ProCore Commercial Roofing",
    category: "Commercial Roofing",
    type: "Commercial",

    description:
      "Professional B2B roofing website concept for commercial flat roofing, roof coatings and ongoing maintenance services.",

    image: "/images/projects/procore.png",

    url: "https://pro-core-virid.vercel.app",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    features: [
      "Commercial Roofing",
      "Roof Coatings",
      "Maintenance",
      "Industries Served",
      "Quote Request",
    ],

    featured: true,

    engineBadge: "Next.js / React",
    specSummary: "Commercial Roofing Website",
  },

  {
    id: "roofpro",
    number: "05",
    title: "RoofPro USA",
    category: "Multi-Location Roofing",
    type: "Multi-Location",

    description:
      "Scalable roofing website concept for a contractor serving multiple cities and service areas.",

    image: "/images/projects/roofpro.png",

    url: "https://roof-pro-iota.vercel.app",

    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],

    features: [
      "City Pages",
      "Service Area Pages",
      "Storm Services",
      "Local Reviews",
      "Location Navigation",
    ],

    featured: true,

    engineBadge: "Next.js",
    specSummary: "Multi-Location Roofing Website",
  },

  {
    id: "roofright",
    number: "06",
    title: "RoofRight Exteriors",
    category: "Roofing + Gutters + Siding",
    type: "Residential",

    description:
      "Modern exterior-services website concept for a contractor offering roofing, gutters and siding.",

    image: "/images/projects/roofright.png",

    url: "https://roof-right-xi.vercel.app",

    technologies: ["WordPress", "Elemetor Pro", "PHP", "Tailwind CSS"],

    features: [
      "Roofing Systems",
      "Seamless Gutters",
      "Siding",
      "Quote Request",
      "Projects",
      "Service Areas",
    ],

    featured: true,

    engineBadge: "WordPress",
    specSummary: "Roofing & Exterior Services",
  },
];

export const leadFunnel = {
  badge: "DESIGNED FOR CONVERSIONS",

  headline: "Built for Calls, Quotes & New Leads",

  subheadline:
    "The website structure is designed to make the customer journey simple—from discovering a roofing company to learning about its services, building confidence and requesting an estimate.",

  stages: [
    {
      stage: "STAGE 01",
      title: "Local Search & Traffic",
      description:
        "A homeowner finds the roofing company through search, referrals, social media, advertising or another traffic source.",
      icon: "travel_explore",
    },
    {
      stage: "STAGE 02",
      title: "Fast First Impression",
      description:
        "The visitor lands on a professional, mobile-friendly page with clear navigation and relevant information.",
      icon: "bolt",
    },
    {
      stage: "STAGE 03",
      title: "Relevant Services",
      description:
        "Visitors quickly find the roofing service they need, such as repair, replacement or storm damage.",
      icon: "roofing",
    },
    {
      stage: "STAGE 04",
      title: "Trust & Proof",
      description:
        "Project photos, reviews, service information and company details help visitors understand and evaluate the business.",
      icon: "verified",
    },
    {
      stage: "STAGE 05",
      title: "Quote Request",
      description:
        "A simple contact or estimate flow gives visitors a clear next step without unnecessary friction.",
      icon: "format_list_bulleted",
    },
    {
      stage: "CONVERSION",
      title: "New Inquiry",
      description:
        "The visitor can call, request an estimate or submit an inquiry through the contractor's preferred contact method.",
      icon: "phone_in_talk",
      highlight: true,
    },
  ],
};

export const services = [
  {
    number: "01",

    title: "Roofing Website Design & Development",

    description:
      "Professional roofing websites built to present your services, projects, company information and contact options clearly across every device.",

    badge: "WordPress • Next.js",

    icon: "architecture",

    features: [
      "Custom visual direction",
      "Roofing service pages",
      "Project galleries",
      "Clear calls to action",
    ],
  },

  {
    number: "02",

    title: "Website Redesign & Modernization",

    description:
      "Transform an outdated contractor website into a cleaner, more modern and easier-to-use experience.",

    badge: "Website Redesign",

    icon: "auto_fix_high",

    features: [
      "UI modernization",
      "Mobile improvements",
      "Better information hierarchy",
      "Conversion-focused layouts",
    ],
  },

  {
    number: "03",

    title: "Estimate & Quote Request Optimization",

    description:
      "Create clearer contact and estimate-request experiences so visitors can quickly understand how to get in touch.",

    badge: "Conversion-Focused",

    icon: "price_change",

    features: [
      "Simple inquiry flows",
      "Service-specific forms",
      "Clear calls to action",
      "Contact integration",
    ],
  },

  {
    number: "04",

    title: "Storm Damage Landing Pages",

    description:
      "Focused landing pages for storm damage, emergency repairs and other high-intent roofing services.",

    badge: "Campaign Ready",

    icon: "thunderstorm",

    features: [
      "Emergency service CTA",
      "Storm damage information",
      "Inspection request",
      "Service-area targeting",
    ],
  },

  {
    number: "05",

    title: "Speed & Mobile Optimization",

    description:
      "Improve the experience of an existing website by addressing common performance, image and mobile usability issues.",

    badge: "Performance-Focused",

    icon: "speed",

    features: [
      "Image optimization",
      "Mobile improvements",
      "Performance cleanup",
      "Technical improvements",
    ],
  },

  {
    number: "06",

    title: "Ongoing Maintenance & Support",

    description:
      "Keep your website updated with new projects, service changes, content updates and technical improvements.",

    badge: "Ongoing Support",

    icon: "support_agent",

    features: [
      "Content updates",
      "Website improvements",
      "Technical maintenance",
      "Developer support",
    ],
  },
];

export const processSteps = [
  {
    step: "01",

    title: "Discover",

    description:
      "Understand your roofing services, target customers, service areas and website goals.",
  },

  {
    step: "02",

    title: "Audit",

    description:
      "Review the current website, mobile experience, structure and conversion opportunities.",
  },

  {
    step: "03",

    title: "Plan",

    description:
      "Create the information architecture, page structure and user journey for the new website.",
  },

  {
    step: "04",

    title: "Design",

    description:
      "Create a professional visual direction tailored to the roofing business and its audience.",
  },

  {
    step: "05",

    title: "Develop",

    description:
      "Build the website using WordPress, React or Next.js based on the project's actual requirements.",
  },

  {
    step: "06",

    title: "Launch",

    description:
      "Test the website across devices, review the final content and launch the finished project.",
  },
];

export const about = {
  heading: "Meet Mohamed Islam D.",

  subheading: "The Developer Behind DMI",

  name: "Mohamed Islam D.",

  role: "Lead Web Developer at DMI",

  location: "Algeria — Remote Worldwide",

  availability: "Available for New Projects",

  profileImage: "/images/profile/mohamed-about.jpg",

  heroProfileImage: "/images/profile/mohamed-hero.jpg",

  bioParagraph1:
    "I'm Mohamed Islam D., the developer behind DMI. I specialize in building modern websites and web applications using WordPress, React, Next.js and full-stack technologies with an experience of over four years. I work remotely with businesses internationally and focus on creating professional, responsive and performance-focused digital experiences for roofing and exterior-service businesses.",

  bioParagraph2:
    "With DMI, you work directly with the developer building your website. My goal is to keep communication clear, development practical and the final website aligned with your business goals.",

  marketsBanner:
    "Serving roofing and exterior contractors across the USA, Canada, United Kingdom, Australia and UAE.",
};

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5 & Semantic HTML",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
  ],

  cms: [
    "WordPress",
    "WooCommerce",
    "Gutenberg",
    "Custom WordPress Development",
  ],

  integrations: [
    "Stripe",
    "Cloudinary",
    "API Integrations",
    "Email Integrations",
  ],
};

export const whyDMI = [
  {
    title: "Roofing-Focused",
    description:
      "The website structure, messaging and visual direction are built with roofing businesses and their customers in mind.",
    icon: "roofing",
  },

  {
    title: "Built Around Clear Actions",
    description:
      "Calls, estimate requests and contact options are treated as important parts of the user experience.",
    icon: "call",
  },

  {
    title: "Modern Development",
    description:
      "Use modern technologies and development practices selected according to the needs of each project.",
    icon: "code",
  },

  {
    title: "Mobile-First Experience",
    description:
      "Layouts are designed to remain clear, fast and easy to use across phones, tablets and desktops.",
    icon: "smartphone",
  },

  {
    title: "Direct Communication",
    description:
      "You communicate directly with Mohamed throughout the project instead of being passed between multiple layers.",
    icon: "forum",
  },

  {
    title: "Long-Term Support",
    description:
      "Support can continue after launch through maintenance, content changes and future website improvements.",
    icon: "handshake",
  },
];

export const credibilityBanner = {
  title: "Selected Work, Built to Be Shown",
  description:
    "The portfolio currently includes original roofing website concepts and demos. As real client projects are completed, verified client feedback and case studies will be added here.",

  ctaLabel: "Become a Featured Project",

  ctaUrl: "#audit-form",
};

export const testimonials = [];

/*
  Keep this array empty until you have genuine client testimonials.

  Example later:

  export const testimonials = [
    {
      id: "testimonial-1",
      quote: "Real client feedback goes here.",
      author: "Client Name",
      role: "Owner",
      company: "Company Name",
      location: "USA",
    },
  ];
*/

export const faq = [
  {
    id: "faq-1",

    question: "Do you work with roofing companies outside Algeria?",

    answer:
      "Yes. I work remotely with businesses internationally and can collaborate through email, video calls and online project tools.",
  },

  {
    id: "faq-2",

    question: "Do you build WordPress websites?",

    answer:
      "Yes. WordPress can be a practical choice for roofing companies that want a professional website that is easy to update and maintain.",
  },

  {
    id: "faq-3",

    question: "Can you build custom React or Next.js websites?",

    answer:
      "Yes. React and Next.js can be used when a project needs a more customized interface, advanced functionality or a different development approach.",
  },

  {
    id: "faq-4",

    question: "Can you redesign an existing roofing website?",

    answer:
      "Yes. I can redesign the visual experience, improve mobile usability, reorganize content and modernize the overall website based on its current needs.",
  },

  {
    id: "faq-5",

    question: "Can you integrate quote request forms and other tools?",

    answer:
      "Yes. Depending on the project, I can integrate quote request forms, email notifications, booking tools, analytics and other third-party services.",
  },

  {
    id: "faq-6",

    question: "Do you provide ongoing maintenance after launch?",

    answer:
      "Yes. Ongoing support can include content changes, website updates, technical fixes and future improvements.",
  },
];

export const auditCta = {
  badge: "NO COST • NO OBLIGATION",

  heading: "Get a Free Roofing Website Audit",

  description:
    "I'll review your website and highlight practical opportunities to improve the design, mobile experience, performance and quote-request journey.",

  turnaround: "Free Initial Review",

  turnaroundSub: "Delivered through your preferred contact method",

  checklist: [
    "Website Structure Review",
    "Mobile Usability Check",
    "Practical Improvement Suggestions",
  ],

  buttonLabel: "Request My Free Audit",

  destinationUrl: "mailto:islammohamed.djabri@gmail.com",
};

export const contact = {
  heading: "Ready to Improve Your Roofing Website?",

  subheading:
    "Have an outdated website, no website, or a site that could provide a better experience? Let's discuss what can be improved.",

  email: "islammohamed.djabri@gmail.com",

  phone: "",

  form: {
    fullNameLabel: "Your Full Name *",

    companyNameLabel: "Roofing Company Name *",

    emailLabel: "Email Address *",

    websiteLabel: "Current Website URL (Optional)",

    projectTypeLabel: "Project Scope / Primary Need",

    notesLabel: "Your Business Goals / Pain Points",

    submitButton: "Send Inquiry & Request Audit",

    options: [
      {
        value: "new",
        label: "Brand New Roofing Website",
      },

      {
        value: "redesign",
        label: "Full Redesign of Existing Website",
      },

      {
        value: "funnel",
        label: "Quote Request & Lead Funnel Optimization",
      },

      {
        value: "speed",
        label: "Speed & Mobile Performance Improvements",
      },

      {
        value: "maintenance",
        label: "Ongoing Website Maintenance",
      },
    ],
  },
};

export const finalCta = {
  badge: "READY TO GET STARTED?",

  heading: "Turn Your Website Into a Better Sales Tool",

  text:
    "A professional roofing website should make it easy for potential customers to understand your services, trust your business and request a quote.",

  buttonLabel: "Talk to DMI / Start a Project",

  buttonUrl: "#audit-form",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohamed-d-20b5ba418",
    icon: "linkedin",
  },

  {
    name: "GitHub",
    url: "https://www.github.com/MohamedIslamDjabri",
    icon: "github",
  },

  {
    name: "Fiverr",
    url: "https://www.fiverr.com/users/mohamed_website",
    icon: "fiverr",
  },

  {
    name: "Instagram",
    url: "https://www.instagram.com/dmi.roofingweb",
    icon: "instagram",
  },

  {
    name: "Email",
    url: "mailto:islammohamed.djabri@gmail.com",
    icon: "mail",
  },
];

export const footer = {
  brand: "DMI",

  tagline: "ROOFING WEB DEVELOPMENT",

  developerCredit:
    "Built by Mohamed Islam D. — Algeria • Working remotely with contractors and businesses worldwide.",

  statusText: "Available for Selected Projects",

  copyright:
    "© 2026 DMI Web Development. All rights reserved.",

  tagBadge: "Roofing Websites & Web Development",
};

export const seo = {
  title: "DMI | Roofing Websites for Contractors",

  description:
    "DMI builds modern, responsive and conversion-focused websites for roofing contractors and exterior-service businesses.",

  keywords: [
    "Roofing website design",
    "Roofing contractor website",
    "Roofing web design",
    "Roofing website redesign",
    "Roofing web developer",
    "Contractor website design",
    "Roofing website development",
    "DMI",
    "Mohamed Islam D.",
  ],

  ogImage: "/images/projects/apexshield.jpg",
};
