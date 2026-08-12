export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  price: number;
  oldPrice?: number;
  unit: string;
  rating: number;
  reviewsCount: number;
  discountBadge?: string;
  stockLeft?: number;
  totalStock?: number;
  image: string;
  isPopular?: boolean;
  isDeal?: boolean;
  isOrganic?: boolean;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  itemCount: string;
  image: string;
  bgGradient: string;
  accentColor: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  reviewText: string;
  verified: boolean;
  purchasedItem?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "fruits",
    name: "Fresh Fruits",
    itemCount: "120+ Products",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=600",
    bgGradient: "from-amber-50 to-orange-100/60",
    accentColor: "text-amber-700"
  },
  {
    id: "vegetables",
    name: "Organic Veggies",
    itemCount: "180+ Products",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=600",
    bgGradient: "from-emerald-50 to-green-100/60",
    accentColor: "text-emerald-700"
  },
  {
    id: "meat",
    name: "Prime Meat",
    itemCount: "85+ Products",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600",
    bgGradient: "from-red-50 to-rose-100/60",
    accentColor: "text-rose-700"
  },
  {
    id: "fish",
    name: "Fish & Seafood",
    itemCount: "60+ Products",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600",
    bgGradient: "from-cyan-50 to-sky-100/60",
    accentColor: "text-sky-700"
  },
  {
    id: "dairy",
    name: "Dairy & Eggs",
    itemCount: "95+ Products",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=600",
    bgGradient: "from-blue-50 to-indigo-100/60",
    accentColor: "text-indigo-700"
  },
  {
    id: "bakery",
    name: "Artisan Bakery",
    itemCount: "70+ Products",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
    bgGradient: "from-amber-50 to-yellow-100/60",
    accentColor: "text-amber-800"
  },
  {
    id: "beverages",
    name: "Juices & Drinks",
    itemCount: "110+ Products",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600",
    bgGradient: "from-purple-50 to-violet-100/60",
    accentColor: "text-violet-700"
  },
  {
    id: "snacks",
    name: "Healthy Snacks",
    itemCount: "140+ Products",
    image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&q=80&w=600",
    bgGradient: "from-orange-50 to-amber-100/60",
    accentColor: "text-orange-700"
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Organic Honeycrisp Red Apples",
    category: "Fresh Fruits",
    categoryId: "fruits",
    price: 3.99,
    oldPrice: 4.99,
    unit: "1 lb (3-4 pcs)",
    rating: 4.9,
    reviewsCount: 142,
    discountBadge: "20% OFF",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    description: "Crisp, sweet and juicy organic Honeycrisp apples fresh from orchard local farms. Perfect for snacking, salads, or pies."
  },
  {
    id: "p2",
    name: "Farm Fresh Crisp Broccoli Crowns",
    category: "Organic Veggies",
    categoryId: "vegetables",
    price: 2.49,
    oldPrice: 3.29,
    unit: "1 bunch (approx. 500g)",
    rating: 4.8,
    reviewsCount: 98,
    discountBadge: "24% OFF",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    description: "Vibrant dark green organic broccoli crowns packed with vitamins and antioxidants. Hand-harvested daily for maximum crispness."
  },
  {
    id: "p3",
    name: "Pasture-Raised Organic Grade A Eggs",
    category: "Dairy & Eggs",
    categoryId: "dairy",
    price: 4.99,
    oldPrice: 5.99,
    unit: "1 Carton (12 Large Eggs)",
    rating: 4.95,
    reviewsCount: 230,
    discountBadge: "16% OFF",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    description: "Rich, golden yolk eggs from free-roaming, pasture-raised hens fed 100% organic, non-GMO diet."
  },
  {
    id: "p4",
    name: "Whole Farm Whole Organic Milk 1L",
    category: "Dairy & Eggs",
    categoryId: "dairy",
    price: 3.49,
    oldPrice: 4.19,
    unit: "1 Liter Bottle",
    rating: 4.85,
    reviewsCount: 176,
    discountBadge: "15% OFF",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    description: "Pure pasteurized whole milk from grass-fed cows with natural creamy taste and zero artificial hormones."
  }
];

