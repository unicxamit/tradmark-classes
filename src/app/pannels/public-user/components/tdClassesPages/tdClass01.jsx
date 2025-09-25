import React, { useState, useEffect, useRef } from "react";
// 8931955546
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp, Tag } from "lucide-react";
import {
  FaCheckCircle,
  FaCubes,
  FaFlask,
  FaIndustry,
  FaMicroscope,
  FaSeedling,
  FaTimesCircle,
  FaTools,
} from "react-icons/fa";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import urlImage from "../calculatorImage/gst.png";
import { IoSearch } from "react-icons/io5";
import { PlayCircle, X } from "lucide-react";
import contact from "../tdClassImages/contact us.png";
import { PiArrowElbowRightUpThin } from "react-icons/pi";
import {
  Globe2,
  AlertTriangle,
  Layers,
  Landmark,
  ShieldCheck,
  FileText,
  DollarSign,
  Gavel,
  UserCheck,
  Activity,
  Gift,
  Store,
} from "lucide-react";
import {
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaUserCircle,
} from "react-icons/fa";
import { LuMessageSquareShare } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import whoshould from "../tdClassImages/whoshouldregister.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import benifite from "../tdClassImages/benifite02.png";
import done from "../tdClassImages/done.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";
import { GiTShirt, GiRunningShoe, GiPartyHat } from "react-icons/gi";
import class01 from "../tdClassImages/introductionsection03.png";
import "../tdClassCss/tdClasscss.css";
import experties from "../tdClassImages/ourExpertiese04.png";
import { Link } from "react-router-dom";
import JobZImage from "../../../../common/jobz-img";
import whychoosus from "../tdClassImages/whychooseus06.jpg";
import process01 from "../tdClassImages/1.png";
import process02 from "../tdClassImages/2.png";
import process03 from "../tdClassImages/3.png";
import process04 from "../tdClassImages/4.png";
import process05 from "../tdClassImages/5.png";
import classesData from "./tradmarkClassesDynamicDataList";
const sections = [
  { id: "class1", label: "Class1" },
  { id: "included", label: "Goods/Guide" },
  // { id: "excluded", label: "Excluded" },
  { id: "expertise", label: "Expertise" },
  { id: "eligibility", label: "Who Should Register" },
  { id: "benefits", label: "Benefits" },
  { id: "process", label: "Process" },
  { id: "whyus", label: "Why Choose Us" },
  { id: "faq", label: "FAQ" },
  // { id: "articles", label: "Articles" },
];

