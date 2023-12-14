export default function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/* Navbar Const  */
export const navigation = [
  {
    name: "Home",
    key: "home",
    href: "/",
    current: true,
  },
  {
    name: "Journal",
    key: "products",
    href: "/products",
    current: false,
  },
  {
    name: "About",
    key: "about",
    href: "/about",
    current: false,
  },
  {
    name: "Contact",
    key: "contact",
    href: "/contact",
    current: false,
  },
];

export const profileNavigation = [
  {
    name: "Your Profile",
    key: "profile",
    href: "/profile",
  },
];

/* Hero Const */
export const heroImagesSection1 = [
  {
    name: "Hero Image 1",
    alt: "Image 1 - Handcrafted Haven",
    src: "/hero-img-1.png",
    width: 150,
    height: 200,
    class: "h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100",
  },
  {
    name: "Hero Image 2",
    alt: "Image 2 - Handcrafted Haven",
    src: "/hero-img-2.png",
    width: 150,
    height: 200,
    class: "h-64 w-44 overflow-hidden rounded-lg",
  },
];
export const heroImagesSection2 = [
  {
    name: "Hero Image 3",
    alt: "Image 3 - Handcrafted Haven",
    src: "/hero-img-4.png",
    width: 150,
    height: 200,
    class: "h-64 w-44 overflow-hidden rounded-lg",
  },
  {
    name: "Hero Image 4",
    alt: "Image 4 - Handcrafted Haven",
    src: "/hero-img-3.png",
    width: 150,
    height: 200,
    class: "h-64 w-44 overflow-hidden rounded-lg",
  },
  {
    name: "Hero Image 5",
    alt: "Image 5 - Handcrafted Haven",
    src: "/hero-img-5.png",
    width: 150,
    height: 200,
    class: "h-64 w-44 overflow-hidden rounded-lg",
  },
];
export const heroImagesSection3 = [
  {
    name: "Hero Image 6",
    alt: "Image 6 - Handcrafted Haven",
    src: "/hero-img-6.png",
    width: 150,
    height: 200,
    class: "h-64 w-44 overflow-hidden rounded-lg",
  },
  {
    name: "Hero Image 7",
    alt: "Image 7 - Handcrafted Haven",
    src: "/hero-img-7.png",
    width: 150,
    height: 200,
    class: "h-64 w-44 overflow-hidden rounded-lg",
  },
];

/* Callouts Const */

export const callouts = [
  {
    name: "Registro 1",
    description:
      "Discover the artisanal sophistication of our beaded bracelets, where each bead tells a story of style and meticulous craftsmanship.",
    imageSrc: "/product-handcrafted-1.png",
    imageAlt: "Hand Knitted Crochet Bag",
    href: "#",
  },
  {
    name: "Crochet Bag",
    description:
      "Explore the relaxed elegance of our crochet bag, where art and function intertwine in every stitch.",
    imageSrc: "/product-handcrafted-2.png",
    imageAlt: "Macramé Art: Bohemian Decoration",
    href: "#",
  },
  {
    name: "Crocheted Christmas Angel",
    description:
      "Celebrate the magic of the season with our collection of handwoven Christmas decorations.",
    imageSrc: "/product-handcrafted-3.png",
    imageAlt: "Christmas Decorations - Crocheted Angels",
    href: "#",
  },
];

/* Stats Const */
export const journaLiferecords = [
  { id: 1, name: "Number of daily records", value: "10,000+" },
  { id: 2, name: "Registered users", value: "50,000+" },
  { id: 3, name: "Active Members Daily", value: "25,000+" },
];

// /* Articles */

