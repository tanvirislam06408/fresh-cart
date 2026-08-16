import { HeroSlide } from "@/types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    videoSrc: "/videos/21117-315137086_medium.mp4",
    badge: {
      text: "100% Organic & Farm Fresh",
      icon: "Sparkles",
    },
    title: {
      main: "Farm Fresh Organic Produce,",
      highlight: "Delivered Daily to Your Door.",
    },
    description:
      "Handpicked fruits, crisp vegetables, and artisanal dairy directly from local sustainable farms. Taste the uncompromised quality of pure organic goodness.",
    primaryCta: {
      label: "Shop Fresh Produce",
      href: "#products",
      variant: "primary",
      icon: "ArrowRight",
    },
    secondaryCta: {
      label: "Explore Categories",
      href: "#categories",
      variant: "secondary",
    },
    stats: [
      { label: "Organic Certified", value: "100%" },
      { label: "Partner Farms", value: "50+" },
      { label: "Satisfaction", value: "4.9 ★" },
    ],
  },
  {
    id: "slide-2",
    videoSrc: "/videos/366932_medium.mp4",
    badge: {
      text: "Ultra Fast Express Delivery",
      icon: "Zap",
    },
    title: {
      main: "Your Grocery Essentials,",
      highlight: "At Your Doorstep in 30 Mins.",
    },
    description:
      "Skipping the line has never been easier. Get your weekly groceries, fresh herbs, and pantry staples delivered temperature-controlled in under half an hour.",
    primaryCta: {
      label: "Order Express Now",
      href: "#deals",
      variant: "primary",
      icon: "Bike",
    },
    secondaryCta: {
      label: "View Delivery Zones",
      href: "#delivery",
      variant: "secondary",
    },
    stats: [
      { label: "Avg. Delivery", value: "25 Mins" },
      { label: "Active Riders", value: "200+" },
      { label: "Free Shipping Over", value: "$35" },
    ],
  },
  {
    id: "slide-3",
    videoSrc: "/videos/47601-451623945_medium.mp4",
    badge: {
      text: "Mega Freshness Savings",
      icon: "Percent",
    },
    title: {
      main: "Premium Quality Groceries,",
      highlight: "Up to 40% Off Seasonal Items.",
    },
    description:
      "Discover huge discounts on premium organic fruits, fresh baked bread, meats, and daily pantry staples. Upgrade your kitchen pantry for less today.",
    primaryCta: {
      label: "Claim Discounts",
      href: "#deals",
      variant: "primary",
      icon: "Tag",
    },
    secondaryCta: {
      label: "Browse All Deals",
      href: "#products",
      variant: "secondary",
    },
    stats: [
      { label: "Weekly Deals", value: "100+" },
      { label: "Max Discount", value: "40% OFF" },
      { label: "Happy Shoppers", value: "15k+" },
    ],
  },
];
