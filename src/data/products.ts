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
  },
  {
    id: "p9",
    name: "Fresh Organic Cultivated Blueberries",
    category: "Fresh Fruits",
    categoryId: "fruits",
    price: 4.49,
    oldPrice: 5.49,
    unit: "1 Pint Container (300g)",
    rating: 4.93,
    reviewsCount: 185,
    discountBadge: "18% OFF",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    description: "Sweet, juicy jumbo organic blueberries rich in natural antioxidants. Perfect for breakfast bowls or baking."
  },
  {
    id: "p10",
    name: "Wild Atlantic Salmon Fresh Fillet",
    category: "Fish & Seafood",
    categoryId: "fish",
    price: 13.49,
    oldPrice: 16.99,
    unit: "500g Fillet",
    rating: 4.91,
    reviewsCount: 112,
    discountBadge: "20% OFF",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600",
    description: "Fresh sustainably sourced wild ocean salmon fillet, packed with omega-3 fatty acids and ocean-fresh flavor."
  },
  {
    id: "p11",
    name: "Organic Baby Spinach Leaves",
    category: "Organic Veggies",
    categoryId: "vegetables",
    price: 2.99,
    oldPrice: 3.79,
    unit: "300g Clamshell",
    rating: 4.88,
    reviewsCount: 140,
    discountBadge: "21% OFF",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    description: "Tender, pre-washed organic baby spinach leaves ready for green smoothies, fresh salads, or sautéing."
  },
  {
    id: "p12",
    name: "Artisan Baked French Butter Croissants",
    category: "Artisan Bakery",
    categoryId: "bakery",
    price: 5.29,
    oldPrice: 6.59,
    unit: "Pack of 4 Pieces",
    rating: 4.94,
    reviewsCount: 167,
    discountBadge: "HOT FRESH",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    description: "Flaky, buttery gold French style croissants baked early every morning using pure grade-A grass-fed butter."
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
  },
  {
    id: "p13",
    name: "Raw Organic Wildflower Honey",
    category: "Healthy Snacks",
    categoryId: "snacks",
    price: 6.99,
    oldPrice: 8.99,
    unit: "500g Glass Jar",
    rating: 4.97,
    reviewsCount: 204,
    discountBadge: "PURE ORGANIC",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    isPopular: true,
    description: "Unfiltered, unpasteurized pure honey rich in natural enzymes and floral aromas."
  },
  {
    id: "p14",
    name: "Artisanal Creamy Greek Yogurt",
    category: "Dairy & Eggs",
    categoryId: "dairy",
    price: 3.89,
    oldPrice: 4.59,
    unit: "500g Tub",
    rating: 4.89,
    reviewsCount: 132,
    discountBadge: "HIGH PROTEIN",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    isPopular: true,
    description: "Thick, velvety smooth plain Greek yogurt made from whole organic milk."
  },
  {
    id: "p15",
    name: "Organic Green Detox Power Juice",
    category: "Juices & Drinks",
    categoryId: "beverages",
    price: 4.99,
    oldPrice: 5.99,
    unit: "500ml Bottle",
    rating: 4.91,
    reviewsCount: 96,
    discountBadge: "NEW",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b7?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    isPopular: true,
    description: "Fresh blend of organic kale, green apple, cucumber, lemon, and ginger."
  },
  {
    id: "p16",
    name: "Whole Free-Range Organic Chicken",
    category: "Prime Meat",
    categoryId: "meat",
    price: 11.99,
    oldPrice: 14.99,
    unit: "1.4kg Whole Bird",
    rating: 4.94,
    reviewsCount: 88,
    discountBadge: "ORGANIC",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    isPopular: true,
    description: "Pasture-raised non-GMO chicken tender and flavorful, perfect for Sunday roast."
  },
  {
    id: "p17",
    name: "Roasted Sea Salt Organic Almonds",
    category: "Healthy Snacks",
    categoryId: "snacks",
    price: 5.49,
    oldPrice: 6.99,
    unit: "250g Pouch",
    rating: 4.86,
    reviewsCount: 154,
    discountBadge: "SNACK FAVORITE",
    image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    isPopular: true,
    description: "Slow roasted Californian organic almonds lightly seasoned with natural pink sea salt."
  },
  {
    id: "p18",
    name: "Sweet Organic Tropical Pineapple",
    category: "Fresh Fruits",
    categoryId: "fruits",
    price: 3.49,
    oldPrice: 4.49,
    unit: "1 Whole Fruit",
    rating: 4.87,
    reviewsCount: 110,
    discountBadge: "FRESH PICK",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=600",
    isOrganic: true,
    isPopular: true,
    description: "Golden ripe tropical pineapple bursting with juicy sweetness and enzymes."
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
