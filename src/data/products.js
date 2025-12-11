import keyboardImg from "../assets/keyboard.png";
import mouseImg from "../assets/mouse.png";
import headsetImg from "../assets/headset.png";
import consoleImg from "../assets/console.png";

export const products = [
  // === MECHANICAL KEYBOARDS (8) ===

  // Phantom keyboards
  {
    id: "phantom-keystone-75",
    name: "Phantom Keystone 75",
    desc: "A 75% mechanical keyboard with aluminum frame and hot-swappable switches, built for compact yet serious desk setups.",
    price: 169.99,
    category: "Mechanical Keyboards",
    onSale: false,
    badge: "Premium",
    image: keyboardImg,
  },
  {
    id: "phantom-specter-tkl",
    name: "Phantom Specter TKL",
    desc: "A tenkeyless board with per-key RGB and a sound-dampened plate for quieter, more refined typing.",
    price: 139.99,
    category: "Mechanical Keyboards",
    onSale: true,
    salePrice: 119.99,
    badge: "Hot Deal",
    image: keyboardImg,
  },

  // Polaris keyboards
  {
    id: "polaris-orbit-60",
    name: "Polaris Orbit 60",
    desc: "A 60% wireless mechanical keyboard designed for minimal desk space and maximum portability.",
    price: 89.99,
    category: "Mechanical Keyboards",
    onSale: false,
    badge: "Compact",
    image: keyboardImg,
  },
  {
    id: "polaris-lumina-87",
    name: "Polaris Lumina 87",
    desc: "A slim-profile 87-key keyboard with soft white backlighting and quiet linear switches.",
    price: 109.99,
    category: "Mechanical Keyboards",
    onSale: true,
    salePrice: 99.99,
    badge: "Deal",
    image: keyboardImg,
  },

  // Aero keyboards
  {
    id: "aero-stratus-65",
    name: "Aero Stratus 65",
    desc: "A 65% layout with dedicated arrow keys, ideal for gaming and productivity hybrid setups.",
    price: 119.99,
    category: "Mechanical Keyboards",
    onSale: false,
    badge: "New Arrival",
    image: keyboardImg,
  },
  {
    id: "aero-velocity-full",
    name: "Aero Velocity Full",
    desc: "A full-size mechanical keyboard with a metal top plate and programmable macro row for power users.",
    price: 129.99,
    category: "Mechanical Keyboards",
    onSale: false,
    badge: "Full Size",
    image: keyboardImg,
  },

  // Titan keyboards
  {
    id: "titan-forge-tkl",
    name: "Titan Forge TKL",
    desc: "A rugged TKL board with thick PBT keycaps and pre-lubed tactile switches for a satisfying feel.",
    price: 149.99,
    category: "Mechanical Keyboards",
    onSale: true,
    salePrice: 134.99,
    badge: "Editor’s Pick",
    image: keyboardImg,
  },
  {
    id: "titan-aegis-75",
    name: "Titan Aegis 75",
    desc: "A 75% keyboard with gasket mounting and foam dampening for a soft, muted typing experience.",
    price: 159.99,
    category: "Mechanical Keyboards",
    onSale: false,
    badge: "Enthusiast",
    image: keyboardImg,
  },

  // === GAMING MICE (8) ===

  // Phantom mice
  {
    id: "phantom-arc-lite",
    name: "Phantom Arc Lite",
    desc: "An ultralight wired gaming mouse tuned for FPS titles with a low-latency sensor.",
    price: 49.99,
    category: "Gaming Mice",
    onSale: true,
    salePrice: 39.99,
    badge: "Hot Deal",
    image: mouseImg,
  },
  {
    id: "phantom-arc-wireless",
    name: "Phantom Arc Wireless",
    desc: "A wireless version of the Arc series with 2.4GHz and Bluetooth modes for flexible use.",
    price: 69.99,
    category: "Gaming Mice",
    onSale: false,
    badge: "Wireless",
    image: mouseImg,
  },

  // Polaris mice
  {
    id: "polaris-comet-fps",
    name: "Polaris Comet FPS",
    desc: "A claw-grip optimized mouse with adjustable DPI steps and onboard memory for profiles.",
    price: 44.99,
    category: "Gaming Mice",
    onSale: false,
    badge: "FPS Focused",
    image: mouseImg,
  },
  {
    id: "polaris-comet-wireless",
    name: "Polaris Comet Wireless",
    desc: "A lightweight wireless mouse with USB-C charging and up to 80 hours of battery life.",
    price: 74.99,
    category: "Gaming Mice",
    onSale: true,
    salePrice: 64.99,
    badge: "Deal",
    image: mouseImg,
  },

  // Aero mice
  {
    id: "aero-glide-55",
    name: "Aero Glide 55",
    desc: "A mid-size mouse with PTFE feet and a flexible paracord cable for smooth micro-adjustments.",
    price: 39.99,
    category: "Gaming Mice",
    onSale: false,
    badge: "Popular",
    image: mouseImg,
  },
  {
    id: "aero-glide-wireless",
    name: "Aero Glide Wireless",
    desc: "A symmetrical wireless mouse suited for both palm and claw grips with low-lift-off distance.",
    price: 69.99,
    category: "Gaming Mice",
    onSale: false,
    badge: "Symmetrical",
    image: mouseImg,
  },

  // Titan mice
  {
    id: "titan-talon-rgb",
    name: "Titan Talon RGB",
    desc: "An aggressive-shaped mouse with RGB underglow and a high-resolution optical sensor.",
    price: 59.99,
    category: "Gaming Mice",
    onSale: true,
    salePrice: 49.99,
    badge: "RGB",
    image: mouseImg,
  },
  {
    id: "titan-talon-mini",
    name: "Titan Talon Mini",
    desc: "A compact version of the Talon, designed for smaller hands and fingertip grip styles.",
    price: 39.99,
    category: "Gaming Mice",
    onSale: false,
    badge: "Compact",
    image: mouseImg,
  },

  // === CONSOLES (8) ===

  // Phantom consoles
  {
    id: "phantom-nova",
    name: "Phantom Nova Console",
    desc: "A compact living-room console focused on fast loading times and quiet cooling.",
    price: 399.99,
    category: "Consoles",
    onSale: false,
    badge: "Best Seller",
    image: consoleImg,
  },
  {
    id: "phantom-nova-pro",
    name: "Phantom Nova Pro",
    desc: "An upgraded Nova model with expanded storage and enhanced performance for 4K gaming.",
    price: 499.99,
    category: "Consoles",
    onSale: true,
    salePrice: 459.99,
    badge: "Pro Model",
    image: consoleImg,
  },

  // Polaris consoles
  {
    id: "polaris-horizon",
    name: "Polaris Horizon",
    desc: "A sleek console with a curated game library and strong focus on narrative titles.",
    price: 379.99,
    category: "Consoles",
    onSale: false,
    badge: "Story Focused",
    image: consoleImg,
  },
  {
    id: "polaris-horizon-elite",
    name: "Polaris Horizon Elite",
    desc: "The Elite edition adds expanded storage and a revised controller for longer sessions.",
    price: 449.99,
    category: "Consoles",
    onSale: false,
    badge: "Elite",
    image: consoleImg,
  },

  // Aero consoles
  {
    id: "aero-pulse",
    name: "Aero Pulse",
    desc: "A hybrid console that can dock to TV or run in desktop mode for light PC-style play.",
    price: 359.99,
    category: "Consoles",
    onSale: true,
    salePrice: 329.99,
    badge: "Hybrid",
    image: consoleImg,
  },
  {
    id: "aero-pulse-travel",
    name: "Aero Pulse Travel",
    desc: "A travel-friendly edition with a carrying case and increased battery life for on-the-go gaming.",
    price: 389.99,
    category: "Consoles",
    onSale: false,
    badge: "Portable",
    image: consoleImg,
  },

  // Titan consoles
  {
    id: "titan-core",
    name: "Titan Core",
    desc: "A performance-focused console engineered for high refresh rate gaming on modern TVs.",
    price: 429.99,
    category: "Consoles",
    onSale: false,
    badge: "Performance",
    image: consoleImg,
  },
  {
    id: "titan-core-x",
    name: "Titan Core X",
    desc: "The flagship Titan console with boosted graphics hardware and extended storage capacity.",
    price: 529.99,
    category: "Consoles",
    onSale: true,
    salePrice: 489.99,
    badge: "Flagship",
    image: consoleImg,
  },

  // === ACCESSORIES / HEADSETS (4) ===

  {
    id: "phantom-echo-wireless",
    name: "Phantom Echo Wireless Headset",
    desc: "A low-latency wireless gaming headset with virtual surround sound and a detachable mic.",
    price: 119.99,
    category: "Accessories",
    onSale: true,
    salePrice: 99.99,
    badge: "Wireless",
    image: headsetImg,
  },
  {
    id: "polaris-aura-headset",
    name: "Polaris Aura Headset",
    desc: "A closed-back headset with soft fabric ear cups and a tuning aimed at clear dialogue.",
    price: 89.99,
    category: "Accessories",
    onSale: false,
    badge: "Comfort",
    image: headsetImg,
  },
  {
    id: "aero-flow-headset",
    name: "Aero Flow Headset",
    desc: "A lightweight headset with breathable padding and a flexible boom microphone.",
    price: 79.99,
    category: "Accessories",
    onSale: false,
    badge: "Lightweight",
    image: headsetImg,
  },
  {
    id: "titan-thunder-pro",
    name: "Titan Thunder Pro Headset",
    desc: "A premium headset with metal construction, deep bass response, and inline volume controls.",
    price: 129.99,
    category: "Accessories",
    onSale: true,
    salePrice: 114.99,
    badge: "Pro Series",
    image: headsetImg,
  },
];