export const DEAL_PRODUCTS: Product[] = [
  {
    id: "d1",
    name: "Wild Atlantic Fresh Salmon Fillet",
    category: "Fish & Seafood",
    categoryId: "fish",
    price: 12.99,
    oldPrice: 18.99,
    unit: "500g Pack",
    rating: 4.9,
    reviewsCount: 88,
    discountBadge: "SAVE 31%",
    stockLeft: 8,
    totalStock: 30,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600",
    isDeal: true,
    description: "Sustainably caught, rich in Omega-3 fatty acids. Tender, flaky and melt-in-your-mouth fresh salmon."
  },
  {
    id: "d2",
    name: "Organic Hass Avocados (Value Pack)",
    category: "Organic Veggies",
    categoryId: "vegetables",
    price: 3.99,
    oldPrice: 6.49,
    unit: "4 Count Net Bag",
    rating: 4.85,
    reviewsCount: 164,
    discountBadge: "SAVE 38%",
    stockLeft: 12,
    totalStock: 50,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=600",
    isDeal: true,
    description: "Perfectly creamy, nutrient-packed organic Hass avocados. Ready for guacamole, toasts, or healthy salads."
  },
  {
    id: "d3",
    name: "Fresh Organic Strawberries 1lb",
    category: "Fresh Fruits",
    categoryId: "fruits",
    price: 2.99,
    oldPrice: 4.99,
    unit: "1 lb Container",
    rating: 4.92,
    reviewsCount: 210,
    discountBadge: "SAVE 40%",
    stockLeft: 15,
    totalStock: 60,
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=600",
    isDeal: true,
    description: "Sweet, fragrant handpicked strawberries bursting with natural flavor and high vitamin C."
  },
  {
    id: "d4",
    name: "Artisan Sourdough Country Loaf",
    category: "Artisan Bakery",
    categoryId: "bakery",
    price: 4.29,
    oldPrice: 5.99,
    unit: "1 Whole Loaf (600g)",
    rating: 4.88,
    reviewsCount: 95,
    discountBadge: "SAVE 28%",
    stockLeft: 6,
    totalStock: 25,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
    isDeal: true,
    description: "Traditionally slow-fermented crusty sourdough bread baked fresh every morning by local master bakers."
  }
];

export const POPULAR_PRODUCTS: Product[] = [
  ...FEATURED_PRODUCTS,
  {
    id: "p5",
    name: "Sweet Yellow Cavendish Bananas",
    category: "Fresh Fruits",
    categoryId: "fruits",
    price: 1.29,
    oldPrice: 1.79,
    unit: "1 Bunch (approx 1.2kg)",
    rating: 4.8,
    reviewsCount: 310,
    discountBadge: "BEST VALUE",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600",
    isPopular: true,
    description: "Naturally sweet and potassium-rich ripe yellow bananas. Ideal for smoothies, morning oats, or quick energy."
  },
  {
    id: "p6",
    name: "Vine-Ripe Organic Cherry Tomatoes",
    category: "Organic Veggies",
    categoryId: "vegetables",
    price: 3.19,
    oldPrice: 3.99,
    unit: "250g Container",
    rating: 4.9,
    reviewsCount: 118,
    discountBadge: "10% OFF",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    isPopular: true,
    description: "Juicy, sweet tomato pops grown on vine without synthetic pesticides. Great for salads and roasting."
  },
  {
    id: "p7",
    name: "Grass-Fed Angus Beef Ribeye Steak",
    category: "Prime Meat",
    categoryId: "meat",
    price: 15.99,
    oldPrice: 19.99,
    unit: "350g Cut",
    rating: 4.96,
    reviewsCount: 74,
    discountBadge: "TOP PICK",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600",
    isPopular: true,
    description: "Premium marbling grass-fed beef steak. Rich in flavor, tender texture, expertly trimmed."
  },
  {
    id: "p8",
    name: "Cold-Pressed Organic Orange Juice",
    category: "Juices & Drinks",
    categoryId: "beverages",
    price: 4.49,
    oldPrice: 5.29,
    unit: "750ml Glass Bottle",
    rating: 4.87,
    reviewsCount: 152,
    discountBadge: "15% OFF",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    isPopular: true,
    description: "100% pure cold-pressed Florida orange juice with pulp. No added sugar or preservatives."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "2 days ago",
    reviewText: "Fresh products, fast delivery and excellent service. FreshCart has become my go-to grocery store. Everything arrives super fresh, as if I picked it myself!",
    verified: true,
    purchasedItem: "Verified Organic Order"
  },
  {
    id: "r2",
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "1 week ago",
    reviewText: "The 30-minute delivery is a absolute lifesaver when hosting dinner parties. Produce quality is way higher than my local supermarket chain.",
    verified: true,
    purchasedItem: "Verified Premium Meat & Produce"
  },
  {
    id: "r3",
    name: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "3 days ago",
    reviewText: "Love the eco-friendly packaging and farm traceability! Organic apples and pasture-raised eggs are constantly stocked in my kitchen now.",
    verified: true,
    purchasedItem: "Verified Organic Subscriber"
  }
];
