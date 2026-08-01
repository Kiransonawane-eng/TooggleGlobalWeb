export const COMPANY = {
  name: "Tooggle Global",
  legal: "TOOGGLE GLOBAL CORPORATIONS",
  tagline: "Smart Solutions. Global Impact.",
  email: "info@tooggleglobal.com",
  support: "support@tooggleglobal.com",
  website: "www.tooggleglobal.com",
  phone: "+91 90044 03222",
  phoneTel: "+919004403222",
  gstin: "27AKAPA9021F1ZP",
  pan: "AKAPA9021F",
  address: "Flat No -304, Shantaram CHS, Vitawa, D V Road, Surya Nagar",
  hours: "Monday – Saturday · 9:30 AM – 7:00 PM IST",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Technology", to: "/technology" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
] as const;

export const PRODUCTS = [
  {
    slug: "spiritual-app",
    icon: "temple",
    name: "Spiritual App",
    tagline: "A complete devotional ecosystem",
    description:
      "A complete spiritual ecosystem including daily devotional content, temple information, live darshan, astrology, donations, festivals, devotional music, community features and event management.",
    features: [
      "Daily devotional content",
      "Temple information",
      "Live darshan streaming",
      "Astrology & panchang",
      "Secure donations",
      "Festivals & events",
      "Devotional music",
      "Community features",
    ],
  },
  {
    slug: "retail-management-system",
    icon: "cart",
    name: "Retail Management System",
    tagline: "Run every counter from one cloud dashboard",
    description:
      "End-to-end retail operations with inventory, billing and analytics unified in a single cloud platform built for multi-store businesses.",
    features: [
      "Inventory management",
      "Billing",
      "Barcode scanner",
      "Purchase management",
      "Supplier management",
      "GST billing",
      "Sales analytics",
      "Customer loyalty",
      "Cloud dashboard",
    ],
  },
  {
    slug: "restaurant-management-platform",
    icon: "restaurant",
    name: "Restaurant Management Platform",
    tagline: "From order to doorstep, one platform",
    description:
      "A modern restaurant operating system covering front of house, kitchen, delivery and guest loyalty with real-time synchronisation.",
    features: [
      "POS",
      "Kitchen display",
      "QR menu",
      "Online ordering",
      "Reservations",
      "Billing",
      "Delivery tracking",
      "Inventory",
      "Customer rewards",
    ],
  },
  {
    slug: "pharmacy-management-system",
    icon: "medical",
    name: "Pharmacy Management System",
    tagline: "Compliant, connected pharmacy operations",
    description:
      "Purpose-built pharmacy software with medicine inventory, prescription workflows, compliance-ready billing and an online storefront.",
    features: [
      "Medicine inventory",
      "Expiry alerts",
      "Prescription management",
      "GST billing",
      "Supplier management",
      "Purchase orders",
      "Online pharmacy",
      "Reports",
      "Healthcare dashboard",
    ],
  },
] as const;

export const WHY_US = [
  { title: "Enterprise Grade Security", desc: "Encrypted data, role-based access and audited release pipelines." },
  { title: "Cloud Ready", desc: "Cloud-native deployments on AWS and Google Cloud from day one." },
  { title: "Scalable Architecture", desc: "Microservice-friendly systems that grow with your transaction volume." },
  { title: "AI Powered Solutions", desc: "Forecasting, assistants and automation embedded into daily workflows." },
  { title: "Cross Platform Apps", desc: "One codebase across Android, iOS and web with native performance." },
  { title: "24×7 Support", desc: "Round-the-clock monitoring and a dedicated escalation desk." },
  { title: "Affordable Pricing", desc: "Transparent engagement models tuned for growing businesses." },
  { title: "Fast Deployment", desc: "Production-ready launches in weeks, not quarters." },
  { title: "Experienced Engineers", desc: "Senior product, cloud and mobile specialists on every engagement." },
] as const;

export const INDUSTRIES = [
  { name: "Retail", desc: "Billing, inventory and loyalty for single and multi-store chains." },
  { name: "Healthcare", desc: "Clinic, pharmacy and diagnostics platforms with compliance built in." },
  { name: "Restaurants", desc: "POS, kitchen and delivery systems for high-volume service." },
  { name: "Temples", desc: "Devotee engagement, donations, darshan and event management." },
  { name: "Education", desc: "Learning platforms, admissions and campus administration." },
  { name: "Manufacturing", desc: "Production tracking, quality control and supply chain visibility." },
  { name: "Finance", desc: "Secure lending, collections and reporting workflows." },
  { name: "Logistics", desc: "Fleet, route and last-mile delivery intelligence." },
  { name: "Hospitality", desc: "Bookings, guest experience and property operations." },
] as const;

export const TECH_STACK = [
  { name: "Flutter", group: "Mobile" },
  { name: "Android", group: "Mobile" },
  { name: "Java", group: "Backend" },
  { name: "Spring Boot", group: "Backend" },
  { name: "React", group: "Frontend" },
  { name: "Angular", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "Firebase", group: "Cloud" },
  { name: "AWS", group: "Cloud" },
  { name: "Google Cloud", group: "Cloud" },
  { name: "Docker", group: "DevOps" },
  { name: "Kubernetes", group: "DevOps" },
  { name: "MySQL", group: "Data" },
  { name: "PostgreSQL", group: "Data" },
  { name: "MongoDB", group: "Data" },
  { name: "OpenAI", group: "AI" },
] as const;

export const PROCESS = [
  { step: "Discovery", desc: "Business goals, users and constraints mapped into a product brief." },
  { step: "Planning", desc: "Scope, architecture, milestones and delivery roadmap agreed." },
  { step: "Design", desc: "Experience design and UI systems validated with clickable prototypes." },
  { step: "Development", desc: "Sprint-based engineering with continuous integration." },
  { step: "Testing", desc: "Functional, performance and security QA across devices." },
  { step: "Deployment", desc: "Cloud release, store publishing and go-live support." },
  { step: "Support", desc: "Monitoring, enhancements and 24×7 assistance." },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Tooggle Global replaced four disconnected tools with one retail platform. Billing time dropped by half and we finally trust our stock numbers across all nine stores.",
    name: "Rajesh Menon",
    role: "Director of Operations, Sunrise Retail Group",
  },
  {
    quote:
      "Their team shipped our restaurant POS and kitchen display in ten weeks. Order errors fell sharply and the delivery tracking gave our guests real confidence.",
    name: "Priya Nair",
    role: "Founder, Urban Spice Hospitality",
  },
  {
    quote:
      "Expiry alerts and prescription workflows alone paid for the project. Support is genuinely responsive, which matters when a pharmacy counter cannot stop.",
    name: "Dr. Anand Kulkarni",
    role: "Managing Partner, MediCare Pharmacy Chain",
  },
] as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Business Clients" },
  { value: 10, suffix: "+", label: "Industry Solutions" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
] as const;