const classes = Array.from({ length: 45 }, (_, i) => `C-${i + 1}`);
const TdClass01 = () => {
  // Hero section search bar
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cls, setCls] = useState(null);
  const navigate = useNavigate();
  // fetch data
  const { id } = useParams();

  useEffect(() => {
    const selectedClass = classesData.find((c) => String(c.id) === id);
    console.log(selectedClass, "selectedclass data");
    setCls(selectedClass);
  }, [id]); //

  // fetch data
  const filteredClasses = classes.filter((cls) =>
    cls.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredClasses, "filterclasses");
  const handleClassClick = (cls) => {
    navigate(`/class/${cls}`);
  };
  // Hero section search bar
  // goods product
  const gridRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const ITEMS_PER_CLICK = 2;
  const COLUMNS = 1;

  const getRowHeight = () => {
    const grid = gridRef.current;
    if (!grid) return 0;

    const firstItem = grid.children[0];
    if (!firstItem) return 0;

    const itemHeight = firstItem.getBoundingClientRect().height;
    const styles = window.getComputedStyle(grid);
    const rowGap = parseFloat(styles.rowGap || styles.gap || "0");

    return itemHeight + (Number.isNaN(rowGap) ? 0 : rowGap);
  };

  const scrollByItems = (direction) => {
    const grid = gridRef.current;
    if (!grid) return;

    const rowsToScroll = Math.ceil(ITEMS_PER_CLICK / COLUMNS);
    const delta = rowsToScroll * getRowHeight() * direction;
    const maxTop = grid.scrollHeight - grid.clientHeight;
    const nextTop = Math.min(Math.max(0, grid.scrollTop + delta), maxTop);

    grid.scrollTo({ top: nextTop, behavior: "smooth" });
    updateButtons();
  };

  const updateButtons = () => {
    const grid = gridRef.current;
    if (!grid) return;

    const { scrollTop, scrollHeight, clientHeight } = grid;
    setIsAtTop(scrollTop <= 0);
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
  };

  const scrollUp = () => {
    if (!isAtTop) scrollByItems(-1);
  };

  const scrollDown = () => {
    if (!isAtBottom) scrollByItems(1);
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    updateButtons();
    grid.addEventListener("scroll", updateButtons);

    return () => {
      grid.removeEventListener("scroll", updateButtons);
    };
  }, []);
  // goods products
  // tabbar
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const sectionRefs = useRef({});
  const gridRefs = useRef(null);

  const handleTabClick = (id) => {
    const section = sectionRefs.current[id];

    if (section) {
      const topOffset = 190; // jitna gap chahiye upar se (px me)
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveTab(id);
    }
  };

  // tab bar section heading
  const [showNav, setShowNav] = useState(false);
  console.log(showNav, "shownav view");
  const heroRef = useRef(null);
  console.log(heroRef, "heroRef");
  useEffect(() => {
    const heroElement = document.getElementById("hero-section");
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // hero visible -> hide navbar
            setShowNav(false);
          } else {
            // hero invisible -> show navbar
            setShowNav(true);
          }
        });
      },
      { threshold: 0.2 } // thoda smooth trigger ke liye
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  // tab bar section
  const slides = [
    {
      img: process01,
    },
    {
      img: process02,
    },
    {
      img: process03,
    },
    {
      img: process04,
    },
    {
      img: process05,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };
  const testimonials = [
    {
      company: "ChalkUI",
      rating: 5,
      text: "(Testimonial) lorem ipsum dolor sit amet, consec adipiscing, sed do eiusmod tempor quis nostrud exercitation ullamco.",
      name: "Full name",
      role: "Company name",
    },
    {
      company: "ChalkUI",
      rating: 5,
      text: "(Testimonial) lorem ipsum dolor sit amet, consec adipiscing, sed do eiusmod tempor quis nostrud exercitation ullamco.",
      name: "Another User",
      role: "Company name",
    },
    {
      company: "ChalkUI",
      rating: 5,
      text: "(Testimonial) lorem ipsum dolor sit amet, consec adipiscing, sed do eiusmod tempor quis nostrud exercitation ullamco.",
      name: "Third User",
      role: "Company name",
    },
    {
      company: "ChalkUI",
      rating: 5,
      text: "(Testimonial) lorem ipsum dolor sit amet, consec adipiscing, sed do eiusmod tempor quis nostrud exercitation ullamco.",
      name: "Third User",
      role: "Company name",
    },
    {
      company: "ChalkUI",
      rating: 5,
      text: "(Testimonial) lorem ipsum dolor sit amet, consec adipiscing, sed do eiusmod tempor quis nostrud exercitation ullamco.",
      name: "Third User",
      role: "Company name",
    },
  ];

  const [currentIndex2, setCurrentIndex2] = useState(0);

  const nextSlide = () => {
    setCurrentIndex2((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex2(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // faq section

  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    faqRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openIndex === index ? ref.scrollHeight + "px" : "0px";
      }
    });
  }, [openIndex]);

  // const productList = [
  //   {
  //     id: 1,
  //     name: "Clothing (General & Outerwear)",
  //     subcategories: [
  //       {
  //         id: 1,
  //         name: "Albs",
  //       },
  //       {
  //         id: 2,
  //         name: "Aprons",
  //       },
  //       {
  //         id: 3,
  //         name: "Ascots",
  //       },
  //       {
  //         id: 4,
  //         name: "Baby pants",
  //       },
  //       {
  //         id: 5,
  //         name: "Bath robes",
  //       },
  //       {
  //         id: 6,
  //         name: "Beach clothes",
  //       },
  //       {
  //         id: 7,
  //         name: "Bodices",
  //       },
  //       {
  //         id: 8,
  //         name: "Breeches",
  //       },
  //       {
  //         id: 9,
  //         name: "Camisoles",
  //       },
  //       {
  //         id: 10,
  //         name: "Chasubles",
  //       },
  //       {
  //         id: 11,
  //         name: "Clothing",
  //       },
  //       {
  //         id: 12,
  //         name: "Coats",
  //       },
  //       {
  //         id: 13,
  //         name: "Combinations",
  //       },
  //       {
  //         id: 14,
  //         name: "Corselets",
  //       },
  //       {
  //         id: 15,
  //         name: "Corsets",
  //       },
  //       {
  //         id: 16,
  //         name: "Dresses",
  //       },
  //       {
  //         id: 17,
  //         name: "Dressing gowns",
  //       },
  //       {
  //         id: 18,
  //         name: "Embroidered clothing",
  //       },
  //       {
  //         id: 19,
  //         name: "Fur stoles",
  //       },
  //       {
  //         id: 20,
  //         name: "Furs",
  //       },
  //       {
  //         id: 21,
  //         name: "Gabardines",
  //       },
  //       {
  //         id: 22,
  //         name: "Jackets",
  //       },
  //       {
  //         id: 23,
  //         name: "Jerseys",
  //       },
  //       {
  //         id: 24,
  //         name: "Jumper dresses",
  //       },
  //       {
  //         id: 25,
  //         name: "Pinafore dresses",
  //       },
  //       {
  //         id: 26,
  //         name: "Knitwear",
  //       },
  //       {
  //         id: 27,
  //         name: "Latex clothing",
  //       },
  //       {
  //         id: 28,
  //         name: "Layettes",
  //       },
  //       {
  //         id: 29,
  //         name: "Liveries",
  //       },
  //       {
  //         id: 30,
  //         name: "Maniples",
  //       },
  //       {
  //         id: 31,
  //         name: "Mantillas",
  //       },
  //       {
  //         id: 32,
  //         name: "Costumes",
  //       },
  //       {
  //         id: 33,
  //         name: "Motorist clothing",
  //       },
  //       {
  //         id: 34,
  //         name: "Outerwear",
  //       },
  //       {
  //         id: 35,
  //         name: "Overalls",
  //       },
  //       {
  //         id: 36,
  //         name: "Smocks",
  //       },
  //       {
  //         id: 37,
  //         name: "Overcoats",
  //       },
  //       {
  //         id: 38,
  //         name: "Topcoats",
  //       },
  //       {
  //         id: 39,
  //         name: "Parkas",
  //       },
  //       {
  //         id: 40,
  //         name: "Pelerines",
  //       },
  //       {
  //         id: 41,
  //         name: "Pelisses",
  //       },
  //       {
  //         id: 42,
  //         name: "Petticoats",
  //       },
  //       {
  //         id: 43,
  //         name: "Ponchos",
  //       },
  //       {
  //         id: 44,
  //         name: "Ready clothing",
  //       },
  //       {
  //         id: 45,
  //         name: "Saris",
  //       },
  //       {
  //         id: 46,
  //         name: "Sarongs",
  //       },
  //       {
  //         id: 47,
  //         name: "Shirts",
  //       },
  //       {
  //         id: 48,
  //         name: "Short shirts",
  //       },
  //       {
  //         id: 49,
  //         name: "Skirts",
  //       },
  //       {
  //         id: 50,
  //         name: "Skorts",
  //       },
  //       {
  //         id: 51,
  //         name: "Suits",
  //       },
  //       {
  //         id: 52,
  //         name: "Stuff jackets",
  //       },
  //       {
  //         id: 53,
  //         name: "Sweat clothing",
  //       },
  //       {
  //         id: 54,
  //         name: "Sweaters",
  //       },
  //       {
  //         id: 55,
  //         name: "T-shirts",
  //       },
  //       {
  //         id: 56,
  //         name: "Togas",
  //       },
  //       {
  //         id: 57,
  //         name: "Trousers",
  //       },
  //       {
  //         id: 58,
  //         name: "Pants",
  //       },
  //       {
  //         id: 59,
  //         name: "Tutus",
  //       },
  //       {
  //         id: 60,
  //         name: "Uniforms",
  //       },
  //       {
  //         id: 61,
  //         name: "Waterproofs",
  //       },
  //       {
  //         id: 62,
  //         name: "Wedding dresses",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Underwear & Sleepwear",
  //     subcategories: [
  //       {
  //         id: 1,
  //         name: "Adhesive bras",
  //       },
  //       {
  //         id: 2,
  //         name: "Adhesive brassieres",
  //       },
  //       {
  //         id: 3,
  //         name: "Bathing drawers",
  //       },
  //       {
  //         id: 4,
  //         name: "Boxer shorts",
  //       },
  //       {
  //         id: 5,
  //         name: "Brassieres",
  //       },
  //       {
  //         id: 6,
  //         name: "Briefs (panties, knickers)",
  //       },
  //       {
  //         id: 7,
  //         name: "Girdles",
  //       },
  //       {
  //         id: 8,
  //         name: "Lingerie",
  //       },
  //       {
  //         id: 9,
  //         name: "Nipple pasties",
  //       },
  //       {
  //         id: 10,
  //         name: "Nightwear",
  //       },
  //       {
  //         id: 11,
  //         name: "Pyjamas / Pajamas",
  //       },
  //       {
  //         id: 12,
  //         name: "Slips",
  //       },
  //       {
  //         id: 13,
  //         name: "Teddies",
  //       },
  //       {
  //         id: 14,
  //         name: "Underclothing",
  //       },
  //       {
  //         id: 15,
  //         name: "Underpants",
  //       },
  //       {
  //         id: 16,
  //         name: "Underwear",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Footwear",
  //     subcategories: [
  //       {
  //         id: 1,
  //         name: "Ankle boots",
  //       },
  //       {
  //         id: 2,
  //         name: "Bath sandals",
  //       },
  //       {
  //         id: 3,
  //         name: "Bath slippers",
  //       },
  //       {
  //         id: 4,
  //         name: "Beach shoes",
  //       },
  //       {
  //         id: 5,
  //         name: "Boots",
  //       },
  //       {
  //         id: 6,
  //         name: "Boot uppers",
  //       },
  //       {
  //         id: 7,
  //         name: "Sports boots",
  //       },
  //       {
  //         id: 8,
  //         name: "Espadrilles",
  //       },
  //       {
  //         id: 9,
  //         name: "Football boots",
  //       },
  //       {
  //         id: 10,
  //         name: "Football shoes",
  //       },
  //       {
  //         id: 11,
  //         name: "Footwear",
  //       },
  //       {
  //         id: 12,
  //         name: "Footwear fittings",
  //       },
  //       {
  //         id: 13,
  //         name: "Footwear uppers",
  //       },
  //       {
  //         id: 14,
  //         name: "Galoshes / Goloshes",
  //       },
  //       {
  //         id: 15,
  //         name: "Gym shoes",
  //       },
  //       {
  //         id: 16,
  //         name: "Half-boots",
  //       },
  //       {
  //         id: 17,
  //         name: "Heels",
  //       },
  //       {
  //         id: 18,
  //         name: "Non-slip footwear",
  //       },
  //       {
  //         id: 19,
  //         name: "Sandals",
  //       },
  //       {
  //         id: 20,
  //         name: "Shoes",
  //       },
  //       {
  //         id: 21,
  //         name: "Ski boots",
  //       },
  //       {
  //         id: 22,
  //         name: "Slippers",
  //       },
  //       {
  //         id: 23,
  //         name: "Soles",
  //       },
  //       {
  //         id: 24,
  //         name: "Spats",
  //       },
  //       {
  //         id: 25,
  //         name: "Sports shoes",
  //       },
  //       {
  //         id: 26,
  //         name: "Valenki",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Headgear",
  //     subcategories: [
  //       {
  //         id: 1,
  //         name: "Berets",
  //       },
  //       {
  //         id: 2,
  //         name: "Caps",
  //       },
  //       {
  //         id: 3,
  //         name: "Cap peaks",
  //       },
  //       {
  //         id: 4,
  //         name: "Hanbok hats",
  //       },
  //       {
  //         id: 5,
  //         name: "Hat frames",
  //       },
  //       {
  //         id: 6,
  //         name: "Hats",
  //       },
  //       {
  //         id: 7,
  //         name: "Headbands",
  //       },
  //       {
  //         id: 8,
  //         name: "Headscarves / Scarfs",
  //       },
  //       {
  //         id: 9,
  //         name: "Headwear",
  //       },
  //       {
  //         id: 10,
  //         name: "Hoods",
  //       },
  //       {
  //         id: 11,
  //         name: "Mitres / Miters",
  //       },
  //       {
  //         id: 12,
  //         name: "Paper hats",
  //       },
  //       {
  //         id: 13,
  //         name: "Shower caps",
  //       },
  //       {
  //         id: 14,
  //         name: "Skull caps",
  //       },
  //       {
  //         id: 15,
  //         name: "Visors",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Accessories",
  //     subcategories: [
  //       {
  //         id: 1,
  //         name: "Bandanas",
  //       },
  //       {
  //         id: 2,
  //         name: "Belts",
  //       },
  //       {
  //         id: 3,
  //         name: "Bibs / Sleeved bibs",
  //       },
  //       {
  //         id: 4,
  //         name: "Boas",
  //       },
  //       {
  //         id: 5,
  //         name: "Braces / Suspenders",
  //       },
  //       {
  //         id: 6,
  //         name: "Collars",
  //       },
  //       {
  //         id: 7,
  //         name: "Cuffs",
  //       },
  //       {
  //         id: 8,
  //         name: "Wristbands",
  //       },
  //       {
  //         id: 9,
  //         name: "Dress shields",
  //       },
  //       {
  //         id: 10,
  //         name: "Driving gloves",
  //       },
  //       {
  //         id: 11,
  //         name: "Ear muffs",
  //       },
  //       {
  //         id: 12,
  //         name: "Garters",
  //       },
  //       {
  //         id: 13,
  //         name: "Gloves",
  //       },
  //       {
  //         id: 14,
  //         name: "Hairdressing capes",
  //       },
  //       {
  //         id: 15,
  //         name: "Money belts",
  //       },
  //       {
  //         id: 16,
  //         name: "Muffs",
  //       },
  //       {
  //         id: 17,
  //         name: "Neck gaiters",
  //       },
  //       {
  //         id: 18,
  //         name: "Neck tubes",
  //       },
  //       {
  //         id: 19,
  //         name: "Neckties",
  //       },
  //       {
  //         id: 20,
  //         name: "Pocket squares",
  //       },
  //       {
  //         id: 21,
  //         name: "Pockets",
  //       },
  //       {
  //         id: 22,
  //         name: "Sashes",
  //       },
  //       {
  //         id: 23,
  //         name: "Scarves / Scarfs",
  //       },
  //       {
  //         id: 24,
  //         name: "Shawls",
  //       },
  //       {
  //         id: 25,
  //         name: "Smart sportswear",
  //       },
  //       {
  //         id: 26,
  //         name: "Stockings",
  //       },
  //       {
  //         id: 27,
  //         name: "Veils",
  //       },
  //       {
  //         id: 28,
  //         name: "Woven scarves",
  //       },
  //       {
  //         id: 29,
  //         name: "Wristbands",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Sports & Special Wear",
  //     subcategories: [
  //       {
  //         id: 1,
  //         name: "Bathing suits / Swimsuits",
  //       },
  //       {
  //         id: 2,
  //         name: "Bathing trunks",
  //       },
  //       {
  //         id: 3,
  //         name: "Cyclists clothing",
  //       },
  //       {
  //         id: 4,
  //         name: "Cycling gloves",
  //       },
  //       {
  //         id: 5,
  //         name: "Fishing vests",
  //       },
  //       {
  //         id: 6,
  //         name: "Judo uniforms",
  //       },
  //       {
  //         id: 7,
  //         name: "Karate uniforms",
  //       },
  //       {
  //         id: 8,
  //         name: "Leotards",
  //       },
  //       {
  //         id: 9,
  //         name: "Leg warmers",
  //       },
  //       {
  //         id: 10,
  //         name: "Leggings (trousers)",
  //       },
  //       {
  //         id: 11,
  //         name: "Leggings (warmers)",
  //       },
  //       {
  //         id: 12,
  //         name: "Rash guards",
  //       },
  //       {
  //         id: 13,
  //         name: "Ski gloves",
  //       },
  //       {
  //         id: 14,
  //         name: "Sports jerseys",
  //       },
  //       {
  //         id: 15,
  //         name: "Sports singlets",
  //       },
  //       {
  //         id: 16,
  //         name: "Sweat underwear",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     name: "Misc & Functional",
  //     subcategories: [
  //       {
  //         id: 1,
  //         name: "Clothing linings",
  //       },
  //       {
  //         id: 2,
  //         name: "Detachable collars",
  //       },
  //       {
  //         id: 3,
  //         name: "Dress shields",
  //       },
  //       {
  //         id: 4,
  //         name: "Face masks",
  //       },
  //       {
  //         id: 5,
  //         name: "Face coverings",
  //       },
  //       {
  //         id: 6,
  //         name: "Fingerless gloves",
  //       },
  //       {
  //         id: 7,
  //         name: "Gaiters",
  //       },
  //       {
  //         id: 8,
  //         name: "Gaiter straps",
  //       },
  //       {
  //         id: 9,
  //         name: "Heelpieces footwear",
  //       },
  //       {
  //         id: 10,
  //         name: "Heelpieces stockings",
  //       },
  //       {
  //         id: 11,
  //         name: "Shoe studs",
  //       },
  //       {
  //         id: 12,
  //         name: "Boot studs",
  //       },
  //       {
  //         id: 13,
  //         name: "Sock suspenders",
  //       },
  //       {
  //         id: 14,
  //         name: "Bra straps",
  //       },
  //       {
  //         id: 15,
  //         name: "Trouser straps",
  //       },
  //       {
  //         id: 16,
  //         name: "Wigwams",
  //       },
  //     ],
  //   },
  // ];
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    card: {
      // maxWidth: "400px",
      padding: "1rem 0 0 0",
      marginLeft: "0",
      // border: "1px solid red",
    },
    heading: {
      textAlign: "left",
      fontSize: "2rem",
      fontWeight: 600,
      // color: "#1976d2",/
      marginBottom: "1rem",
    },
    list: {
      listStyle: "none",
      padding: "0 0 0 0.5rem",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.8rem",
      padding: "0.5rem 0",
      cursor: "pointer",
    },
    text: {
      fontSize: "1rem",
      color: "#333",
    },
    icon: {
      fontSize: "1.3rem",
    },
  };
  if (!cls) {
    return <p>Loading...</p>; // ya null, ya spinner
  }

  return (
    <>
      {/* breakcram */}
      <section
        className="hero-section"
        id="hero-section"
        ref={heroRef}
        // style={{ border: "1px solid red" }}
      >
        <div className="hero-container-wrapper">
          <div className="hero-container">
            {/* Left Content */}
            <div>
              <nav class="breadcrumb">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/trademark">Trademark</a>
                  </li>
                  <li class="active">Class {cls?.class}</li>
                </ul>
              </nav>
              <div className="hero-lefts">
                <h1 className="class-heading">
                  {cls?.heroTitle} <br />
                  <span className="highlight">
                    Trademark <span>Class {cls?.class}</span>
                  </span>
                </h1>

                <p className="hero-descs">
                  UniCX provides trusted guidance and a clear process to help
                  fashion brands protect their trademarks.
                </p>

                <div className="btn-group">
                  <button className="btn-primarys">
                    Get Started
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 m-1 "
                    >
                      <path
                        d="M9.5 1.5L1.5 9.5"
                        stroke="currentColor"
                        stroke-width="1.3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.5 8.83571V1.5H2.16429"
                        stroke="currentColor"
                        stroke-width="1.3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="btn-outlines"
                  >
                    <PlayCircle className="icon" /> Watch Demo
                  </button>
                </div>

                {/* Search Bar */}
                <div
                  style={{
                    position: "relative",
                    // height: "500px",
                    margin: "2rem auto",
                  }}
                >
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="Find another class (e.g., 'Class 9')"
                      value={searchTerm}
                      onFocus={() => setShowDropdown(true)}
                      onBlur={() =>
                        setTimeout(() => setShowDropdown(false), 200)
                      }
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                    <button className="search-btn">
                      <span className="icon">
                        <IoSearch size={18} />
                      </span>{" "}
                      Search
                    </button>
                  </div>

                  {showDropdown && (
                    <div className="hero-search-dropdown">
                      {filteredClasses.map((cls, index) => (
                        <div
                          key={index}
                          className="hero-search-dropdown-item"
                          onMouseDown={() => handleClassClick(cls)}
                        >
                          {cls}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="contact-form-card">
              <h3 style={{ color: "black" }}>Get in Touch</h3>
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                />
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="How can we help?"
                  required
                  defaultValue={""}
                />
                <button type="submit">
                  <LuMessageSquareShare
                    size={28}
                    style={{ padding: "0 0.2rem 0 0" }}
                  />{" "}
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div class="text-divider">
            <span>
              Trusted by Businesses and Recognized by Leading Industry Bodies
            </span>
          </div>
          <div className="footer-images">
            <JobZImage src="images/footer1/1.png" alt="image" />
            <JobZImage src="images/footer1/2.png" alt="image" />
            <JobZImage src="images/footer1/3.png" alt="image" />
            <JobZImage src="images/footer1/1.png" alt="image" />
            <JobZImage src="images/footer1/2.png" alt="image" />
            <JobZImage src="images/footer1/3.png" alt="image" />
          </div>
          {/* Modal */}
          {isOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <button
                  onClick={() => setIsOpen(false)}
                  className="modal-close"
                >
                  <X className="icon" />
                </button>
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={`nav-section ${showNav ? "slide-in" : "hidden"}`}>
        <aside className="nav-bar">
          <div className="nav-container">
            <ul className="nav-list">
              {sections.map((tab) => (
                <li
                  key={tab.id}
                  className={`nav-item ${
                    activeTab === tab.id ? "nav-active" : ""
                  }`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <span className="nav-label">{tab.label}</span>
                  <span
                    className={`nav-underline ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
      <section className="class-main-container">
        <section className="class-container">
          {/* tab bar section  */}

          <section
            class="understad-section"
            id="class1"
            ref={(el) => (sectionRefs.current["class1"] = el)}
          >
            <div class="understading-grid">
              <div>
                <h2 class="understand-heading">
                  Understanding-Trademark <span>Class {cls?.class}</span>
                </h2>
                <p className="understading-text" style={{ color: "#333333" }}>
                  {cls?.understanding}
                </p>
              </div>
              <div class="understading-image">
                <img src={cls?.img1} alt="" class="image-styles" />
              </div>
            </div>
          </section>

          {/* <section className="include-section"> */}
          <section
            class="main-section"
            id="included"
            ref={(el) => (sectionRefs.current["included"] = el)}
          >
            <section class="inner-section">
              <h2 class="heading">
                <span className="heading-span">
                  Tradmark Class {cls?.class}
                </span>{" "}
                Goods Guide
              </h2>
              <p className="sub-heading">
                Everything you need to know about Class {cls?.class} goods.
              </p>
              <div class="grid-layout">
                <div className="left-contents">
                  <h3
                    className=""
                    style={{
                      marginBottom: "1rem",
                      // border: "1px solid red",
                      textAlign: "left",
                    }}
                  >
                    This <span style={{ color: "#1967D2" }}>Class</span>{" "}
                    includes, in particular:
                  </h3>
                  <ul className="custom-list">
                    {cls?.includeGoods?.map((item, index) => (
                      <li key={item.id}>
                        <FaCheckCircle
                          color="#4ade80"
                          size={20}
                          className="check-icon"
                        />
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="right-content">
                  <span class="subheadingss">
                    Class {cls?.class} Goods: List and Guide
                  </span>
                  <div className="search-bars">
                    <div class="search-bar">
                      <input type="text" placeholder="Search for products..." />

                      <button class="search-btn">
                        <span class="icon">
                          {" "}
                          <IoSearch size={18} />
                        </span>{" "}
                        Search
                      </button>
                    </div>
                  </div>
                  <div class="right-container">
                    <div class="grid-items-scrollable" ref={gridRef}>
                      {cls?.productList?.map((category) => (
                        <React.Fragment key={category.id}>
                          <div class="category-title-container">
                            <h2 class="category-title">{category?.name}</h2>
                          </div>
                          {category?.subcategories?.map((item) => (
                            <div key={item.id} class="product-item">
                              <h3 class="product-name">{item?.name}</h3>
                              <p class="product-description"></p>
                            </div>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* <div className="scroll-buttons">
                        <div className="scroll-btn" onClick={scrollUp}>
                          <IoChevronUpOutline size={18} />
                        </div>
                        <div className="scroll-btn" onClick={scrollDown}>
                          <IoChevronDownOutline size={18} />
                        </div>
                      </div> */}
                    <div
                      className="scroll-buttons"
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className={`scroll-btn ${
                          isAtTop ? "disabled" : "active"
                        }`}
                        onClick={scrollUp}
                        style={{
                          color: "#fff",
                          background: isAtTop ? "" : "",
                          color: isAtTop ? "#666" : "#1967D2",
                          // border: "1px solid #ccc",
                          cursor: isAtTop ? "not-allowed" : "pointer",
                        }}
                      >
                        <IoChevronUpOutline size={18} />
                      </div>
                      <div
                        className={`scroll-btn ${
                          isAtBottom ? "disabled" : "active"
                        }`}
                        onClick={scrollDown}
                        style={{
                          background: isAtBottom ? "" : "",
                          color: isAtBottom ? "#666" : "#1967D2",
                          // border: "1px solid #ccc",
                          cursor: isAtBottom ? "not-allowed" : "pointer",
                        }}
                      >
                        <IoChevronDownOutline size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* exclude class and its goods  */}
          <section
            className="exclude-section"
            id="excluded"
            ref={(el) => (sectionRefs.current["excluded"] = el)}
          >
            <div>
              <div className="exclude-goods">
                <div>
                  <h3
                    className=""
                    style={{
                      marginBottom: "1.3rem",
                      // border: "1px solid red",
                      textAlign: "left",
                    }}
                  >
                    Items Not Included in This{" "}
                    <span style={{ color: "#1967D2" }}>Class</span>
                  </h3>
                  <ul style={styles.list}>
                    {cls?.excludeGoods?.map((item, index) => (
                      <li key={index} style={styles.listItem}>
                        <span style={styles.icon}>
                          {item.included ? (
                            <FaCheckCircle color="#28a745" />
                          ) : (
                            <FaTimesCircle color="#f44336" />
                          )}
                        </span>
                        <span style={styles.text}>{item?.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="table-div">
                  <table style={{ marginBottom: "2rem" }}>
                    <thead>
                      <tr>
                        <th
                          style={{ color: "#374151" }}
                          className="th subheadingss"
                        >
                          Related Classes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cls?.relatedClasses?.map((item, index) => (
                        <tr key={index}>
                          <td
                            style={{
                              borderBottom: "1px solid #93c5fd",
                              color: "#1f2937",
                              fontWeight: "400",
                              // padding: "8px",
                              backgroundColor: index % 2 === 0 ? "#f3f8ff" : "", // white for even, gray for odd
                            }}
                          >
                            {item.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* experties */}
          <section
            class="expertise-section"
            id="expertise"
            ref={(el) => (sectionRefs.current["expertise"] = el)}
          >
            <div class="content-grid">
              <section className="hero">
                {/* Left Side - Image Placeholder */}

                <div class="benifite-img-container">
                  <img
                    src={experties}
                    alt="benifite"
                    className="benifite-image"
                  />
                </div>

                {/* Right Side - Content */}
                <div className="hero-content">
                  <h2 className="overlines">Our Expertise</h2>
                  <p className="headings">A Foundation in Fashion Law </p>
                  <p className="description" style={{ marginBottom: "3rem" }}>
                    Our legal team is dedicated to the unique challenges and
                    opportunities within the apparel industry. We don't just
                    file paperwork; we provide strategic legal guidance that
                    ensures your brand is protected today and prepared for
                    tomorrow.
                  </p>

                  {/* Features */}
                  <div className="features">
                    <div className="features-benifite">
                      <div
                        className="expertise-feature"
                        // style={{ marginBottom: "3rem" }}
                      >
                        <div className="expertise-features-text">
                          <h4
                            className="feature-titles"
                            // style={{ paddingRight: "1.5rem" }}
                          >
                            Trademark Nuances
                          </h4>{" "}
                          <ShieldCheck className="feature-icons" />
                        </div>

                        <p className="expertise-feature-text">
                          In-depth knowledge of Class 25 goods & services to
                          safeguard your apparel brand.
                        </p>
                      </div>
                      <div className="expertise-feature">
                        <div className="expertise-features-text">
                          <h4 className="feature-titles">
                            Complete Legal Landscape
                          </h4>

                          <Landmark className="feature-icons" />
                        </div>
                        <p className="expertise-feature-text">
                          Comprehensive navigation of the fashion law ecosystem
                          to secure long-term protection.
                        </p>
                      </div>
                    </div>
                    <div className="features-benifite">
                      <div
                        className="expertise-feature"
                        // style={{ marginBottom: "3rem" }}
                      >
                        <div className="expertise-features-text">
                          {/* <AlertTriangle
                              className="feature-icons"
                              size={25}
                            /> */}
                          <h4 className="feature-titles">
                            Conflict Anticipation
                          </h4>

                          <AlertTriangle className="feature-icons" />
                        </div>
                        <p className="expertise-feature-text">
                          Strategies to foresee and mitigate potential brand
                          conflicts.
                        </p>
                      </div>
                      <div className="expertise-feature">
                        <div className="expertise-features-text">
                          <h4 className="feature-titles">Brand Identity</h4>

                          <Layers className="feature-icons" />
                        </div>
                        <p className="expertise-features-text">
                          Building a strong, defensible brand identity in a
                          competitive market.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
          {/* benefits section */}

          <section
            class="features-section-whychoose"
            id="eligibility"
            ref={(el) => (sectionRefs.current["eligibility"] = el)}
          >
            <div className="features-header-whychoose">
              {/* <p className="overline-whychoose">OVERLINE TEXT</p> */}
              <h1 className="main-title-whychoose">
                Who Should Register Under Trademark{" "}
                <span style={{ color: "#1967D2" }}>Class {cls?.class}</span>
              </h1>
              <p className="subtitle-whychoose">
                {cls?.whoShouldRegisterDescription}
              </p>
            </div>
            <div className="features-container-whychoose">
              {/* Left Features */}
              <div className="features-list-whychoose">
                {/* <span className="feature-icon-whychoose">⚫</span> */}
                {cls?.whoShouldRegister?.map((items, index) => (
                  <div key={items.id} className="feature-item-whychoose">
                    {/* <FaFlask
                        // className="whocan-ico"
                        style={{
                          width: "15%",
                          height: "20%",
                          color: "#1967D2",
                          marginTop: "0.5rem",
                        }}
                      /> */}
                    {items.icon}
                    <div>
                      <h3 className="feature-title-whychoose">
                        {items?.heading}
                      </h3>
                      <p className="feature-text-whychoose">
                        {items?.subheading}
                      </p>
                    </div>{" "}
                  </div>
                ))}
              </div>
              {/* Right Image */}
              <div className="features-image-whychoose">
                <div className="placeholder-whychoose">
                  <img
                    src={cls?.shoShouldRegisterImage}
                    alt="why choose"
                    className="placeholder-icon-whychoose"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <section /> */}
        </section>
      </section>
      {/* contactUs */}
      <section className="cta-hero">
        <div className="cnt">
          <div className="lefts">
            <p className="overline">
              Trademark law is complex. Let's get you the answers you need.
            </p>
            <h1 id="cta-title" className="main-headings">
              Schedule a<br />
              Free Consultation
            </h1>
          </div>

          <img src={contact} alt="contactUs" className="contact-us-img" />
          <div className="rights" aria-label="Call to action">
            <p className="subheading">Still have questions?</p>
            <div
              className="cta-actions"
              role="group"
              aria-label="Call to action buttons"
            >
              <button
                className=" btn   btn-primarys"
                onClick={() => (window.location = "#book")}
              >
                Schedule a Free Consultation
              </button>
              <button
                className="btn btn-secondarys"
                onClick={() => (window.location = "#learn")}
              >
                Learn More
              </button>
            </div>
            <div className="footnote">
              <div>
                “After your consultation, we’ll provide a tailored action plan.”
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* benifite section */}

      <section
        class="benefits-section"
        id="benefits"
        ref={(el) => (sectionRefs.current["benefits"] = el)}
      >
        <div className="hero-container-wrapper">
          <div className="benefits-second-div">
            <div class="benefits-header">
              <h3 class="benefits-titles">
                Benefits of Trademarking Your Brand
              </h3>
              <p class="benefits-subtitle">
                A trademark isn’t just a legal step-it’s a strategic investment
                that protects, strengthens, and grows your brand.
              </p>
            </div>

            <div class="benefits-main-content">
              <div class="features-grid">
                <div class="feature-item-left">
                  <div class="feature-inner">
                    <UserCheck className="feature-icon" />
                    <h3 class="feature-title">Gain Exclusive Ownership</h3>
                    <p class="feature-description">
                      Secure the exclusive right to your brand name and logo,
                      keeping competitors at bay.
                    </p>
                  </div>

                  <div class="feature-inner">
                    <ShieldCheck className="feature-icon" />
                    <h3 class="feature-title">Protect Your Reputation</h3>
                    <p class="feature-description">
                      Ensure your brand identity stays unique, trustworthy, and
                      credible in the marketplace.
                    </p>
                  </div>
                </div>

                <div class="feature-item-bottom">
                  <Tag className="feature-icon" />
                  <h3 class="feature-title">Identifies Source</h3>
                  <p class="feature-description">
                    Shows who makes or provides the product/service so customers
                    know the origin.
                  </p>
                </div>

                <div class="feature-item-right">
                  <div class="feature-inner">
                    <ShieldCheck className="feature-icon" />
                    <h3 class="feature-title">Legal Protection</h3>
                    <p class="feature-description">
                      Gives the owner the right to stop others from using
                      similar marks.
                    </p>
                  </div>

                  <div class="feature-inner">
                    <Gavel className="feature-icon" />
                    <h3 class="feature-title">Power of Legal Action</h3>
                    <p class="feature-description">
                      Enforce your rights against unauthorized use and defend
                      your brand effectively.
                    </p>
                  </div>
                </div>

                <div class="center-image-container">
                  <div class="image-wrapper">
                    <img src={benifite} alt="SHIFT Hat" class="center-image" />
                  </div>
                </div>
              </div>
            </div>

            <div class="twm-read-more" style={{ marginTop: "1rem" }}>
              <div class="site-button">Book Call</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process of Registration */}

      <section
        class="registration-process-main"
        id="process"
        ref={(el) => (sectionRefs.current["process"] = el)}
      >
        <h2 class="process-title">Process Of Registration</h2>
        <div className="registration-process">
          <div class="process-image-container">
            <img
              src={slides[currentIndex].img}
              alt={`Slide ${currentIndex + 1}`}
              class="process-image"
            />
          </div>

          <div class="process-content">
            <div class="bullets-and-text">
              <div class="bullet-container">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => handleBulletClick(index)}
                    class={`bullet ${
                      currentIndex === index
                        ? "bullet-active"
                        : "bullet-inactive"
                    }`}
                  ></span>
                ))}
              </div>
              <div class="process-steps-list">
                <div>
                  <span className="process-number">01</span>
                  <p class="process-step">Trademark Search</p>
                </div>
                <div>
                  <span className="process-number">02</span>
                  <p class="process-step">Filling The Application</p>
                </div>

                <div>
                  <span className="process-number">03</span>
                  <p class="process-step">Examination</p>
                </div>

                <div>
                  <span className="process-number">04</span>
                  <p class="process-step">Public Review</p>
                </div>

                <div>
                  <span className="process-number">05</span>
                  <p class="process-step">Final Registration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial  */}
      <section className="testimonial-main-container-wrapper">
        <div className="hero-container-wrapper">
          <div className="testimonials-container">
            <div>
              <div className="testimonials-header">
                {/* <p className="overlines">OVERLINE TEXT</p> */}
                <h2 className="testimonial-title">Customer testimonials</h2>
                <p className="subtitle">
                  short and simple subheading can be added here
                </p>
              </div>
            </div>

            <div>
              <div className="testimonials-sliders-wrapper">
                <div
                  className="testimonials-sliders"
                  style={{
                    transform: `translateX(-${currentIndex2 * 90}%)`,
                  }} // 👈 90% slide
                >
                  {testimonials.map((t, index) => (
                    <div key={index} className="testimonial-cards">
                      <h3 className="company">{t.company}</h3>
                      <div className="stars">
                        {Array.from({ length: t.rating }, (_, i) => (
                          <FaStar key={i} color="#facc15" />
                        ))}
                      </div>
                      <p className="testimonial-text">“{t.text}”</p>
                      <div className="testimonial-user">
                        <FaUserCircle size={40} />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <span className="user-name">{t.name}</span>
                          <span className="user-role">{t.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="testimonial-bdt">
                <div className="dots">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i === currentIndex2 ? "active" : ""}`}
                    ></span>
                  ))}
                </div>
                <div className="testimonial-controls">
                  <button onClick={prevSlide} className="nav-btn">
                    <VscChevronLeft size={24} />
                  </button>
                  <button onClick={nextSlide} className="nav-btn">
                    <VscChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* whay choose us */}
      {/* <section className="class-main-container">
        <section className="class-container"> */}
      <section
        className="how-it-works-section"
        id="whyus"
        ref={(el) => (sectionRefs.current["whyus"] = el)}
      >
        <div className="hero-container-wrapper">
          {/* Section Header */}
          <div className="how-it-works-header">
            {/* <p className="how-it-works-overline">OVERLINE TEXT</p> */}
            <h1 className="how-it-works-title">Why Choose Us?</h1>
            <p className="how-it-works-subtitle">
              We go beyond paperwork—we become your partner in protecting and
              growing your fashion brand. With clarity, transparency, and
              forward-thinking strategies, we bring both legal expertise and a
              modern approach to your journey.
            </p>
          </div>

          {/* Content Grid */}
          <div className="how-it-works-content">
            {/* Left Image */}
            <div className="how-it-works-image">
              <img src={whychoosus} alt="Placeholder" />
            </div>

            {/* Right Steps */}
            <div className="how-it-works-steps">
              <div className="how-it-works-card">
                <div className="how-it-works-number">1</div>
                <div>
                  <h3 className="how-it-works-card-title">
                    Tailored Strategies That Fit You
                  </h3>
                  <p className="how-it-works-card-text">
                    Whether launching a single product or scaling a full line,
                    we craft legal solutions aligned with your vision.
                  </p>
                </div>
              </div>

              <div className="how-it-works-grid">
                <div className="how-it-works-card">
                  <div className="how-it-works-number">2</div>
                  <div>
                    <h3 className="how-it-works-card-title">
                      Transparent, Predictable Cost
                    </h3>
                    <p className="how-it-works-card-text">
                      Fixed-fee services mean no surprises—just clarity, value,
                      and peace of min
                    </p>
                  </div>
                </div>

                <div className="how-it-works-card">
                  <div className="how-it-works-number">3</div>
                  <div>
                    <h3 className="how-it-works-card-title">
                      End-to-End Guidance
                    </h3>
                    <p className="how-it-works-card-text">
                      From research and filings to USPTO communication, we
                      handle it all so .
                    </p>
                  </div>
                </div>
              </div>

              <div className="how-it-works-card">
                <div className="how-it-works-number">4</div>
                <div>
                  <h3 className="how-it-works-card-title">
                    {" "}
                    End-to-End Guidance
                  </h3>
                  <p className="how-it-works-card-text">
                    From research and filings to USPTO communication, we handle
                    it all so you can stay focused on growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section>
        </section> */}
      </section>
      <section
        className="faq-main-sections"
        id="faq"
        ref={(el) => (sectionRefs.current["faq"] = el)}
      >
        <div className="faqs-containers">
          {/* Left Side */}
          <div className="faqs-lefts">
            <p className="faq-labels">FAQS</p>
            <h2 className="faq-titles">Questions? We're glad you asked</h2>
            <p className="faq-subtitles">
              {/* Get clear, expert answers to the most important questions about
                your care and your child’s health. */}
              {cls?.faqsTitle}
            </p>
          </div>

          {/* Right Side */}
          <div className="faqs-rights">
            {cls?.faqs?.map((faq, index) => (
              <div
                key={index}
                className={`faq-items ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-questions">
                  <span>
                    {index + 1}. {faq.question}
                  </span>
                  <span className="faq-icons">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className="faq-answers-wrapper"
                  ref={(el) => (faqRefs.current[index] = el)}
                >
                  <div className="faq-answers">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TdClass01;
