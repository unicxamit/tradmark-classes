import {
  FaBox,
  FaBoxes,
  FaBuilding,
  FaCamera,
  FaCapsules,
  FaCar,
  FaClinicMedical,
  FaCogs,
  FaCubes,
  FaCut,
  FaDog,
  FaFireAlt,
  FaFlask,
  FaGasPump,
  FaHammer,
  FaHandSparkles,
  FaHeartbeat,
  FaHome,
  FaHospitalAlt,
  FaIndustry,
  FaLeaf,
  FaLock,
  FaMicrochip,
  FaMicroscope,
  FaMobileAlt,
  FaOilCan,
  FaPaintRoller,
  FaPalette,
  FaPills,
  FaPrint,
  FaRobot,
  FaSatelliteDish,
  FaSeedling,
  FaShieldAlt,
  FaSmileWink,
  FaSoap,
  FaSpa,
  FaStethoscope,
  FaSyringe,
  FaToolbox,
  FaTools,
  FaTooth,
  FaTractor,
  FaTruck,
  FaUserNurse,
  FaUtensils,
  FaWarehouse,
  FaWineBottle,
  FaWrench,
} from "react-icons/fa";
import { FaCandleHolder, FaFire, FaScissors } from "react-icons/fa6";
import understading from "../tdClassImages/introductionsection03.png";
import whoshould from "../tdClassImages/whoshouldregister.jpg";
import understadingclass02 from "../tdClassImages/CLASS 2 .png";
import understadingclass03 from "../tdClassImages/CLASS 3 .png";
const classesData = [
  {
    id: 1,
    class: 1,
    heroTitle: "Protecting Your Brand in Chemicals & Industrial Goods",
    title: "Class 1",
    understanding:
      "Trademark Class 1 is a crucial category within the Nice Classification system, designated for a wide range of chemical products used in industry, science, and agriculture. This class specifically covers chemicals that are raw materials or components for other products, rather than finished goods themselves. It is essential for businesses to accurately classify their goods under this category to ensure proper trademark registration and protection",
    img1: understading,

    includeGoods: [
      {
        id: 1,
        name: "Chemicals for industrial purposes: This includes acids, alkalis, salts, and various industrial gases.",
      },
      {
        id: 2,
        name: "Adhesives: Adhesives used in industrial processes are covered here, but not those for stationery or household use (which fall under Class 16).",
      },
      {
        id: 3,
        name: "Resins: Natural and synthetic resins, such as plastics in their raw state (powders, liquids, or pellets), are classified here.",
      },
      {
        id: 4,
        name: "Fertilizers: Chemical preparations for agricultural use, including soil conditioners and plant growth regulators.",
      },
      {
        id: 5,
        name: "Fire-extinguishing compositions: Chemical substances used in fire extinguishers.",
      },
      {
        id: 6,
        name: "Temperings and soldering preparations: These include chemical agents used to harden or soften metals.",
      },
      {
        id: 7,
        name: "Food preservatives: Chemical substances used to preserve food, but not the food itself.",
      },
      {
        id: 8,
        name: "Tanning substances: Chemicals used in the tanning of leather.",
      },
    ],
    productList: [
      {
        id: 1,
        name: "Science & Photography",
        subcategories: [
          { id: 1, name: "Acids" },
          { id: 2, name: "Alkalies" },
          { id: 3, name: "Pigments" },
          { id: 4, name: "Industrial Chemicals" },
          { id: 5, name: "Agro Chemicals" },
          { id: 6, name: "Reagents" },
          { id: 7, name: "Food Preservatives" },
          { id: 8, name: "Masonry Preservatives" },
          { id: 9, name: "Lab Chemicals" },
          { id: 10, name: "Detergents" },
          { id: 11, name: "Dispersants" },
          { id: 12, name: "Emulsifiers" },
          { id: 13, name: "Enzymes" },
          { id: 14, name: "Fire-extinguishers" },
          { id: 15, name: "Gases" },
          { id: 16, name: "Iodine" },
          { id: 17, name: "Lactic Acid" },
          { id: 18, name: "Salts" },
          { id: 19, name: "Solvents" },
          { id: 20, name: "Plastics" },
          { id: 21, name: "Urea" },
        ],
      },
      {
        id: 2,
        name: "Adhesives & Resins",
        subcategories: [
          { id: 1, name: "Adhesives" },
          { id: 2, name: "Cement Preservatives" },
          { id: 3, name: "Glutinous Products" },
          { id: 4, name: "Gum Arabic" },
          { id: 5, name: "Mastic" },
          { id: 6, name: "Natural Resins" },
          { id: 7, name: "Industrial Plastics" },
          { id: 8, name: "Synthetic Resins" },
          { id: 9, name: "Thickeners" },
          { id: 10, name: "Waterproofing Agents" },
        ],
      },
      {
        id: 3,
        name: "Fertilizers & Soil",
        subcategories: [
          { id: 1, name: "Fertilizers" },
          { id: 2, name: "Compost" },
          { id: 3, name: "Plant Regulators" },
          { id: 4, name: "Soil Conditioners" },
          { id: 5, name: "Hydroponic Substrates" },
        ],
      },
      {
        id: 4,
        name: "Tanning & Soldering",
        subcategories: [
          { id: 1, name: "Soldering Agents" },
          { id: 2, name: "Tanning Agents" },
          { id: 3, name: "Temperings" },
        ],
      },
      {
        id: 5,
        name: "Other Preparations",
        subcategories: [
          { id: 1, name: "Fuel Additives" },
          { id: 2, name: "Albumins" },
          { id: 3, name: "Bleaching Agents" },
          { id: 4, name: "Casein" },
          { id: 5, name: "Fireproofing Agents" },
          { id: 6, name: "Concrete Preservatives" },
          { id: 7, name: "Hardening Agents" },
          { id: 8, name: "Hydrates" },
          { id: 9, name: "Metallic Soaps" },
          { id: 10, name: "Leather Oils" },
          { id: 11, name: "Paper Pulp" },
          { id: 12, name: "Putty" },
          { id: 13, name: "Starches" },
          { id: 14, name: "Volcanic Ash" },
        ],
      },
    ],

    excludeGoods: [
      {
        id: 1,
        name: "Chemicals for Medical or Veterinary Use",
      },
      {
        id: 2,
        name: "Fungicides, Herbicides, and Pest Control Preparations",
      },
      {
        id: 3,
        name: "Adhesives for Stationery or Household Purposes",
      },
      {
        id: 4,
        name: "Food Preservation Salt",
      },
      {
        id: 5,
        name: "Straw Mulch",
      },
    ],

    relatedClasses: [
      {
        id: 1,
        name: "Class 2",
      },
      {
        id: 2,
        name: "Class 3",
      },
      {
        id: 3,
        name: "Class 4",
      },
      {
        id: 4,
        name: "Class 5",
      },
      {
        id: 5,
        name: "Class 16",
      },
      {
        id: 6,
        name: "Class 19",
      },
      {
        id: 6,
        name: "Class 30",
      },
    ],
    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 1 is mainly for chemicals and chemical-related products.",

    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaFlask
            // color="#1967D2"
            // size={24}
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Chemical manufacturers",
        subheading: "Companies producing industrial or scientific chemicals.",
      },
      {
        id: 2,
        icon: (
          <FaSeedling
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Fertilizer companies",
        subheading:
          "Businesses making or selling agricultural, horticultural, or forestry fertilizers.",
      },
      {
        id: 3,
        icon: (
          <FaCubes
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Plastic & resin companies",
        subheading:
          "Those producing unprocessed artificial resins and unprocessed plastics.",
      },
      {
        id: 4,
        icon: (
          <FaTools
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Industrial suppliers",
        subheading:
          "Supplying fire-extinguishing compositions, adhesives for industrial use, or tanning substances.",
      },
      {
        id: 5,
        icon: (
          <FaBoxes
            color="#ec4899"
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
            size={24}
          />
        ),
        heading: "Raw material providers",
        subheading:
          "Businesses dealing in chemical raw materials for manufacturing and industrial applications.",
      },
      {
        id: 6,
        icon: (
          <FaMicroscope
            color="#8b5cf6"
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
            size={24}
          />
        ),
        heading: "Photographic & scientific chemical suppliers",
        subheading:
          "Companies providing chemicals used in photography, laboratory research, and science.",
      },
    ],
    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 1?",
        answer:
          "Trademark Class 1 is a category within the international Nice Classification system that covers chemicals and chemical products used in industry, science, and agriculture. This class is for substances that serve as raw materials or components for other goods.",
      },
      {
        question:
          "What is the key purpose of registering a trademark in Class 1?",
        answer:
          "The primary purpose is to secure intellectual property rights for the brand name of a chemical or related substance. This prevents other businesses from using a confusingly similar name for a similar chemical, protecting the brand's identity at the raw material level.",
      },
      {
        question: "How does Class 1 differ from Class 5?",
        answer:
          "The main distinction is the intended use. Class 1 is for chemicals for general industrial, scientific, or agricultural purposes. In contrast, Class 5 covers chemicals and preparations specifically for medical, veterinary, or hygienic uses, such as disinfectants and pharmaceutical products.",
      },
      {
        question: "Are finished products, like paint, included in Class 1?",
        answer:
          "No. While the raw chemicals used to create paint may be in Class 1, the finished paint product is in Class 2. Class 1 is strictly for the raw, unprocessed chemicals and substances.",
      },
      {
        question: "Where do unprocessed and semi-processed plastics fall?",
        answer:
          "Unprocessed plastics, in their raw form (e.g., powders, liquids, or pellets), are classified in Class 1. Semi-processed plastics, such as films, sheets, and rods, which are ready to be used in manufacturing, are in Class 17.",
      },
      {
        question:
          "Can a business register a single trademark in multiple classes?",
        answer:
          "Yes. It is common and often necessary for a business to register a trademark in multiple classes if their products or services span across different categories. This is crucial for protecting the brand across all its uses.",
      },
      {
        question: "Does Class 1 include adhesives for household use?",
        answer:
          "No. Adhesives for industrial purposes are in Class 1. However, glues, pastes, and other adhesives for household or stationery use are classified in Class 16.",
      },
      {
        question:
          "What if my product contains a Class 1 chemical but is a finished good for consumers?",
        answer:
          "You should register your trademark in the class that correctly identifies the finished product. For example, if you sell a cleaning spray for households, you would register under Class 3, even though a Class 1 chemical may be one of the ingredients.",
      },
      {
        question: "Are fungicides and herbicides in Class 1?",
        answer:
          "No. Although they are chemical preparations for agricultural use, fungicides, herbicides, and preparations for destroying vermin are specifically classified in Class 5, as they are considered to be for hygienic or health-related purposes.",
      },
    ],
  },
  {
    id: 2,
    class: 2,
    title: "Class 2",
    heroTitle: "Protecting Your Brand with Paints, Varnishes, & Coatings",
    img1: understadingclass02,

    understanding:
      "Trademark Class 2 is a pivotal category within the Nice Classification system, dedicated to protecting brands related to paints, varnishes, lacquers, and a variety of other coatings and colorants. This class is essential for businesses that manufacture products designed to protect, color, or alter surfaces. Accurate classification in this category is crucial for securing intellectual property rights for your brand",
    includeGoods: [
      {
        id: 1,
        name: "Paints, varnishes, and lacquers: This includes all forms of paints, primers, enamels, and lacquers for protective or decorative purposes.",
      },
      {
        id: 2,
        name: "Anti-corrosive and rust-preventive preparations: These are coatings and substances used to protect surfaces from rust and corrosion.",
      },
      {
        id: 3,
        name: "Dyes and dyestuffs: Dyes for various uses, including textiles, and colorants for food and beverages.",
      },
      {
        id: 4,
        name: "Printing inks: This category covers inks used in printing, including those in filled ink and toner cartridges.",
      },
      {
        id: 5,
        name: "Mordants: Chemical preparations used in dyeing to fix or enhance the color on a material.",
      },
      {
        id: 6,
        name: "Natural resins, raw: This includes raw natural resins used in the preparation of coatings and varnishes.",
      },
      {
        id: 7,
        name: "Metallic powders: Powders used by painters and decorators to create a metallic finish.",
      },
      {
        id: 8,
        name: "Thinners for paints: Chemical substances used to reduce the viscosity of paints and lacquers.",
      },
    ],
    productList: [
      {
        id: 1,
        name: "Paints, Varnishes & Lacquers",
        subcategories: [
          { id: 1, name: "Paints" },
          { id: 2, name: "Varnishes" },
          { id: 3, name: "Lacquers" },
          { id: 4, name: "Primers" },
          { id: 5, name: "Enamels" },
          { id: 6, name: "Badigeon" },
          { id: 7, name: "Distempers" },
          { id: 8, name: "Glazes" },
          { id: 9, name: "Whitewash" },
          { id: 10, name: "Fixatives" },
          { id: 11, name: "Coatings" },
          { id: 12, name: "Undercoating" },
          { id: 13, name: "Woodstains" },
          { id: 14, name: "Anti-urine" },
          { id: 15, name: "Anti-graffiti" },
          { id: 16, name: "Bactericidal" },
          { id: 17, name: "Fireproof" },
          { id: 18, name: "Bitumen" },
          { id: 19, name: "Black" },
          { id: 20, name: "Ceramic" },
          { id: 21, name: "Asbestos" },
          { id: 22, name: "Undersealing" },
          { id: 23, name: "Wood" },
          { id: 24, name: "Watercolour" },
          { id: 25, name: "Re-positionable" },
        ],
      },
      {
        id: 2,
        name: "Dyes & Colorants",
        subcategories: [
          { id: 1, name: "Dyes" },
          { id: 2, name: "Dyestuffs" },
          { id: 3, name: "Alizarine" },
          { id: 4, name: "Aniline" },
          { id: 5, name: "Auramine" },
          { id: 6, name: "Cochineal" },
          { id: 7, name: "Indigo" },
          { id: 8, name: "Saffron" },
          { id: 9, name: "Shoe" },
          { id: 10, name: "Turmeric" },
          { id: 11, name: "Dyewood" },
          { id: 12, name: "Annotto" },
          { id: 13, name: "Gamboge" },
          { id: 14, name: "Yellowwood" },
          { id: 15, name: "Caramel" },
          { id: 16, name: "Malt" },
          { id: 17, name: "Mordants" },
          { id: 18, name: "Stains" },
        ],
      },
      {
        id: 3,
        name: "Inks & Pigments",
        subcategories: [
          { id: 1, name: "Inks" },
          { id: 2, name: "Pigments" },
          { id: 3, name: "Carbon" },
          { id: 4, name: "Cobalt" },
          { id: 5, name: "Lamp" },
          { id: 6, name: "Orange" },
          { id: 7, name: "Red" },
          { id: 8, name: "Sienna" },
          { id: 9, name: "Silver" },
          { id: 10, name: "Titanium" },
          { id: 11, name: "Zinc" },
          { id: 12, name: "Toner" },
          { id: 13, name: "Printing" },
          { id: 14, name: "Engraving" },
          { id: 15, name: "Printers'" },
          { id: 16, name: "Marking" },
          { id: 17, name: "Soot" },
          { id: 18, name: "Whitewash" },
        ],
      },
      {
        id: 4,
        name: "Protective Coatings & Preservatives",
        subcategories: [
          { id: 1, name: "Anti-corrosive" },
          { id: 2, name: "Anti-fouling" },
          { id: 3, name: "Anti-rust" },
          { id: 4, name: "Anti-tarnishing" },
          { id: 5, name: "Protective" },
          { id: 6, name: "Preservatives" },
          { id: 7, name: "Creosote" },
          { id: 8, name: "Oils" },
          { id: 9, name: "Carbonyl" },
          { id: 10, name: "Mordants" },
        ],
      },
      {
        id: 5,
        name: "Resins & Solvents",
        subcategories: [
          { id: 1, name: "Resins" },
          { id: 2, name: "Copal" },
          { id: 3, name: "Colophony" },
          { id: 4, name: "Gum" },
          { id: 5, name: "Shellac" },
          { id: 6, name: "Mastic" },
          { id: 7, name: "Sandarac" },
          { id: 8, name: "Canada" },
          { id: 9, name: "Siccatives" },
          { id: 10, name: "Thickeners" },
          { id: 11, name: "Thinners" },
          { id: 12, name: "Turpentine" },
        ],
      },
      {
        id: 6,
        name: "Metallic & Special Finishes",
        subcategories: [
          { id: 1, name: "Aluminium" },
          { id: 2, name: "Bronze" },
          { id: 3, name: "Metals" },
          { id: 4, name: "Silvering" },
          { id: 5, name: "Silver" },
          { id: 6, name: "Foil" },
          { id: 7, name: "Sumac" },
        ],
      },
    ],
    excludeGoods: [
      {
        id: 1,
        name: "Unprocessed artificial resins",
      },
      {
        id: 2,
        name: "Semi-processed resins",
      },
      {
        id: 3,
        name: "Mordants for metals",
      },
      {
        id: 4,
        name: "Laundry blueing",
      },
      {
        id: 5,
        name: "Cosmetic dyes",
      },
      {
        id: 6,
        name: "Paint boxes (articles for use in school)",
      },
      {
        id: 7,
        name: "Inks for stationery purposes",
      },
      {
        id: 8,
        name: "Insulating paints and varnishes",
      },
    ],
    relatedClasses: [
      {
        id: 1,
        name: "Class 5",
      },
      {
        id: 2,
        name: "Class 16",
      },
      {
        id: 3,
        name: "Class 17",
      },
      {
        id: 4,
        name: "Class 19",
      },
      {
        id: 5,
        name: "Class 27",
      },
      {
        id: 6,
        name: "Class 37",
      },
      {
        id: 7,
        name: "Class 4",
      },
      {
        id: 8,
        name: "Class 3",
      },
      {
        id: 9,
        name: "Class 1",
      },
    ],
    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 2 is primarily for businesses that manufacture or supply paints, varnishes, colorants, and other protective coatings.",
    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaPaintRoller
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Paint & Varnish Manufacturers",
        subheading:
          "Companies that produce paints, lacquers, and enamels for commercial, residential, or artistic use.",
      },
      {
        id: 2,
        icon: (
          <FaPalette
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Dye & Colorant Producers",
        subheading:
          "Businesses that manufacture dyes for textiles, food, or other industrial and commercial applications.",
      },
      {
        id: 3,
        icon: (
          <FaShieldAlt
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Industrial & Protective Coating Companies",
        subheading:
          "Those specializing in anti-corrosive, anti-rust, or other protective preparations for various surfaces.",
      },
      {
        id: 4,
        icon: (
          <FaPrint
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Printing & Ink Suppliers",
        subheading:
          "Suppliers of printing inks, as well as filled ink and toner cartridges for printers.",
      },
      {
        id: 5,
        icon: (
          <FaFlask
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Raw Material Suppliers",
        subheading:
          "Businesses dealing in raw natural resins, pigments, and binders for the paint and dye industries.",
      },
      {
        id: 6,
        icon: (
          <FaHome
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Home Decorating Suppliers",
        subheading:
          "Companies providing products like wood stains and special finishes for professional decorators and home renovators.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 2?",
        answer:
          "Trademark Class 2 is a category within the international Nice Classification system that covers paints, varnishes, dyes, colorants, and other protective coatings for industrial, commercial, and artistic use.",
      },
      {
        question: "What products fall under Class 2?",
        answer:
          "Class 2 includes paints, lacquers, varnishes, inks, dyes, pigments, and other coating or coloring substances. Finished paints, artistic paints, and industrial protective coatings are all included.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 2?",
        answer:
          "Yes. Businesses often register a trademark in multiple product categories within Class 2 if they manufacture paints, varnishes, inks, or dyes to protect their brand comprehensively.",
      },
      {
        question: "Does Class 2 cover raw materials?",
        answer:
          "Yes. Raw materials used in paint, dye, and varnish production, such as pigments, binders, and resins, are also included in Class 2.",
      },
      {
        question:
          "Do protective coatings for industrial machinery fall in Class 2?",
        answer:
          "Yes. Anti-corrosive, anti-rust, or other protective coatings for surfaces and machinery are included in Class 2.",
      },
      {
        question: "Are home decorating products included in Class 2?",
        answer:
          "Products such as wood stains, specialty finishes, and varnishes for home use are included in Class 2.",
      },
      {
        question: "How does Class 2 differ from Class 1?",
        answer:
          "Class 1 is for raw chemicals used in industry, science, and agriculture. Class 2 is for paints, dyes, varnishes, and coatings made from these chemicals for industrial, commercial, or decorative purposes.",
      },
      {
        question: "Do printing inks fall under Class 2?",
        answer:
          "Yes. Printing inks, including filled ink and toner cartridges for printers, are classified in Class 2.",
      },
    ],
  },

  {
    id: 3,
    class: 3,
    title: "Class 3",
    heroTitle:
      "Protecting Your Brand with Cosmetics, Cleaning Products, & Toiletries",
    img1: understadingclass03,

    understanding:
      "Trademark Class 3 is a broad and frequently used category in the Nice Classification system, covering a wide range of products related to cleaning, cosmetics, and personal care. It is the go-to class for businesses that manufacture or sell goods designed to clean or enhance the appearance of humans, animals, and household items.",
    includeGoods: [
      {
        id: 1,
        name: "Sanitary preparations being toiletries",
      },
      {
        id: 2,
        name: "Tissues impregnated with cosmetic lotions",
      },
      {
        id: 3,
        name: "Deodorants for human beings or for animals",
      },
      {
        id: 4,
        name: "Room fragrancing preparations",
      },
      {
        id: 5,
        name: "Nail art stickers",
      },
      {
        id: 6,
        name: "Polishing wax",
      },
      {
        id: 7,
        name: "Sandpaper",
      },
    ],

    productList: [
      {
        id: 1,
        name: "Abrasives",
        subcategories: [
          { id: 1, name: "Abrasivepaper" },
          { id: 2, name: "Carbides" },
          { id: 3, name: "Corundum" },
          { id: 4, name: "Emery" },
          { id: 5, name: "Emerycloth" },
          { id: 6, name: "Emerypaper" },
          { id: 7, name: "Glasscloth" },
          { id: 8, name: "Grinding" },
          { id: 9, name: "Sandcloth" },
          { id: 10, name: "Sandpaper" },
          { id: 11, name: "Siliconcarbide" },
          { id: 12, name: "Tripolystone" },
          { id: 13, name: "Volcanicash" },
        ],
      },
      {
        id: 2,
        name: "Adhesives",
        subcategories: [
          { id: 1, name: "Falseeyelashadhesive" },
          { id: 2, name: "Falsehairadhesive" },
          { id: 3, name: "Cosmeticadhesive" },
        ],
      },
      {
        id: 3,
        name: "Aftershave",
        subcategories: [{ id: 1, name: "Aftershavelotion" }],
      },
      {
        id: 4,
        name: "Airfreshening",
        subcategories: [
          { id: 1, name: "Reeddiffuser" },
          { id: 2, name: "Airfragrance" },
        ],
      },
      {
        id: 5,
        name: "Almond",
        subcategories: [
          { id: 1, name: "Almondmilk" },
          { id: 2, name: "Almondoil" },
          { id: 3, name: "Almondsoap" },
        ],
      },
      {
        id: 6,
        name: "Aloe",
        subcategories: [{ id: 1, name: "Aloevera" }],
      },
      {
        id: 7,
        name: "Alum",
        subcategories: [{ id: 1, name: "Alumstones" }],
      },
      {
        id: 8,
        name: "Amber",
        subcategories: [{ id: 1, name: "Amberperfume" }],
      },
      {
        id: 9,
        name: "Ammonia",
        subcategories: [{ id: 1, name: "Ammonia" }],
      },
      {
        id: 10,
        name: "Antiperspirants",
        subcategories: [
          { id: 1, name: "Antisoap" },
          { id: 2, name: "Antiperspirant" },
        ],
      },
      {
        id: 11,
        name: "Astringents",
        subcategories: [
          { id: 1, name: "Cosmeticastringent" },
          { id: 2, name: "Shavingstones" },
        ],
      },
      {
        id: 12,
        name: "Baby",
        subcategories: [{ id: 1, name: "Babywipes" }],
      },
      {
        id: 13,
        name: "Balms",
        subcategories: [{ id: 1, name: "Balms" }],
      },
      {
        id: 14,
        name: "Bath",
        subcategories: [
          { id: 1, name: "Bathprep" },
          { id: 2, name: "Bathsalts" },
          { id: 3, name: "Cosmeticbath" },
        ],
      },
      {
        id: 15,
        name: "Beauty",
        subcategories: [{ id: 1, name: "Beautymask" }],
      },
      {
        id: 16,
        name: "Beard",
        subcategories: [{ id: 1, name: "Bearddye" }],
      },
      {
        id: 17,
        name: "Bleaching",
        subcategories: [
          { id: 1, name: "Cosmeticbleach" },
          { id: 2, name: "Householdbleach" },
          { id: 3, name: "Bleachsalts" },
          { id: 4, name: "Bleachsoda" },
          { id: 5, name: "Laundrybleach" },
          { id: 6, name: "Leatherbleach" },
        ],
      },
      {
        id: 18,
        name: "Body",
        subcategories: [
          { id: 1, name: "Bodypaint" },
          { id: 2, name: "Latexbodypaint" },
        ],
      },
      {
        id: 19,
        name: "Breath",
        subcategories: [
          { id: 1, name: "Breathfreshener" },
          { id: 2, name: "Breathspray" },
          { id: 3, name: "Breathstrips" },
        ],
      },
      {
        id: 20,
        name: "Cake",
        subcategories: [
          { id: 1, name: "Cakeflavour" },
          { id: 2, name: "Soapcake" },
        ],
      },
    ],

    excludeGoods: [
      {
        id: 1,
        name: "Unprocessed artificial resins",
      },
      {
        id: 2,
        name: "Semi-processed resins",
      },
      {
        id: 3,
        name: "Mordants for metals",
      },
      {
        id: 4,
        name: "Laundry blueing",
      },
      {
        id: 5,
        name: "Cosmetic dyes",
      },
      {
        id: 6,
        name: "Paint boxes (articles for use in school)",
      },
      {
        id: 7,
        name: "Inks for stationery purposes",
      },
      {
        id: 8,
        name: "Insulating paints and varnishes",
      },
    ],
    relatedClasses: [
      {
        id: 1,
        name: "Class 1",
      },
      {
        id: 2,
        name: "Class 5",
      },
      {
        id: 3,
        name: "Class 8",
      },
      {
        id: 4,
        name: "Class 10",
      },
      {
        id: 5,
        name: "Class 16",
      },
      {
        id: 6,
        name: "Class 18",
      },
      {
        id: 7,
        name: "Class 21",
      },
      {
        id: 8,
        name: "Class 35",
      },
      {
        id: 9,
        name: "Class 42",
      },
      {
        id: 10,
        name: "Class 44",
      },
    ],
    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 3 is specifically designated for non-medicated cosmetics, toiletries, cleaning preparations, and perfumery.",
    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaSmileWink
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Cosmetics & Skincare",
        subheading:
          "Any business producing or selling products for enhancing beauty or maintaining skin health, including makeup, lotions.",
      },
      {
        id: 2,
        icon: (
          <FaWineBottle
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Perfume and Fragrance",
        subheading:
          "Companies specializing in the creation and sale of scents for personal use, including perfumes, colognes, eau de toilette.",
      },
      {
        id: 3,
        icon: (
          <FaSoap
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Household Cleaning",
        subheading:
          "Businesses that manufacture and sell preparations for cleaning, polishing, scouring, and abrasive purposes, e.g., laundry detergents, dishwashing liquids.",
      },
      {
        id: 4,
        icon: (
          <FaSpa
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Hair Care & Styling Brands",
        subheading:
          "Businesses offering products for hair treatment and styling, including shampoos, conditioners, hair dyes, styling gels.",
      },
      {
        id: 5,
        icon: (
          <FaTooth
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Oral Hygiene Product",
        subheading:
          "Companies producing non-medicated preparations for cleaning the mouth and teeth, including toothpaste, tooth powder, and non-medicated mouthwashes.",
      },
      {
        id: 6,
        icon: (
          <FaHandSparkles
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Personal Care & Hygiene",
        subheading:
          "Businesses offering a wide range of personal hygiene items, including non-medicated soaps, bath gels.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 3?",
        answer:
          "Trademark Class 3 is a category within the international Nice Classification system that covers non-medicated cosmetics, toiletries, cleaning preparations, and perfumery. This class protects brand names for products applied to the body or used for cleaning purposes.",
      },
      {
        question: "Which products fall under Class 3?",
        answer:
          "Class 3 includes cosmetics, skincare products, perfumes, toiletries, hair care products, oral hygiene products, and household cleaning preparations like detergents, soaps, and polishing agents.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 3?",
        answer:
          "Yes. Businesses often register a trademark in multiple product categories within Class 3 to ensure comprehensive protection across personal care, beauty, and cleaning items.",
      },
      {
        question: "Are non-medicated soaps and bath gels included in Class 3?",
        answer:
          "Yes. Non-medicated soaps, bath gels, essential oils for aromatherapy, and similar personal care products fall under Class 3.",
      },
      {
        question: "Do perfumes and fragrances fall in Class 3?",
        answer:
          "Yes. Perfumes, colognes, eau de toilette, scented body preparations, and other fragrance products are classified under Class 3.",
      },
      {
        question: "Are hair care products included in Class 3?",
        answer:
          "Yes. Shampoos, conditioners, hair dyes, styling gels, sprays, and other hair care preparations fall under Class 3.",
      },
      {
        question: "Does Class 3 cover oral hygiene products?",
        answer:
          "Yes. Toothpaste, tooth powder, non-medicated mouthwashes, and other oral hygiene products are included in Class 3.",
      },
      {
        question: "Are household cleaning products part of Class 3?",
        answer:
          "Yes. Preparations for cleaning, polishing, scouring, and abrasive purposes—like laundry detergents, dishwashing liquids, floor cleaners, and furniture polish—fall under Class 3.",
      },
    ],
  },
  {
    id: 4,
    class: 4,
    title: "Class 4",
    heroTitle:
      "Protecting Your Brand with Fuels, Lubricants, & Industrial Oils",
    img1: understading,

    understanding:
      "Trademark Class 4 is a specialized category within the Nice Classification system, dedicated to protecting brands related to industrial oils, greases, lubricants, and fuels. This class is essential for businesses in the energy, automotive, manufacturing, and chemical industries that produce or supply these fundamental materials.",

    includeGoods: [
      {
        id: 1,
        name: "Industrial oils and greases: This includes all forms of lubricants, cutting fluids, and greases for machinery, motors, and engines.",
      },
      {
        id: 2,
        name: "Fuels and motor fuels: This covers all types of fuels for vehicles and industrial use, such as gasoline, diesel, and biofuels.",
      },
      {
        id: 3,
        name: "Industrial waxes: This includes raw and industrial waxes for manufacturing purposes.",
      },
      {
        id: 4,
        name: "Illuminants: This category covers chemical preparations for lighting, including lamp oil, candles, and wicks.",
      },
      {
        id: 5,
        name: "Oils for preservation: This includes oils specifically used for the preservation of masonry or leather.",
      },
      {
        id: 6,
        name: "Electrical energy: This is a specific inclusion for businesses that supply or distribute electrical energy.",
      },
      {
        id: 7,
        name: "Non-chemical additives for fuels: This covers substances that enhance fuels but are not classified as industrial chemicals.",
      },
      {
        id: 8,
        name: "Wood for use as fuel: This category includes wood that is processed and sold specifically as a fuel source.",
      },
    ],

    productList: [
      {
        id: 1,
        name: "Fuels",
        subcategories: [
          { id: 1, name: "Biofuels" },
          { id: 2, name: "Briquettes" },
          { id: 3, name: "Coal" },
          { id: 4, name: "Crude" },
          { id: 5, name: "Diesel" },
          { id: 6, name: "Gasoline" },
          { id: 7, name: "Kerosene" },
          { id: 8, name: "Motor" },
          { id: 9, name: "Petroleum" },
          { id: 10, name: "Wood" },
        ],
      },
      {
        id: 2,
        name: "Oils & Greases",
        subcategories: [
          { id: 1, name: "Fluids" },
          { id: 2, name: "Greases" },
          { id: 3, name: "Lubricants" },
          { id: 4, name: "Mineral" },
          { id: 5, name: "Motor" },
          { id: 6, name: "Oils" },
        ],
      },
      {
        id: 3,
        name: "Specialty",
        subcategories: [
          { id: 1, name: "Additives" },
          { id: 2, name: "Compositions" },
          { id: 3, name: "Energy" },
          { id: 4, name: "Leather" },
          { id: 5, name: "Masonry" },
        ],
      },
      {
        id: 4,
        name: "Waxes & Illuminants",
        subcategories: [
          { id: 1, name: "Candles" },
          { id: 2, name: "Illuminants" },
          { id: 3, name: "Lamp" },
          { id: 4, name: "Paraffin" },
          { id: 5, name: "Raw" },
          { id: 6, name: "Wicks" },
        ],
      },
    ],
    excludeGoods: [
      {
        id: 1,
        name: "Industrial chemicals",
      },
      {
        id: 2,
        name: "Lubricating services, such as car oil changes",
      },
      {
        id: 3,
        name: "Medicinal oils",
      },
      {
        id: 4,
        name: "Edible oils and fats",
      },
      {
        id: 5,
        name: "Waxes for cleaning, polishing, or scouring",
      },
      {
        id: 6,
        name: "Vehicle parts, such as engine filters",
      },
      {
        id: 7,
        name: "Asphalt, bitumen, and other road surfacing materials",
      },
      {
        id: 8,
        name: "Raw resins, both natural and artificial",
      },
    ],

    relatedClasses: [
      {
        id: 1,
        name: "Class 1",
      },
      {
        id: 2,
        name: "Class 2",
      },
      {
        id: 3,
        name: "Class 3",
      },
      {
        id: 4,
        name: "Class 5",
      },
      {
        id: 5,
        name: "Class 16",
      },
      {
        id: 6,
        name: "Class 18",
      },
      {
        id: 6,
        name: "Class 21",
      },
    ],
    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 4 is primarily for businesses that manufacture or supply industrial oils, greases, lubricants, fuels, and illuminants., varnishes, colorants, and other protective coatings.",
    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaGasPump
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Fuel & Energy Companies",
        subheading:
          "Businesses that produce and distribute motor fuels, biofuels, and other energy sources for vehicles and industrial applications.",
      },
      {
        id: 2,
        icon: (
          <FaOilCan
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Lubricant & Grease",
        subheading:
          "Companies that manufacture industrial oils, engine lubricants, and greases for machinery, motors, and other mechanical parts.",
      },
      {
        id: 3,
        icon: (
          <FaFire
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Candle & Illuminant Producers",
        subheading:
          "Those specializing in the production of candles, wicks for lighting, lamp oil, and other preparations for illumination.",
      },
      {
        id: 4,
        icon: (
          <FaFireAlt
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Industrial Fuel & Carbon Suppliers",
        subheading:
          "Suppliers of solid fuels such as coal, charcoal, briquettes, and other combustible materials for industrial furnaces or heating.",
      },
      {
        id: 5,
        icon: (
          <FaIndustry
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Specialty Oil & Wax Providers",
        subheading:
          "Businesses that provide specialized products like cutting oils, textile oils, or paraffin wax for use in various manufacturing processes.",
      },
      {
        id: 6,
        icon: (
          <FaCar
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              // marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Automotive Supply Companies",
        subheading:
          "Companies providing a range of products for vehicle maintenance, including engine oils, transmission fluids, and other automotive lubricants.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 4?",
        answer:
          "Trademark Class 4 is a category within the international Nice Classification system that covers industrial oils, greases, lubricants, fuels, and illuminants. This class is essential for businesses in the energy and automotive sectors.",
      },
      {
        question: "What products fall under Class 4?",
        answer:
          "Class 4 includes a wide range of products for lubrication and energy. Key examples are industrial oils and greases, engine lubricants, motor fuels, diesel, kerosene, waxes, candles, and wicks for lighting.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 4?",
        answer:
          "Yes. Businesses in this industry, such as oil and gas companies, often register a single trademark to cover multiple related goods within Class 4, such as lubricants, fuels, and greases, for comprehensive brand protection.",
      },
      {
        question: "Does Class 4 cover raw materials?",
        answer:
          "Yes. Class 4 includes raw materials that are themselves fuels or lubricants, such as crude oil and other unrefined hydrocarbons, as well as substances like industrial wax and coal.",
      },
      {
        question: "Do fuels for vehicles fall in Class 4?",
        answer:
          "Yes. Motor fuels, including gasoline, diesel, biofuels, and other fuels for internal combustion engines, are all classified in Class 4.",
      },
      {
        question: "Are household products like candles included in Class 4?",
        answer:
          "Yes. Products for illumination, such as candles, wicks for lighting, and lamp oil, are included in Class 4, as they are sources of light and heat.",
      },
      {
        question: "How does Class 4 differ from other classes?",
        answer:
          "Class 4 is specifically for energy and lubrication products, distinguishing it from related categories. For instance, Class 1 covers industrial chemicals and raw resins, while Class 3 covers non-medicated cleaning and polishing preparations, even if they share some ingredients.",
      },
      {
        question: "Do lubricants for industrial machinery fall under Class 4?",
        answer:
          "Yes. Lubricants and greases for all types of industrial machinery, including engines, motors, and other mechanical parts, are classified in Class 4.",
      },
    ],
  },

  {
    id: 5,
    class: 5,
    title: "Class 5",
    heroTitle: "Protecting Your Health Brand",
    img1: understading,

    understanding:
      "Trademark Class 5 is a critical category within the Nice Classification system, dedicated to protecting brands related to pharmaceuticals, medical and veterinary preparations, and sanitary goods for medical purposes. This class is essential for businesses in the healthcare, pharmaceutical, and personal hygiene industries that produce or supply products for health, wellness, and medical treatment.",

    includeGoods: [
      {
        id: 1,
        name: "Pharmaceutical preparations: Includes medicines, tablets, capsules, syrups, ointments, tinctures, and powders for medical use.",
      },
      {
        id: 2,
        name: "Veterinary preparations: Includes medicines, supplements, and vaccines for animals.",
      },
      {
        id: 3,
        name: "Sanitary preparations: Includes diapers, sanitary pads, tampons, wipes, antiseptics, toothpastes, and mouthwashes.",
      },
      {
        id: 4,
        name: "Dietary and nutritional supplements: Includes vitamins, minerals, herbal, dietary, and probiotic preparations.",
      },
      {
        id: 5,
        name: "Health and first aid preparations: Includes bandages, plasters, medical creams, ointments, and sanitizers.",
      },
      {
        id: 6,
        name: "Antiseptic and disinfectant preparations: Includes hand sanitizers, disinfectant sprays, and other cleaning preparations for medical or sanitary use.",
      },
      {
        id: 7,
        name: "Medical diagnostic preparations: Includes reagents and kits for testing and diagnostics.",
      },
      {
        id: 8,
        name: "Pharmaceutical additives: Includes excipients, carriers, and other substances used in medicinal preparations.",
      },
    ],

    productList: [
      {
        id: 1,
        name: "Pharmaceuticals",
        subcategories: [
          { id: 1, name: "Medicines" },
          { id: 2, name: "Tablets" },
          { id: 3, name: "Capsules" },
          { id: 4, name: "Pills" },
          { id: 5, name: "Ointments" },
          { id: 6, name: "Suppositories" },
          { id: 7, name: "Syrups" },
          { id: 8, name: "Tinctures" },
          { id: 9, name: "Powders" },
          { id: 10, name: "Elixirs" },
        ],
      },
      {
        id: 2,
        name: "Veterinary",
        subcategories: [
          { id: 1, name: "AnimalMedicines" },
          { id: 2, name: "AnimalSupplements" },
          { id: 3, name: "Disinfectants" },
          { id: 4, name: "Antiparasitic" },
          { id: 5, name: "Vaccines" },
        ],
      },
      {
        id: 3,
        name: "Sanitary",
        subcategories: [
          { id: 1, name: "Diapers" },
          { id: 2, name: "SanitaryPads" },
          { id: 3, name: "Tampons" },
          { id: 4, name: "Toothpaste" },
          { id: 5, name: "Mouthwash" },
          { id: 6, name: "Antiseptics" },
          { id: 7, name: "Wipes" },
          { id: 8, name: "Disinfectants" },
        ],
      },
      {
        id: 4,
        name: "Supplements",
        subcategories: [
          { id: 1, name: "Vitamins" },
          { id: 2, name: "Minerals" },
          { id: 3, name: "Herbal" },
          { id: 4, name: "Dietary" },
          { id: 5, name: "Nutritional" },
          { id: 6, name: "Probiotics" },
        ],
      },
      {
        id: 5,
        name: "HealthPrep",
        subcategories: [
          { id: 1, name: "Bandages" },
          { id: 2, name: "Plasters" },
          { id: 3, name: "MedicalCreams" },
          { id: 4, name: "Ointments" },
          { id: 5, name: "Sanitizers" },
          { id: 6, name: "DisinfectantSprays" },
        ],
      },
    ],

    excludeGoods: [
      { id: 1, name: "Cosmetics" },
      { id: 2, name: "Food and beverages" },
      { id: 3, name: "Medical devices" },
      { id: 4, name: "Household cleaning products" },
      { id: 5, name: "Agricultural chemicals" },
      { id: 6, name: "Industrial oils and fuels" },
      { id: 7, name: "Veterinary equipment" },
      { id: 8, name: "Animal feed" },
    ],
    relatedClasses: [
      { id: 1, name: "Class 3" }, // Cosmetics & cleaning
      { id: 2, name: "Class 5" }, // Pharmaceuticals
      { id: 3, name: "Class 10" }, // Medical apparatus
      { id: 4, name: "Class 16" }, // Paper & hygiene products
      { id: 5, name: "Class 21" }, // Household utensils, cleaning products
      { id: 6, name: "Class 29" }, // Food supplements, dietary products
      { id: 7, name: "Class 44" }, // Medical services / veterinary
    ],

    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 5 covers pharmaceuticals, medical and veterinary products, sanitary items, dietary supplements, and health-related preparations.",

    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaPills
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Pharma Companies",
        subheading: "Manufacturers of medicines, tablets, syrups, and drugs.",
      },
      {
        id: 2,
        icon: (
          <FaClinicMedical
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Healthcare Providers",
        subheading: "Hospitals, clinics, and labs offering medical services.",
      },
      {
        id: 3,
        icon: (
          <FaCapsules
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Nutraceutical Brands",
        subheading: "Producers of vitamins, supplements, and dietary products.",
      },
      {
        id: 4,
        icon: (
          <FaDog
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Veterinary Firms",
        subheading: "Animal health medicine and pet care product makers.",
      },
      {
        id: 5,
        icon: (
          <FaSoap
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Sanitary Product Makers",
        subheading:
          "Producers of disinfectants, antiseptics, and hygiene items.",
      },
      {
        id: 6,
        icon: (
          <FaLeaf
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Ayurvedic & Herbal",
        subheading: "Brands offering herbal and natural health products.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 5?",
        answer:
          "Trademark Class 5 is a category within the international Nice Classification system that covers pharmaceuticals, medical and veterinary preparations, as well as sanitary preparations for medical purposes. This class is for products that are used for health, hygiene, and medical care.",
      },
      {
        question: "What products fall under Class 5?",
        answer:
          "Class 5 includes a broad range of products, such as medicines for human and animal use, vitamins, medical dressings and plasters, disinfectants, dietary supplements for medical purposes, and sanitary preparations like tampons and diapers.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 5?",
        answer:
          "Yes. Businesses often register a single trademark to cover multiple related goods within Class 5, such as a line of vitamins and supplements or a range of medical dressings, for comprehensive brand protection.",
      },
      {
        question: "Does Class 5 cover raw materials?",
        answer:
          "Yes. Class 5 includes raw materials for pharmaceutical preparations, such as medicinal herbs, natural medicinal remedies, and certain unprocessed biological materials for medical use.",
      },
      {
        question: "Are hygienic and sanitary products included in Class 5?",
        answer:
          "Yes. Sanitary preparations for medical purposes, as well as diapers, tampons, and sanitary pads, are all classified in Class 5. Disinfectants and germicides for medical use are also included.",
      },
      {
        question: "Are dietetic foods and beverages included in Class 5?",
        answer:
          "Yes. Dietetic foods and beverages for medical or veterinary purposes, as well as nutritional supplements and meal replacements for a restricted diet, are all classified in Class 5.",
      },
      {
        question: "How does Class 5 differ from other classes?",
        answer:
          "Class 5 is specifically for medical, sanitary, and pharmaceutical goods. This distinguishes it from Class 3 (non-medicated cosmetics and toiletries) and Class 29 or 30 (general foods and beverages).",
      },
      {
        question: "Do medical dressings and bandages fall under Class 5?",
        answer:
          "Yes. All types of medical and surgical dressings, including plasters, bandages, gauze, and materials for dressings, are classified in Class 5.",
      },
    ],
  },

  {
    id: 6,
    class: 6,
    title: "Class 6",
    heroTitle: "Protecting Your Metal & Metal Goods",
    img1: understading,

    understanding:
      "Trademark Class 5 is a critical category within the Nice Classification system, dedicated to protecting brands related to pharmaceuticals, medical and veterinary preparations, and sanitary goods for medical purposes. This class is essential for businesses in the healthcare, pharmaceutical, and personal hygiene industries that produce or supply products for health, wellness, and medical treatment.",

    includeGoods: [
      {
        id: 1,
        name: "Common metals: All forms of raw and processed metals for industrial or commercial use.",
      },
      {
        id: 2,
        name: "Metal building materials: Sheets, bars, rods, tubes, and other metal construction elements.",
      },
      {
        id: 3,
        name: "Small metal goods: Hardware, fittings, fasteners, locks, and keys.",
      },
      {
        id: 4,
        name: "Metal containers: Boxes, cans, tanks, and other metal packaging solutions.",
      },
      {
        id: 5,
        name: "Metal wires and cables: For industrial, construction, or electrical use.",
      },
      {
        id: 6,
        name: "Metal hardware for machinery: Components, fittings, and parts made of metal.",
      },
      {
        id: 7,
        name: "Metal storage and shelving units: Cabinets, racks, and supports made of metal.",
      },
      {
        id: 8,
        name: "Metal fittings for buildings: Doors, windows, gates, and metal frameworks.",
      },
    ],

    productList: [
      {
        id: 1,
        name: "Metals",
        subcategories: [
          { id: 1, name: "Iron" },
          { id: 2, name: "Steel" },
          { id: 3, name: "Aluminium" },
          { id: 4, name: "Copper" },
          { id: 5, name: "Brass" },
          { id: 6, name: "Nickel" },
          { id: 7, name: "Zinc" },
          { id: 8, name: "Tin" },
          { id: 9, name: "Lead" },
          { id: 10, name: "MetalAlloys" },
        ],
      },
      {
        id: 2,
        name: "MetalBuildingMaterials",
        subcategories: [
          { id: 1, name: "Sheets" },
          { id: 2, name: "Bars" },
          { id: 3, name: "Rods" },
          { id: 4, name: "Tubes" },
          { id: 5, name: "Pipes" },
          { id: 6, name: "Plates" },
          { id: 7, name: "Frames" },
          { id: 8, name: "Rails" },
        ],
      },
      {
        id: 3,
        name: "Hardware",
        subcategories: [
          { id: 1, name: "Nails" },
          { id: 2, name: "Screws" },
          { id: 3, name: "Bolts" },
          { id: 4, name: "Rivets" },
          { id: 5, name: "Hinges" },
          { id: 6, name: "Locks" },
          { id: 7, name: "Keys" },
          { id: 8, name: "Handles" },
          { id: 9, name: "Brackets" },
          { id: 10, name: "Hooks" },
        ],
      },
      {
        id: 4,
        name: "MetalContainers",
        subcategories: [
          { id: 1, name: "Cans" },
          { id: 2, name: "Boxes" },
          { id: 3, name: "Tanks" },
          { id: 4, name: "Drums" },
          { id: 5, name: "Bottles" },
        ],
      },
      {
        id: 5,
        name: "MetalWires",
        subcategories: [
          { id: 1, name: "Cables" },
          { id: 2, name: "Ropes" },
          { id: 3, name: "Chains" },
          { id: 4, name: "WireMesh" },
          { id: 5, name: "ElectricalWire" },
        ],
      },
      {
        id: 6,
        name: "MetalMachineryParts",
        subcategories: [
          { id: 1, name: "GearParts" },
          { id: 2, name: "Shafts" },
          { id: 3, name: "Bearings" },
          { id: 4, name: "Pulleys" },
          { id: 5, name: "Springs" },
        ],
      },
      {
        id: 7,
        name: "MetalStorage",
        subcategories: [
          { id: 1, name: "Racks" },
          { id: 2, name: "Cabinets" },
          { id: 3, name: "Shelves" },
          { id: 4, name: "Containers" },
        ],
      },
      {
        id: 8,
        name: "MetalFittings",
        subcategories: [
          { id: 1, name: "Doors" },
          { id: 2, name: "Windows" },
          { id: 3, name: "Gates" },
          { id: 4, name: "Frames" },
          { id: 5, name: "Railings" },
          { id: 6, name: "Brackets" },
        ],
      },
    ],

    excludeGoods: [
      { id: 1, name: "Industrial chemicals" },
      { id: 2, name: "Lubricating services, such as car oil changes" },
      { id: 3, name: "Medicinal oils" },
      { id: 4, name: "Edible oils and fats" },
      { id: 5, name: "Waxes for cleaning, polishing, or scouring" },
      { id: 6, name: "Vehicle parts, such as engine filters" },
      { id: 7, name: "Asphalt, bitumen, and other road surfacing materials" },
      { id: 8, name: "Raw resins, both natural and artificial" },
    ],

    relatedClasses: [
      { id: 1, name: "Class 1" },
      { id: 2, name: "Class 2" },
      { id: 3, name: "Class 3" },
      { id: 4, name: "Class 5" },
      { id: 5, name: "Class 16" },
      { id: 6, name: "Class 18" },
      { id: 7, name: "Class 21" },
    ],

    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 6 covers metal goods, hardware, building materials, and small metal products used in construction or daily life.",

    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaIndustry
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Metal Product Makers",
        subheading:
          "Businesses producing metal goods, sheets, rods, or small metal items used in construction or manufacturing.",
      },
      {
        id: 2,
        icon: (
          <FaToolbox
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Hardware Manufacturers",
        subheading:
          "Companies making tools, fasteners, locks, hinges, and other hardware items for industry and homes.",
      },
      {
        id: 3,
        icon: (
          <FaWarehouse
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Building Material Suppliers",
        subheading:
          "Suppliers of metal construction materials, fittings, pipes, and other metal-based building products.",
      },
      {
        id: 4,
        icon: (
          <FaCogs
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Metal Components & Parts",
        subheading:
          "Businesses producing machinery parts, fasteners, or small metallic components for various industries.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 6?",
        answer:
          "Trademark Class 6 covers metals and their alloys, small metal goods, hardware, and building materials made of metal. It is for products used in construction, manufacturing, and industry.",
      },
      {
        question: "What products fall under Class 6?",
        answer:
          "Class 6 includes items such as metal sheets, rods, pipes, locks, hinges, nails, screws, metal fasteners, and other small metallic parts for industrial and home use.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 6?",
        answer:
          "Yes. Businesses often register a single trademark for multiple related metal or hardware products, like a line of tools, fasteners, or building fittings, for comprehensive brand protection.",
      },
      {
        question: "Does Class 6 cover raw metals?",
        answer:
          "Yes. Class 6 includes raw or unprocessed metals and alloys intended for manufacturing, construction, or industrial use.",
      },
      {
        question: "Are hardware and fittings included in Class 6?",
        answer:
          "Yes. Metal tools, locks, hinges, fasteners, and small hardware items are all classified in Class 6. Industrial fittings and components are also included.",
      },
      {
        question: "Are building materials included in Class 6?",
        answer:
          "Yes. Metal-based construction materials, pipes, rods, sheets, and fittings used for building or industrial purposes are part of Class 6.",
      },
      {
        question: "How does Class 6 differ from other classes?",
        answer:
          "Class 6 is specifically for metals, metal goods, and hardware. This distinguishes it from Class 5 (medical & pharmaceutical goods) and Class 19 (non-metal building materials).",
      },
      {
        question: "Do machinery parts made of metal fall under Class 6?",
        answer:
          "Yes. All types of metal components for machinery, industrial equipment, and mechanical devices are classified in Class 6.",
      },
    ],
  },

  {
    id: 7,
    class: 7,
    title: "Class 7",
    heroTitle: "Protecting Your Metal & Machinery Brand",

    img1: understading,

    understanding:
      "Trademark Class 5 is a critical category within the Nice Classification system, dedicated to protecting brands related to pharmaceuticals, medical and veterinary preparations, and sanitary goods for medical purposes. This class is essential for businesses in the healthcare, pharmaceutical, and personal hygiene industries that produce or supply products for health, wellness, and medical treatment.",

    includeGoods: [
      {
        id: 1,
        name: "Machines: Industrial and manufacturing machines for various uses.",
      },
      {
        id: 2,
        name: "Machine tools: Tools and equipment for shaping, cutting, and forming materials.",
      },
      {
        id: 3,
        name: "Engines: Engines and motors for vehicles, machines, and industrial use.",
      },
      {
        id: 4,
        name: "Agricultural machines: Equipment for farming and cultivation.",
      },
      {
        id: 5,
        name: "Industrial equipment: Devices and apparatus used in production or processing.",
      },
      {
        id: 6,
        name: "Mechanical parts: Components, fittings, and spare parts for machines.",
      },
      {
        id: 7,
        name: "Conveyors & lifting machines: Equipment for moving or lifting goods.",
      },
      {
        id: 8,
        name: "Power-driven tools: Electrical and mechanical tools for industrial use.",
      },
    ],

    productList: [
      {
        id: 1,
        name: "Machines",
        subcategories: [
          { id: 1, name: "Industrial" },
          { id: 2, name: "Agricultural" },
          { id: 3, name: "Construction" },
          { id: 4, name: "Textile" },
          { id: 5, name: "Printing" },
        ],
      },
      {
        id: 2,
        name: "Machine Tools",
        subcategories: [
          { id: 1, name: "Lathes" },
          { id: 2, name: "Drills" },
          { id: 3, name: "Milling" },
          { id: 4, name: "Grinders" },
          { id: 5, name: "Cutting" },
        ],
      },
      {
        id: 3,
        name: "Engines & Motors",
        subcategories: [
          { id: 1, name: "Electric" },
          { id: 2, name: "Diesel" },
          { id: 3, name: "Petrol" },
          { id: 4, name: "Hydraulic" },
          { id: 5, name: "Pneumatic" },
        ],
      },
      {
        id: 4,
        name: "Metal Working Machines",
        subcategories: [
          { id: 1, name: "Forging" },
          { id: 2, name: "Casting" },
          { id: 3, name: "Welding" },
          { id: 4, name: "Shearing" },
          { id: 5, name: "Bending" },
        ],
      },
      {
        id: 5,
        name: "Pumps & Compressors",
        subcategories: [
          { id: 1, name: "Water" },
          { id: 2, name: "Oil" },
          { id: 3, name: "Air" },
          { id: 4, name: "Vacuum" },
          { id: 5, name: "Hydraulic" },
        ],
      },
      {
        id: 6,
        name: "Conveyors & Lifts",
        subcategories: [
          { id: 1, name: "Belt" },
          { id: 2, name: "Chain" },
          { id: 3, name: "Hydraulic" },
          { id: 4, name: "Pneumatic" },
          { id: 5, name: "Cranes" },
        ],
      },
      {
        id: 7,
        name: "Packaging Machines",
        subcategories: [
          { id: 1, name: "Filling" },
          { id: 2, name: "Sealing" },
          { id: 3, name: "Wrapping" },
          { id: 4, name: "Labeling" },
          { id: 5, name: "Cartoning" },
        ],
      },
      {
        id: 8,
        name: "Industrial Equipment",
        subcategories: [
          { id: 1, name: "Mixers" },
          { id: 2, name: "Reactors" },
          { id: 3, name: "Boilers" },
          { id: 4, name: "Filters" },
          { id: 5, name: "Dryers" },
        ],
      },
      {
        id: 9,
        name: "Metal Goods",
        subcategories: [
          { id: 1, name: "Sheets" },
          { id: 2, name: "Bars" },
          { id: 3, name: "Rods" },
          { id: 4, name: "Tubes" },
          { id: 5, name: "Fittings" },
        ],
      },
      {
        id: 10,
        name: "Other Industrial Tools",
        subcategories: [
          { id: 1, name: "Hand Tools" },
          { id: 2, name: "Power Tools" },
          { id: 3, name: "Cutting Tools" },
          { id: 4, name: "Measuring Tools" },
          { id: 5, name: "Maintenance Tools" },
        ],
      },
    ],

    excludeGoods: [
      { id: 1, name: "Industrial chemicals" },
      { id: 2, name: "Lubricating services, e.g., car oil changes" },
      { id: 3, name: "Medicinal oils" },
      { id: 4, name: "Edible oils and fats" },
      { id: 5, name: "Waxes for cleaning, polishing, or scouring" },
      { id: 6, name: "Vehicle parts, e.g., engine filters" },
      { id: 7, name: "Asphalt, bitumen, and other road surfacing materials" },
      { id: 8, name: "Raw resins, natural or artificial" },
    ],

    relatedClasses: [
      { id: 1, name: "Class 1" },
      { id: 2, name: "Class 2" },
      { id: 3, name: "Class 3" },
      { id: 4, name: "Class 5" },
      { id: 5, name: "Class 16" },
      { id: 6, name: "Class 18" },
      { id: 7, name: "Class 21" },
    ],

    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 7 covers machines, machine tools, engines, and industrial equipment used in manufacturing, construction, and agriculture.",

    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaIndustry
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Industrial Manufacturers",
        subheading:
          "Businesses making machines, engines, and industrial equipment for production or manufacturing.",
      },
      {
        id: 2,
        icon: (
          <FaCogs
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Machine Tool Companies",
        subheading:
          "Companies producing tools and machinery for cutting, shaping, and assembling materials.",
      },
      {
        id: 3,
        icon: (
          <FaTractor
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Agricultural Machinery",
        subheading:
          "Businesses providing tractors, harvesters, and machinery for farming and agricultural use.",
      },
      {
        id: 4,
        icon: (
          <FaTruck
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Construction Equipment",
        subheading:
          "Suppliers of industrial and construction machines like cranes, bulldozers, and mixers.",
      },
      {
        id: 5,
        icon: (
          <FaTools
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Spare Parts & Components",
        subheading:
          "Providers of machine parts, engines, and industrial components for repairs or assembly.",
      },
      {
        id: 6,
        icon: (
          <FaBuilding
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Industrial Service Companies",
        subheading:
          "Companies offering maintenance, repair, or installation services for machinery and equipment.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 7?",
        answer:
          "Trademark Class 7 covers machines, machine tools, and industrial equipment used in manufacturing, construction, and production processes.",
      },
      {
        question: "What products fall under Class 7?",
        answer:
          "Class 7 includes machinery, machine parts, engines, tools, and industrial equipment for mechanical, agricultural, or manufacturing purposes.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 7?",
        answer:
          "Yes. A single trademark can cover multiple related machines or industrial tools for comprehensive brand protection.",
      },
      {
        question: "Does Class 7 cover raw machine parts?",
        answer:
          "Yes. Class 7 includes raw or unassembled machine parts, components, and spare parts for manufacturing and industrial use.",
      },
      {
        question: "Are industrial tools included in Class 7?",
        answer:
          "Yes. Machine tools, industrial devices, and mechanical instruments are all included in Class 7.",
      },
      {
        question: "Are engines and motors included in Class 7?",
        answer:
          "Yes. Engines, motors, and other power-generating machinery for industrial or mechanical use fall under Class 7.",
      },
      {
        question: "How does Class 7 differ from other classes?",
        answer:
          "Class 7 is specifically for machines and industrial tools, distinguishing it from Class 6 (metal goods) or Class 8 (hand tools).",
      },
      {
        question: "Do spare parts for machines fall under Class 7?",
        answer:
          "Yes. All types of spare parts and components for machines, engines, and industrial equipment are included in Class 7.",
      },
    ],
  },

  {
    id: 8,
    class: 8,
    title: "Class 8",
    heroTitle: "Protecting Your Metal & Machinery Brand",

    img1: understading,

    understanding:
      "Trademark Class 5 is a critical category within the Nice Classification system, dedicated to protecting brands related to pharmaceuticals, medical and veterinary preparations, and sanitary goods for medical purposes. This class is essential for businesses in the healthcare, pharmaceutical, and personal hygiene industries that produce or supply products for health, wellness, and medical treatment.",

    includeGoods: [
      {
        id: 1,
        name: "Hand tools: All types of handheld tools for manual work.",
      },
      {
        id: 2,
        name: "Cutlery: Knives, forks, spoons, and other eating utensils.",
      },
      {
        id: 3,
        name: "Kitchen implements: Hand-operated appliances for food preparation.",
      },
      {
        id: 4,
        name: "Razors & scissors: Personal grooming and cutting tools.",
      },
      {
        id: 5,
        name: "Agricultural tools: Manual tools for gardening and farming.",
      },
      {
        id: 6,
        name: "Hardware fittings: Hinges, locks, handles, and small metal parts.",
      },
      {
        id: 7,
        name: "Hand-operated machines: Non-electric manual devices.",
      },
      {
        id: 8,
        name: "Sharpening instruments: Tools for sharpening blades and cutting edges.",
      },
      {
        id: 9,
        name: "Metal utensils: Bowls, trays, pans, and other manual-use metal items.",
      },
      {
        id: 10,
        name: "Other hand-operated implements: Miscellaneous manual tools and devices.",
      },
    ],

    productList: [
      {
        id: 1,
        name: "HandTools",
        subcategories: [
          { id: 1, name: "Hammers" },
          { id: 2, name: "Screwdrivers" },
          { id: 3, name: "Pliers" },
          { id: 4, name: "Wrenches" },
          { id: 5, name: "Chisels" },
          { id: 6, name: "Saws" },
          { id: 7, name: "Files" },
          { id: 8, name: "Trowels" },
          { id: 9, name: "Axes" },
          { id: 10, name: "Spanners" },
        ],
      },
      {
        id: 2,
        name: "Cutlery",
        subcategories: [
          { id: 1, name: "Knives" },
          { id: 2, name: "Forks" },
          { id: 3, name: "Spoons" },
          { id: 4, name: "Choppers" },
          { id: 5, name: "Peelers" },
          { id: 6, name: "Graters" },
          { id: 7, name: "Scissors" },
          { id: 8, name: "Cleavers" },
          { id: 9, name: "Spatulas" },
          { id: 10, name: "Tongs" },
        ],
      },
      {
        id: 3,
        name: "Razors",
        subcategories: [
          { id: 1, name: "Straight" },
          { id: 2, name: "Safety" },
          { id: 3, name: "Electric" },
          { id: 4, name: "Cartridge" },
          { id: 5, name: "ShavingBrush" },
          { id: 6, name: "Strops" },
          { id: 7, name: "Blades" },
          { id: 8, name: "Trimmers" },
          { id: 9, name: "ShavingBowls" },
          { id: 10, name: "ShavingKits" },
        ],
      },
      {
        id: 4,
        name: "SideArms",
        subcategories: [
          { id: 1, name: "Swords" },
          { id: 2, name: "Daggers" },
          { id: 3, name: "Knuckledusters" },
          { id: 4, name: "Bayonets" },
          { id: 5, name: "Cutlasses" },
          { id: 6, name: "Dirks" },
          { id: 7, name: "Axes" },
          { id: 8, name: "Machetes" },
          { id: 9, name: "Stilettos" },
          { id: 10, name: "Sabres" },
        ],
      },
      {
        id: 5,
        name: "GardenTools",
        subcategories: [
          { id: 1, name: "Pruners" },
          { id: 2, name: "Shears" },
          { id: 3, name: "Rakes" },
          { id: 4, name: "Shovels" },
          { id: 5, name: "Spades" },
          { id: 6, name: "Hoes" },
          { id: 7, name: "Trowels" },
          { id: 8, name: "Cultivators" },
          { id: 9, name: "Loppers" },
          { id: 10, name: "Forks" },
        ],
      },
      {
        id: 6,
        name: "CuttingTools",
        subcategories: [
          { id: 1, name: "Shears" },
          { id: 2, name: "Scissors" },
          { id: 3, name: "Knives" },
          { id: 4, name: "Saws" },
          { id: 5, name: "Choppers" },
          { id: 6, name: "Axes" },
          { id: 7, name: "Machetes" },
          { id: 8, name: "Cleavers" },
          { id: 9, name: "Pruners" },
          { id: 10, name: "Cutters" },
        ],
      },
      {
        id: 7,
        name: "KitchenTools",
        subcategories: [
          { id: 1, name: "Peelers" },
          { id: 2, name: "Graters" },
          { id: 3, name: "Spatulas" },
          { id: 4, name: "Tongs" },
          { id: 5, name: "Whisks" },
          { id: 6, name: "Ladles" },
          { id: 7, name: "Choppers" },
          { id: 8, name: "Sieves" },
          { id: 9, name: "Spoons" },
          { id: 10, name: "Forks" },
        ],
      },
      {
        id: 8,
        name: "BarberTools",
        subcategories: [
          { id: 1, name: "Razors" },
          { id: 2, name: "ShavingBrushes" },
          { id: 3, name: "Scissors" },
          { id: 4, name: "Combs" },
          { id: 5, name: "Clippers" },
          { id: 6, name: "HairTrimmers" },
          { id: 7, name: "ShavingBowls" },
          { id: 8, name: "Strops" },
          { id: 9, name: "Aprons" },
          { id: 10, name: "Capes" },
        ],
      },
      {
        id: 9,
        name: "JewelryTools",
        subcategories: [
          { id: 1, name: "Pliers" },
          { id: 2, name: "Tweezers" },
          { id: 3, name: "Files" },
          { id: 4, name: "Hammers" },
          { id: 5, name: "Saws" },
          { id: 6, name: "Anvils" },
          { id: 7, name: "Cutters" },
          { id: 8, name: "Molds" },
          { id: 9, name: "BenchBlocks" },
          { id: 10, name: "Polishers" },
        ],
      },
      {
        id: 10,
        name: "MiscTools",
        subcategories: [
          { id: 1, name: "MeasuringTools" },
          { id: 2, name: "Clamps" },
          { id: 3, name: "Levels" },
          { id: 4, name: "Planes" },
          { id: 5, name: "Brushes" },
          { id: 6, name: "Mallets" },
          { id: 7, name: "Scrapers" },
          { id: 8, name: "Awls" },
          { id: 9, name: "Punches" },
          { id: 10, name: "Rulers" },
        ],
      },
    ],

    excludeGoods: [
      {
        id: 1,
        name: "Industrial chemicals",
      },
      {
        id: 2,
        name: "Lubricating services, such as car oil changes",
      },
      {
        id: 3,
        name: "Medicinal oils",
      },
      {
        id: 4,
        name: "Edible oils and fats",
      },
      {
        id: 5,
        name: "Waxes for cleaning, polishing, or scouring",
      },
      {
        id: 6,
        name: "Vehicle parts, such as engine filters",
      },
      {
        id: 7,
        name: "Asphalt, bitumen, and other road surfacing materials",
      },
      {
        id: 8,
        name: "Raw resins, both natural and artificial",
      },
    ],

    relatedClasses: [
      { id: 1, name: "Class 6" },
      { id: 2, name: "Class 7" },
      { id: 3, name: "Class 9" },
      { id: 4, name: "Class 11" },
      { id: 5, name: "Class 12" },
      { id: 6, name: "Class 16" },
      { id: 7, name: "Class 18" },
      { id: 8, name: "Class 21" },
    ],

    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 8 is for businesses making or selling hand tools, cutlery, kitchen utensils, razors, scissors, and other manual metal implements.",

    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaHammer
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Hand Tool Makers",
        subheading:
          "Businesses producing hammers, screwdrivers, pliers, and other manual tools.",
      },
      {
        id: 2,
        icon: (
          <FaCut
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Cutlery & Kitchen Utensils",
        subheading:
          "Manufacturers of knives, forks, spoons, kitchen knives, peelers, and cooking tools.",
      },
      {
        id: 3,
        icon: (
          <FaScissors
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Scissors & Razors",
        subheading:
          "Companies producing scissors, razors, hair clippers, and grooming tools.",
      },
      {
        id: 4,
        icon: (
          <FaWrench
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Mechanical & Repair Tools",
        subheading:
          "Suppliers of wrenches, spanners, pliers, and other repair and assembly tools.",
      },
      {
        id: 5,
        icon: (
          <FaUtensils
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Kitchenware Suppliers",
        subheading:
          "Businesses offering specialized kitchen instruments and cookware.",
      },
      {
        id: 6,
        icon: (
          <FaBox
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Small Metal Goods Producers",
        subheading:
          "Manufacturers of locks, keys, fasteners, hardware, and metal fittings.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 8?",
        answer:
          "Trademark Class 8 covers hand tools, cutlery, kitchen utensils, razors, scissors, and other manual or small metal goods used in households, workshops, or industries.",
      },
      {
        question: "What products fall under Class 8?",
        answer:
          "Class 8 includes hand tools like hammers and screwdrivers, cutlery such as knives and forks, kitchen utensils, razors, scissors, and small metal items like locks, keys, and fasteners.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 8?",
        answer:
          "Yes. You can register a single trademark to cover related goods, such as a range of kitchen utensils or a set of hand tools, for better brand protection.",
      },
      {
        question: "Does Class 8 cover raw metal materials?",
        answer:
          "No. Class 8 focuses on tools and finished metal goods, not raw metals, which are classified under Class 6.",
      },
      {
        question: "Are household cutlery and utensils included in Class 8?",
        answer:
          "Yes. All types of kitchen utensils, cutlery, and cooking tools are included in Class 8.",
      },
      {
        question: "Does Class 8 include grooming tools?",
        answer:
          "Yes. Razors, scissors, hair clippers, and other manual grooming tools fall under Class 8.",
      },
      {
        question: "How does Class 8 differ from other classes?",
        answer:
          "Class 8 is specifically for hand tools and metal household goods. It differs from Class 6 (raw metals) and Class 7 (machines and industrial equipment).",
      },
      {
        question: "Are hardware and small metal fittings included in Class 8?",
        answer:
          "Yes. Items like locks, keys, fasteners, and other small metal goods are part of Class 8.",
      },
    ],
  },

  {
    id: 9,
    class: 9,
    title: "Class 9",
    heroTitle: "Protecting Your Electronics, Scientific & Technical Goods",
    img1: understading,

    understanding:
      "Trademark Class 5 is a critical category within the Nice Classification system, dedicated to protecting brands related to pharmaceuticals, medical and veterinary preparations, and sanitary goods for medical purposes. This class is essential for businesses in the healthcare, pharmaceutical, and personal hygiene industries that produce or supply products for health, wellness, and medical treatment.",

    includeGoods: [
      {
        id: 1,
        name: "Scientific instruments: Devices and tools for research, testing, and laboratory use.",
      },
      {
        id: 2,
        name: "Electrical apparatus: Equipment for generating, storing, or distributing electricity.",
      },
      {
        id: 3,
        name: "Computers & software: Hardware, programs, and applications for data processing.",
      },
      {
        id: 4,
        name: "Measuring instruments: Meters, gauges, and devices for precise measurement.",
      },
      {
        id: 5,
        name: "Optical devices: Lenses, microscopes, binoculars, and cameras.",
      },
      {
        id: 6,
        name: "Communication devices: Telephones, radios, and transmission equipment.",
      },
      {
        id: 7,
        name: "Safety & protective equipment: Goggles, alarms, and fire-extinguishing apparatus.",
      },
      {
        id: 8,
        name: "Electrical cables & connectors: Wires, plugs, and adapters for electrical connections.",
      },
    ],

    productList: [
      {
        id: 1,
        name: "HandTools",
        subcategories: [
          { id: 1, name: "Hammers" },
          { id: 2, name: "Screwdrivers" },
          { id: 3, name: "Pliers" },
          { id: 4, name: "Wrenches" },
          { id: 5, name: "Chisels" },
          { id: 6, name: "Saws" },
          { id: 7, name: "Files" },
          { id: 8, name: "Trowels" },
          { id: 9, name: "Axes" },
          { id: 10, name: "Spanners" },
        ],
      },
      {
        id: 2,
        name: "Cutlery",
        subcategories: [
          { id: 1, name: "Knives" },
          { id: 2, name: "Forks" },
          { id: 3, name: "Spoons" },
          { id: 4, name: "Choppers" },
          { id: 5, name: "Peelers" },
          { id: 6, name: "Graters" },
          { id: 7, name: "Scissors" },
          { id: 8, name: "Cleavers" },
          { id: 9, name: "Spatulas" },
          { id: 10, name: "Tongs" },
        ],
      },
      {
        id: 3,
        name: "Razors",
        subcategories: [
          { id: 1, name: "Straight" },
          { id: 2, name: "Safety" },
          { id: 3, name: "Electric" },
          { id: 4, name: "Cartridge" },
          { id: 5, name: "ShavingBrush" },
          { id: 6, name: "Strops" },
          { id: 7, name: "Blades" },
          { id: 8, name: "Trimmers" },
          { id: 9, name: "ShavingBowls" },
          { id: 10, name: "ShavingKits" },
        ],
      },
      {
        id: 4,
        name: "SideArms",
        subcategories: [
          { id: 1, name: "Swords" },
          { id: 2, name: "Daggers" },
          { id: 3, name: "Knuckledusters" },
          { id: 4, name: "Bayonets" },
          { id: 5, name: "Cutlasses" },
          { id: 6, name: "Dirks" },
          { id: 7, name: "Axes" },
          { id: 8, name: "Machetes" },
          { id: 9, name: "Stilettos" },
          { id: 10, name: "Sabres" },
        ],
      },
      {
        id: 5,
        name: "GardenTools",
        subcategories: [
          { id: 1, name: "Pruners" },
          { id: 2, name: "Shears" },
          { id: 3, name: "Rakes" },
          { id: 4, name: "Shovels" },
          { id: 5, name: "Spades" },
          { id: 6, name: "Hoes" },
          { id: 7, name: "Trowels" },
          { id: 8, name: "Cultivators" },
          { id: 9, name: "Loppers" },
          { id: 10, name: "Forks" },
        ],
      },
      {
        id: 6,
        name: "CuttingTools",
        subcategories: [
          { id: 1, name: "Shears" },
          { id: 2, name: "Scissors" },
          { id: 3, name: "Knives" },
          { id: 4, name: "Saws" },
          { id: 5, name: "Choppers" },
          { id: 6, name: "Axes" },
          { id: 7, name: "Machetes" },
          { id: 8, name: "Cleavers" },
          { id: 9, name: "Pruners" },
          { id: 10, name: "Cutters" },
        ],
      },
      {
        id: 7,
        name: "KitchenTools",
        subcategories: [
          { id: 1, name: "Peelers" },
          { id: 2, name: "Graters" },
          { id: 3, name: "Spatulas" },
          { id: 4, name: "Tongs" },
          { id: 5, name: "Whisks" },
          { id: 6, name: "Ladles" },
          { id: 7, name: "Choppers" },
          { id: 8, name: "Sieves" },
          { id: 9, name: "Spoons" },
          { id: 10, name: "Forks" },
        ],
      },
      {
        id: 8,
        name: "BarberTools",
        subcategories: [
          { id: 1, name: "Razors" },
          { id: 2, name: "ShavingBrushes" },
          { id: 3, name: "Scissors" },
          { id: 4, name: "Combs" },
          { id: 5, name: "Clippers" },
          { id: 6, name: "HairTrimmers" },
          { id: 7, name: "ShavingBowls" },
          { id: 8, name: "Strops" },
          { id: 9, name: "Aprons" },
          { id: 10, name: "Capes" },
        ],
      },
      {
        id: 9,
        name: "JewelryTools",
        subcategories: [
          { id: 1, name: "Pliers" },
          { id: 2, name: "Tweezers" },
          { id: 3, name: "Files" },
          { id: 4, name: "Hammers" },
          { id: 5, name: "Saws" },
          { id: 6, name: "Anvils" },
          { id: 7, name: "Cutters" },
          { id: 8, name: "Molds" },
          { id: 9, name: "BenchBlocks" },
          { id: 10, name: "Polishers" },
        ],
      },
      {
        id: 10,
        name: "MiscTools",
        subcategories: [
          { id: 1, name: "MeasuringTools" },
          { id: 2, name: "Clamps" },
          { id: 3, name: "Levels" },
          { id: 4, name: "Planes" },
          { id: 5, name: "Brushes" },
          { id: 6, name: "Mallets" },
          { id: 7, name: "Scrapers" },
          { id: 8, name: "Awls" },
          { id: 9, name: "Punches" },
          { id: 10, name: "Rulers" },
        ],
      },
    ],

    excludeGoods: [
      {
        id: 1,
        name: "Industrial chemicals",
      },
      {
        id: 2,
        name: "Lubricating services, such as car oil changes",
      },
      {
        id: 3,
        name: "Medicinal oils",
      },
      {
        id: 4,
        name: "Edible oils and fats",
      },
      {
        id: 5,
        name: "Waxes for cleaning, polishing, or scouring",
      },
      {
        id: 6,
        name: "Vehicle parts, such as engine filters",
      },
      {
        id: 7,
        name: "Asphalt, bitumen, and other road surfacing materials",
      },
      {
        id: 8,
        name: "Raw resins, both natural and artificial",
      },
    ],

    relatedClasses: [
      { id: 1, name: "Class 3" }, // Cosmetics & cleaning products
      { id: 2, name: "Class 7" }, // Machines & machine tools
      { id: 3, name: "Class 8" }, // Hand tools & implements
      { id: 4, name: "Class 11" }, // Lighting, heating, and cooling apparatus
      { id: 5, name: "Class 12" }, // Vehicles
      { id: 6, name: "Class 14" }, // Jewelry & precious metals
      { id: 7, name: "Class 35" }, // Business & commercial services
      { id: 8, name: "Class 42" }, // Scientific & technological services
    ],

    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 9 is for businesses offering electronics, software, computers, scientific instruments, and electrical devices. It protects technology, gadgets, and digital products.",

    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaMobileAlt
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Electronics Manufacturers",
        subheading:
          "Businesses producing electronic devices like computers, phones, and wearable tech.",
      },
      {
        id: 2,
        icon: (
          <FaRobot
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Software & App Developers",
        subheading:
          "Companies developing software, apps, or operating systems for various devices.",
      },
      {
        id: 3,
        icon: (
          <FaCamera
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Optical & Imaging Producers",
        subheading:
          "Manufacturers of cameras, lenses, optical instruments, and imaging devices.",
      },
      {
        id: 4,
        icon: (
          <FaMicrochip
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Semiconductor Companies",
        subheading:
          "Producers of microchips, processors, and electronic components for devices.",
      },
      {
        id: 5,
        icon: (
          <FaSatelliteDish
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Telecommunication Equipment",
        subheading:
          "Businesses making devices for communication, networking, and signal transmission.",
      },
      {
        id: 6,
        icon: (
          <FaLock
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Security & Safety Tech",
        subheading:
          "Manufacturers of alarms, security cameras, locks, and monitoring devices.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 9?",
        answer:
          "Trademark Class 9 is part of the international Nice Classification system and covers electronics, scientific instruments, measuring devices, and software. This class is for products used in technology, research, and communication.",
      },
      {
        question: "What products fall under Class 9?",
        answer:
          "Class 9 includes devices like computers, smartphones, calculators, scientific instruments, optical devices, data storage media, and software applications.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 9?",
        answer:
          "Yes. Businesses can register one trademark for multiple related electronic or software products, ensuring comprehensive protection for a range of devices or digital tools.",
      },
      {
        question: "Does Class 9 cover raw materials?",
        answer:
          "No. Class 9 primarily covers finished electronic, electrical, and scientific products, not raw materials used in manufacturing.",
      },
      {
        question: "Are measuring and scientific devices included in Class 9?",
        answer:
          "Yes. Instruments for measuring, testing, or scientific purposes, including optical devices, sensors, and lab equipment, are classified under Class 9.",
      },
      {
        question: "Does Class 9 cover software and digital media?",
        answer:
          "Yes. Computer programs, software applications, mobile apps, and digital storage media like CDs, USB drives, and hard drives fall under Class 9.",
      },
      {
        question: "How does Class 9 differ from other classes?",
        answer:
          "Class 9 is specifically for electronic, electrical, and scientific goods, distinguishing it from Class 7 (machinery), Class 10 (medical apparatus), and Class 11 (lighting and heating devices).",
      },
      {
        question: "Are consumer electronics included in Class 9?",
        answer:
          "Yes. Smartphones, laptops, tablets, calculators, and similar consumer electronic devices are all classified under Class 9.",
      },
    ],
  },

  {
    id: 10,
    class: 10,
    title: "Class 10",
    heroTitle: "Protecting Your Medical & Surgical Devices",
    img1: understading,

    understanding:
      "Trademark Class 5 is a critical category within the Nice Classification system, dedicated to protecting brands related to pharmaceuticals, medical and veterinary preparations, and sanitary goods for medical purposes. This class is essential for businesses in the healthcare, pharmaceutical, and personal hygiene industries that produce or supply products for health, wellness, and medical treatment.",

    includeGoods: [
      {
        id: 1,
        name: "Surgical instruments: All types of surgical and medical tools for operations and procedures.",
      },
      {
        id: 2,
        name: "Medical apparatus: Devices and instruments for diagnosis, treatment, and monitoring of patients.",
      },
      {
        id: 3,
        name: "Dental instruments: Tools and equipment used in dentistry for examination and treatment.",
      },
      {
        id: 4,
        name: "Orthopedic devices: Braces, supports, and prosthetics for bone and joint care.",
      },
      {
        id: 5,
        name: "Hospital equipment: Beds, trolleys, examination tables, and related hospital apparatus.",
      },
      {
        id: 6,
        name: "Respiratory devices: Equipment for breathing assistance, oxygen delivery, and ventilators.",
      },
      {
        id: 7,
        name: "Sterilization apparatus: Autoclaves, sterilizers, and disinfecting devices for medical use.",
      },
      {
        id: 8,
        name: "Diagnostic instruments: Thermometers, stethoscopes, blood pressure monitors, and other measuring devices.",
      },
    ],

    productList: [
      {
        id: 1,
        name: "SurgicalInstruments",
        subcategories: [
          { id: 1, name: "Scalpels" },
          { id: 2, name: "Scissors" },
          { id: 3, name: "Forceps" },
          { id: 4, name: "Needles" },
          { id: 5, name: "Clamps" },
          { id: 6, name: "Retractors" },
          { id: 7, name: "Trocars" },
          { id: 8, name: "Probes" },
          { id: 9, name: "Dilators" },
          { id: 10, name: "Specula" },
        ],
      },
      {
        id: 2,
        name: "DentalApparatus",
        subcategories: [
          { id: 1, name: "Drills" },
          { id: 2, name: "Extractors" },
          { id: 3, name: "Scalers" },
          { id: 4, name: "Probes" },
          { id: 5, name: "Mirrors" },
          { id: 6, name: "Pluggers" },
          { id: 7, name: "Forceps" },
          { id: 8, name: "Burs" },
          { id: 9, name: "Curettes" },
          { id: 10, name: "Spatulas" },
        ],
      },
      {
        id: 3,
        name: "OrthopedicDevices",
        subcategories: [
          { id: 1, name: "Plates" },
          { id: 2, name: "Screws" },
          { id: 3, name: "Pins" },
          { id: 4, name: "Nails" },
          { id: 5, name: "Braces" },
          { id: 6, name: "Splints" },
          { id: 7, name: "Supports" },
          { id: 8, name: "Prostheses" },
          { id: 9, name: "Fixators" },
          { id: 10, name: "TractionDevices" },
        ],
      },
      {
        id: 4,
        name: "VeterinaryInstruments",
        subcategories: [
          { id: 1, name: "AnimalScalpels" },
          { id: 2, name: "AnimalScissors" },
          { id: 3, name: "AnimalForceps" },
          { id: 4, name: "AnimalNeedles" },
          { id: 5, name: "AnimalClamps" },
          { id: 6, name: "AnimalProbes" },
          { id: 7, name: "AnimalSpecula" },
          { id: 8, name: "AnimalRetractors" },
          { id: 9, name: "AnimalDilators" },
          { id: 10, name: "AnimalTrocars" },
        ],
      },
      {
        id: 5,
        name: "DiagnosticApparatus",
        subcategories: [
          { id: 1, name: "Stethoscopes" },
          { id: 2, name: "Thermometers" },
          { id: 3, name: "BloodPressure" },
          { id: 4, name: "Otoscope" },
          { id: 5, name: "Ophthalmoscope" },
          { id: 6, name: "XRay" },
          { id: 7, name: "Ultrasound" },
          { id: 8, name: "Endoscopes" },
          { id: 9, name: "PulseOximeters" },
          { id: 10, name: "ECGDevices" },
        ],
      },
      {
        id: 6,
        name: "HospitalEquipment",
        subcategories: [
          { id: 1, name: "Beds" },
          { id: 2, name: "Stretchers" },
          { id: 3, name: "Trolleys" },
          { id: 4, name: "Lights" },
          { id: 5, name: "Monitors" },
          { id: 6, name: "Defibrillators" },
          { id: 7, name: "Ventilators" },
          { id: 8, name: "InfusionPumps" },
          { id: 9, name: "Carts" },
          { id: 10, name: "Partitions" },
        ],
      },
      {
        id: 7,
        name: "Sutures",
        subcategories: [
          { id: 1, name: "Absorbable" },
          { id: 2, name: "NonAbsorbable" },
          { id: 3, name: "Braided" },
          { id: 4, name: "Monofilament" },
          { id: 5, name: "Sterile" },
          { id: 6, name: "SurgicalThreads" },
          { id: 7, name: "NeedleAttached" },
          { id: 8, name: "Synthetic" },
          { id: 9, name: "Natural" },
          { id: 10, name: "Elastic" },
        ],
      },
      {
        id: 8,
        name: "DentalProsthetics",
        subcategories: [
          { id: 1, name: "Crowns" },
          { id: 2, name: "Bridges" },
          { id: 3, name: "Dentures" },
          { id: 4, name: "Inlays" },
          { id: 5, name: "Onlays" },
          { id: 6, name: "Implants" },
          { id: 7, name: "Orthodontics" },
          { id: 8, name: "Retainers" },
          { id: 9, name: "MouthGuards" },
          { id: 10, name: "Veneers" },
        ],
      },
      {
        id: 9,
        name: "SurgicalConsumables",
        subcategories: [
          { id: 1, name: "Gauze" },
          { id: 2, name: "Bandages" },
          { id: 3, name: "Dressings" },
          { id: 4, name: "Plasters" },
          { id: 5, name: "Pads" },
          { id: 6, name: "Tapes" },
          { id: 7, name: "Swabs" },
          { id: 8, name: "Sponges" },
          { id: 9, name: "CottonRolls" },
          { id: 10, name: "Needles" },
        ],
      },
      {
        id: 10,
        name: "RehabilitationDevices",
        subcategories: [
          { id: 1, name: "Walkers" },
          { id: 2, name: "Crutches" },
          { id: 3, name: "Canes" },
          { id: 4, name: "Wheelchairs" },
          { id: 5, name: "Braces" },
          { id: 6, name: "Supports" },
          { id: 7, name: "ExerciseTools" },
          { id: 8, name: "TherapyBalls" },
          { id: 9, name: "StretchBands" },
          { id: 10, name: "FoamRollers" },
        ],
      },
    ],

    excludeGoods: [
      { id: 1, name: "Industrial chemicals" },
      { id: 2, name: "Lubricating services, such as car oil changes" },
      { id: 3, name: "Medicinal oils" },
      { id: 4, name: "Edible oils and fats" },
      { id: 5, name: "Waxes for cleaning, polishing, or scouring" },
      { id: 6, name: "Vehicle parts, such as engine filters" },
      { id: 7, name: "Asphalt, bitumen, and other road surfacing materials" },
      { id: 8, name: "Raw resins, both natural and artificial" },
    ],

    relatedClasses: [
      { id: 1, name: "Class 3" }, // Cosmetics & cleaning products
      { id: 2, name: "Class 7" }, // Machines & machine tools
      { id: 3, name: "Class 8" }, // Hand tools & implements
      { id: 4, name: "Class 11" }, // Lighting, heating, and cooling apparatus
      { id: 5, name: "Class 12" }, // Vehicles
      { id: 6, name: "Class 14" }, // Jewelry & precious metals
      { id: 7, name: "Class 35" }, // Business & commercial services
      { id: 8, name: "Class 42" }, // Scientific & technological services
    ],

    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 10 covers medical, surgical, and diagnostic devices, including instruments, apparatus, and equipment used in healthcare, hospitals, clinics, and research labs.",

    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaStethoscope
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Medical Device Companies",
        subheading:
          "Manufacturers of surgical, diagnostic, and therapeutic devices for healthcare professionals.",
      },
      {
        id: 2,
        icon: (
          <FaHospitalAlt
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Hospitals & Clinics",
        subheading:
          "Healthcare facilities that use medical instruments, diagnostic tools, and surgical apparatus for patient care.",
      },
      {
        id: 3,
        icon: (
          <FaSyringe
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Pharmaceutical & Research Labs",
        subheading:
          "Labs and research centers developing medical instruments, testing equipment, or diagnostic tools.",
      },
      {
        id: 4,
        icon: (
          <FaUserNurse
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Orthopedic & Prosthetic Makers",
        subheading:
          "Producers of braces, supports, prosthetics, and other orthopedic medical devices.",
      },
      {
        id: 5,
        icon: (
          <FaClinicMedical
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Surgical Equipment Suppliers",
        subheading:
          "Companies providing surgical instruments, sterilization tools, and medical apparatus to hospitals and clinics.",
      },
      {
        id: 6,
        icon: (
          <FaHeartbeat
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Diagnostic Device Providers",
        subheading:
          "Businesses offering diagnostic instruments like thermometers, stethoscopes, and blood pressure monitors.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 10?",
        answer:
          "Trademark Class 10 covers medical and surgical instruments, apparatus, and devices used in diagnosis, treatment, and patient care. This class is for equipment used in healthcare, surgery, and medical practices.",
      },
      {
        question: "What products fall under Class 10?",
        answer:
          "Class 10 includes surgical instruments, medical devices, dental tools, orthopedic supports, hospital equipment, diagnostic instruments, sterilization apparatus, and respiratory devices.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 10?",
        answer:
          "Yes. Businesses can register a single trademark to cover multiple related goods within Class 10, such as a range of surgical instruments or a line of diagnostic devices, ensuring comprehensive brand protection.",
      },
      {
        question: "Does Class 10 cover raw materials?",
        answer:
          "No. Class 10 focuses on finished medical and surgical instruments and apparatus, not raw materials for manufacturing these products.",
      },
      {
        question: "Are hospital and clinic equipment included in Class 10?",
        answer:
          "Yes. Items such as hospital beds, trolleys, examination tables, and other apparatus used in healthcare facilities are included in Class 10.",
      },
      {
        question:
          "Are diagnostic and measuring instruments included in Class 10?",
        answer:
          "Yes. Thermometers, stethoscopes, blood pressure monitors, and other medical measuring instruments are classified under Class 10.",
      },
      {
        question: "How does Class 10 differ from other classes?",
        answer:
          "Class 10 specifically covers medical, surgical, and diagnostic equipment. This distinguishes it from Class 5 (pharmaceuticals and sanitary preparations) and Class 11 (medical apparatus for sterilization, heating, and lighting).",
      },
      {
        question: "Do orthopedic and prosthetic devices fall under Class 10?",
        answer:
          "Yes. Braces, supports, prosthetics, and other orthopedic devices are included in Class 10.",
      },
    ],
  },

  {
    id: 11,
    class: 11,
    title: "Class 11",
    heroTitle: "Protecting Your Electronics, Scientific & Technical Goods",
    img1: understading,

    understanding:
      "Trademark Class 5 is a critical category within the Nice Classification system, dedicated to protecting brands related to pharmaceuticals, medical and veterinary preparations, and sanitary goods for medical purposes. This class is essential for businesses in the healthcare, pharmaceutical, and personal hygiene industries that produce or supply products for health, wellness, and medical treatment.",

    includeGoods: [
      {
        id: 1,
        name: "Scientific instruments: Devices and tools for research, testing, and laboratory use.",
      },
      {
        id: 2,
        name: "Electrical apparatus: Equipment for generating, storing, or distributing electricity.",
      },
      {
        id: 3,
        name: "Computers & software: Hardware, programs, and applications for data processing.",
      },
      {
        id: 4,
        name: "Measuring instruments: Meters, gauges, and devices for precise measurement.",
      },
      {
        id: 5,
        name: "Optical devices: Lenses, microscopes, binoculars, and cameras.",
      },
      {
        id: 6,
        name: "Communication devices: Telephones, radios, and transmission equipment.",
      },
      {
        id: 7,
        name: "Safety & protective equipment: Goggles, alarms, and fire-extinguishing apparatus.",
      },
      {
        id: 8,
        name: "Electrical cables & connectors: Wires, plugs, and adapters for electrical connections.",
      },
    ],

    productList: [
      {
        id: 1,
        name: "HandTools",
        subcategories: [
          { id: 1, name: "Hammers" },
          { id: 2, name: "Screwdrivers" },
          { id: 3, name: "Pliers" },
          { id: 4, name: "Wrenches" },
          { id: 5, name: "Chisels" },
          { id: 6, name: "Saws" },
          { id: 7, name: "Files" },
          { id: 8, name: "Trowels" },
          { id: 9, name: "Axes" },
          { id: 10, name: "Spanners" },
        ],
      },
      {
        id: 2,
        name: "Cutlery",
        subcategories: [
          { id: 1, name: "Knives" },
          { id: 2, name: "Forks" },
          { id: 3, name: "Spoons" },
          { id: 4, name: "Choppers" },
          { id: 5, name: "Peelers" },
          { id: 6, name: "Graters" },
          { id: 7, name: "Scissors" },
          { id: 8, name: "Cleavers" },
          { id: 9, name: "Spatulas" },
          { id: 10, name: "Tongs" },
        ],
      },
      {
        id: 3,
        name: "Razors",
        subcategories: [
          { id: 1, name: "Straight" },
          { id: 2, name: "Safety" },
          { id: 3, name: "Electric" },
          { id: 4, name: "Cartridge" },
          { id: 5, name: "ShavingBrush" },
          { id: 6, name: "Strops" },
          { id: 7, name: "Blades" },
          { id: 8, name: "Trimmers" },
          { id: 9, name: "ShavingBowls" },
          { id: 10, name: "ShavingKits" },
        ],
      },
      {
        id: 4,
        name: "SideArms",
        subcategories: [
          { id: 1, name: "Swords" },
          { id: 2, name: "Daggers" },
          { id: 3, name: "Knuckledusters" },
          { id: 4, name: "Bayonets" },
          { id: 5, name: "Cutlasses" },
          { id: 6, name: "Dirks" },
          { id: 7, name: "Axes" },
          { id: 8, name: "Machetes" },
          { id: 9, name: "Stilettos" },
          { id: 10, name: "Sabres" },
        ],
      },
      {
        id: 5,
        name: "GardenTools",
        subcategories: [
          { id: 1, name: "Pruners" },
          { id: 2, name: "Shears" },
          { id: 3, name: "Rakes" },
          { id: 4, name: "Shovels" },
          { id: 5, name: "Spades" },
          { id: 6, name: "Hoes" },
          { id: 7, name: "Trowels" },
          { id: 8, name: "Cultivators" },
          { id: 9, name: "Loppers" },
          { id: 10, name: "Forks" },
        ],
      },
      {
        id: 6,
        name: "CuttingTools",
        subcategories: [
          { id: 1, name: "Shears" },
          { id: 2, name: "Scissors" },
          { id: 3, name: "Knives" },
          { id: 4, name: "Saws" },
          { id: 5, name: "Choppers" },
          { id: 6, name: "Axes" },
          { id: 7, name: "Machetes" },
          { id: 8, name: "Cleavers" },
          { id: 9, name: "Pruners" },
          { id: 10, name: "Cutters" },
        ],
      },
      {
        id: 7,
        name: "KitchenTools",
        subcategories: [
          { id: 1, name: "Peelers" },
          { id: 2, name: "Graters" },
          { id: 3, name: "Spatulas" },
          { id: 4, name: "Tongs" },
          { id: 5, name: "Whisks" },
          { id: 6, name: "Ladles" },
          { id: 7, name: "Choppers" },
          { id: 8, name: "Sieves" },
          { id: 9, name: "Spoons" },
          { id: 10, name: "Forks" },
        ],
      },
      {
        id: 8,
        name: "BarberTools",
        subcategories: [
          { id: 1, name: "Razors" },
          { id: 2, name: "ShavingBrushes" },
          { id: 3, name: "Scissors" },
          { id: 4, name: "Combs" },
          { id: 5, name: "Clippers" },
          { id: 6, name: "HairTrimmers" },
          { id: 7, name: "ShavingBowls" },
          { id: 8, name: "Strops" },
          { id: 9, name: "Aprons" },
          { id: 10, name: "Capes" },
        ],
      },
      {
        id: 9,
        name: "JewelryTools",
        subcategories: [
          { id: 1, name: "Pliers" },
          { id: 2, name: "Tweezers" },
          { id: 3, name: "Files" },
          { id: 4, name: "Hammers" },
          { id: 5, name: "Saws" },
          { id: 6, name: "Anvils" },
          { id: 7, name: "Cutters" },
          { id: 8, name: "Molds" },
          { id: 9, name: "BenchBlocks" },
          { id: 10, name: "Polishers" },
        ],
      },
      {
        id: 10,
        name: "MiscTools",
        subcategories: [
          { id: 1, name: "MeasuringTools" },
          { id: 2, name: "Clamps" },
          { id: 3, name: "Levels" },
          { id: 4, name: "Planes" },
          { id: 5, name: "Brushes" },
          { id: 6, name: "Mallets" },
          { id: 7, name: "Scrapers" },
          { id: 8, name: "Awls" },
          { id: 9, name: "Punches" },
          { id: 10, name: "Rulers" },
        ],
      },
    ],

    excludeGoods: [
      {
        id: 1,
        name: "Industrial chemicals",
      },
      {
        id: 2,
        name: "Lubricating services, such as car oil changes",
      },
      {
        id: 3,
        name: "Medicinal oils",
      },
      {
        id: 4,
        name: "Edible oils and fats",
      },
      {
        id: 5,
        name: "Waxes for cleaning, polishing, or scouring",
      },
      {
        id: 6,
        name: "Vehicle parts, such as engine filters",
      },
      {
        id: 7,
        name: "Asphalt, bitumen, and other road surfacing materials",
      },
      {
        id: 8,
        name: "Raw resins, both natural and artificial",
      },
    ],

    relatedClasses: [
      { id: 1, name: "Class 3" }, // Cosmetics & cleaning products
      { id: 2, name: "Class 7" }, // Machines & machine tools
      { id: 3, name: "Class 8" }, // Hand tools & implements
      { id: 4, name: "Class 11" }, // Lighting, heating, and cooling apparatus
      { id: 5, name: "Class 12" }, // Vehicles
      { id: 6, name: "Class 14" }, // Jewelry & precious metals
      { id: 7, name: "Class 35" }, // Business & commercial services
      { id: 8, name: "Class 42" }, // Scientific & technological services
    ],

    shoShouldRegisterImage: whoshould,
    whoShouldRegisterDescription:
      "Trademark Class 9 is for businesses offering electronics, software, computers, scientific instruments, and electrical devices. It protects technology, gadgets, and digital products.",

    whoShouldRegister: [
      {
        id: 1,
        icon: (
          <FaMobileAlt
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
              marginTop: "0.5rem",
            }}
          />
        ),
        heading: "Electronics Manufacturers",
        subheading:
          "Businesses producing electronic devices like computers, phones, and wearable tech.",
      },
      {
        id: 2,
        icon: (
          <FaRobot
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Software & App Developers",
        subheading:
          "Companies developing software, apps, or operating systems for various devices.",
      },
      {
        id: 3,
        icon: (
          <FaCamera
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Optical & Imaging Producers",
        subheading:
          "Manufacturers of cameras, lenses, optical instruments, and imaging devices.",
      },
      {
        id: 4,
        icon: (
          <FaMicrochip
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Semiconductor Companies",
        subheading:
          "Producers of microchips, processors, and electronic components for devices.",
      },
      {
        id: 5,
        icon: (
          <FaSatelliteDish
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Telecommunication Equipment",
        subheading:
          "Businesses making devices for communication, networking, and signal transmission.",
      },
      {
        id: 6,
        icon: (
          <FaLock
            style={{
              width: "15%",
              height: "20%",
              color: "#1967D2",
            }}
          />
        ),
        heading: "Security & Safety Tech",
        subheading:
          "Manufacturers of alarms, security cameras, locks, and monitoring devices.",
      },
    ],

    faqsTitle:
      "Your Guide to Trademark Classification: Clear Answers to Protect Your Brand",

    faqs: [
      {
        question: "What is Trademark Class 9?",
        answer:
          "Trademark Class 9 is part of the international Nice Classification system and covers electronics, scientific instruments, measuring devices, and software. This class is for products used in technology, research, and communication.",
      },
      {
        question: "What products fall under Class 9?",
        answer:
          "Class 9 includes devices like computers, smartphones, calculators, scientific instruments, optical devices, data storage media, and software applications.",
      },
      {
        question:
          "Can I register a single trademark for multiple products in Class 9?",
        answer:
          "Yes. Businesses can register one trademark for multiple related electronic or software products, ensuring comprehensive protection for a range of devices or digital tools.",
      },
      {
        question: "Does Class 9 cover raw materials?",
        answer:
          "No. Class 9 primarily covers finished electronic, electrical, and scientific products, not raw materials used in manufacturing.",
      },
      {
        question: "Are measuring and scientific devices included in Class 9?",
        answer:
          "Yes. Instruments for measuring, testing, or scientific purposes, including optical devices, sensors, and lab equipment, are classified under Class 9.",
      },
      {
        question: "Does Class 9 cover software and digital media?",
        answer:
          "Yes. Computer programs, software applications, mobile apps, and digital storage media like CDs, USB drives, and hard drives fall under Class 9.",
      },
      {
        question: "How does Class 9 differ from other classes?",
        answer:
          "Class 9 is specifically for electronic, electrical, and scientific goods, distinguishing it from Class 7 (machinery), Class 10 (medical apparatus), and Class 11 (lighting and heating devices).",
      },
      {
        question: "Are consumer electronics included in Class 9?",
        answer:
          "Yes. Smartphones, laptops, tablets, calculators, and similar consumer electronic devices are all classified under Class 9.",
      },
    ],
  },
];

export default classesData;