// export const listOfArticles = [
//   {
//     id: 1,
//     title: "The Art of Handmade Jewelry",
//     subtitle:
//       "Explore the intricate world of artisanal jewelry and the stories woven into each handmade piece.",
//     image: "/crafting-elegance.jpg",
//     alt: "Handcrafted jewelry on display",
//   },
//   {
//     id: 2,
//     title: "Registro 2",
//     subtitle:
//       "Discover how handcrafted décor adds a unique touch to your home, reflecting the passion of skilled artisans.",
//     image: "/spaces-with-artistry.jpg",
//     alt: "Artisanal décor enhancing living spaces",
//   },
//   {
//     id: 3,
//     title: "A Commitment to the Planet",
//     subtitle:
//       "Delve into the eco-friendly practices embraced by Handcrafted Haven and its community of conscious creators.",
//     image: "/sustainability-in-handcrafting.jpg",
//     alt: "Sustainable handcrafting practices",
//   },
// ];

/* Frequently Questions */

export const faqSection = [
  {
    id: 1,
    question: "What makes Handcrafted Haven different?",
    answer:
      "Handcrafted Haven is a unique platform that connects you with a curated selection of handcrafted items from skilled artisans. We prioritize authenticity, sustainability, and community, offering a personalized shopping experience.",
  },
  {
    id: 2,
    question: "How can I support local artisans through Handcrafted Haven?",
    answer:
      "By shopping on Handcrafted Haven, you directly support local artisans. Our platform provides a space for them to showcase their creations, and your purchases contribute to the growth of their craft and community.",
  },
  {
    id: 3,
    question: "Are the handcrafted items sustainable?",
    answer:
      "Yes, sustainability is a core value at Handcrafted Haven. We strive to offer a range of eco-friendly products, and many of our artisans prioritize sustainable materials and practices in their creations.",
  },
  {
    id: 4,
    question: "Can I customize my orders?",
    answer:
      "Absolutely! Many of our artisans offer customization options. Look for products with customization features, and you can tailor them to match your style and preferences.",
  },
  {
    id: 5,
    question: "How do I join the Handcrafted Haven community?",
    answer:
      "Joining our community is simple! Click on the 'Join the Haven' button on our homepage, fill in your details, and become part of a passionate community that celebrates the beauty of handmade creations.",
  },
];

/* Footer  */

export const usefulLinks = [
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const latestProducts = [
  { label: "New Releases", href: "/new-products" },
  { label: "Special Offers", href: "/offers" },
  { label: "Featured Products", href: "/featured-products" },
];

export const socialLinks = [
  { platform: "Facebook", icon: "/icon-facebook.svg", href: "#" },
  { platform: "Twitter", icon: "/icon-twitter.svg", href: "#" },
  { platform: "Instagram", icon: "/icons-instagram.svg", href: "#" },
];

export const contact = [
  { label: "info@journallife.com" },
  { label: "+(504) 3206-4826" },
  { label: "Tegucigalpa, Honduras" },
];

/* ------------------- Dashboard ---------------- */
/* Cards */
export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];

/* Transactions */

export const transactionsData = [
  {
    id: 1,
    name: "John Doe",
    status: "Pending",
    date: "2021-06-01",
    price: "$3200.00",
  },
  {
    id: 2,
    name: "Mary Jane",
    status: "Cancelled",
    date: "2021-06-01",
    price: "$3200.00",
  },
  {
    id: 3,
    name: "Katie Smith",
    status: "Success",
    date: "2021-06-01",
    price: "$3200.00",
  },
  {
    id: 4,
    name: "Oliver Smith",
    status: "Success",
    date: "2021-06-01",
    price: "$3200.00",
  },
  {
    id: 5,
    name: "William Owens",
    status: "Success",
    date: "2021-06-01",
    price: "$3200.00",
  },
  /*{
    id: 6,
    name: 'Nancy Jones',
    status: 'Cancelled',
    date: '2021-06-01',
    price: '$3200.00'
  },
  {
    id: 7,
    name: 'Eva Kowalski',
    status: 'Pending',
    date: '2021-06-01',
    price: '$3200.00'
  },
  {
    id: 8,
    name: 'Xavier Carter',
    status: 'Cancelled',
    date: '2021-06-01',
    price: '$3200.00'
  }, */
];
