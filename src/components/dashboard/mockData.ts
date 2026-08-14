export interface StatItem {
  id: string;
  title: string;
  value: number | string;
  change: string;
  isPositive: boolean;
  iconName: "ShoppingBag" | "Clock" | "CheckCircle2" | "ShoppingCart";
  colorTheme: "emerald" | "amber" | "teal" | "purple";
}

export interface MonthlyAnalytics {
  month: string;
  orders: number;
  spending: number;
}

export interface OrderStatusBreakdown {
  status: "Delivered" | "Processing" | "Shipped" | "Cancelled";
  count: number;
  percentage: number;
  color: string;
}

export interface Order {
  id: string;
  product: string;
  date: string;
  amount: number;
  status: "Delivered" | "Processing" | "Shipped" | "Cancelled";
  itemsCount: number;
  image?: string;
}

export interface CartItemMock {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  unit: string;
}

export interface UserProfileMock {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
  status: string;
  memberSince: string;
  role: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  time: string;
  type: "delivered" | "cart" | "address" | "shipped" | "wishlist";
}

// 1. Overview Statistic Cards Data
export const STATS_DATA: StatItem[] = [
  {
    id: "total-orders",
    title: "Total Orders",
    value: 24,
    change: "+12% this month",
    isPositive: true,
    iconName: "ShoppingBag",
    colorTheme: "emerald",
  },
  {
    id: "pending-orders",
    title: "Pending Orders",
    value: 3,
    change: "2 in processing",
    isPositive: true,
    iconName: "Clock",
    colorTheme: "amber",
  },
  {
    id: "completed-orders",
    title: "Completed Orders",
    value: 18,
    change: "94.7% success rate",
    isPositive: true,
    iconName: "CheckCircle2",
    colorTheme: "teal",
  },
  {
    id: "cart-items",
    title: "Cart Items",
    value: 5,
    change: "2 items with deals",
    isPositive: true,
    iconName: "ShoppingCart",
    colorTheme: "purple",
  },
];

// 2. Monthly Analytics Data
export const MONTHLY_ANALYTICS: MonthlyAnalytics[] = [
  { month: "January", orders: 8, spending: 120 },
  { month: "February", orders: 12, spending: 180 },
  { month: "March", orders: 15, spending: 240 },
  { month: "April", orders: 10, spending: 160 },
  { month: "May", orders: 18, spending: 320 },
  { month: "June", orders: 24, spending: 410 },
];

// 3. Order Status Breakdown
export const ORDER_STATUS_BREAKDOWN: OrderStatusBreakdown[] = [
  { status: "Delivered", count: 18, percentage: 75, color: "#10b981" },
  { status: "Processing", count: 3, percentage: 12.5, color: "#3b82f6" },
  { status: "Shipped", count: 2, percentage: 8.3, color: "#f59e0b" },
  { status: "Cancelled", count: 1, percentage: 4.2, color: "#ef4444" },
];

// 4. Recent Orders Table Data
export const RECENT_ORDERS_DATA: Order[] = [
  {
    id: "#FC-10245",
    product: "Organic Honeycrisp Apples & Berries",
    date: "Aug 12, 2026",
    amount: 24.5,
    status: "Delivered",
    itemsCount: 3,
  },
  {
    id: "#FC-10244",
    product: "Fresh Whole Milk & Grade A Eggs",
    date: "Aug 10, 2026",
    amount: 18.2,
    status: "Processing",
    itemsCount: 2,
  },
  {
    id: "#FC-10243",
    product: "Weekly Grocery Essentials Bundle",
    date: "Aug 08, 2026",
    amount: 45.8,
    status: "Shipped",
    itemsCount: 6,
  },
  {
    id: "#FC-10242",
    product: "Fresh Organic Vegetables & Greens",
    date: "Aug 05, 2026",
    amount: 31.4,
    status: "Delivered",
    itemsCount: 4,
  },
  {
    id: "#FC-10241",
    product: "Artisan Cheese & Sourdough Bread",
    date: "Aug 01, 2026",
    amount: 29.9,
    status: "Delivered",
    itemsCount: 3,
  },
  {
    id: "#FC-10240",
    product: "Organic Strawberry & Blueberry Box",
    date: "Jul 28, 2026",
    amount: 15.5,
    status: "Cancelled",
    itemsCount: 1,
  },
];

// 5. Static Cart Preview Items
export const CART_PREVIEW_ITEMS: CartItemMock[] = [
  {
    id: "cart-1",
    name: "Organic Honeycrisp Apples",
    quantity: 2,
    price: 3.99,
    unit: "1 lb pack",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "cart-2",
    name: "Pasture-Raised Grade A Eggs",
    quantity: 1,
    price: 4.99,
    unit: "1 Carton (12 eggs)",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "cart-3",
    name: "Fresh Organic Whole Milk",
    quantity: 1,
    price: 5.49,
    unit: "1 Gallon bottle",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "cart-4",
    name: "Organic Hass Avocados",
    quantity: 1,
    price: 4.29,
    unit: "4 Pack bag",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=300",
  },
];

// 6. User Profile Summary Data
export const USER_PROFILE_DATA: UserProfileMock = {
  name: "Tanvir Hassan",
  email: "mstanvir@example.com",
  phone: "+880 1712 345 678",
  address: "42 Green Valley Road, Sector 7, Uttara, Dhaka 1230",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
  status: "Active",
  memberSince: "January 2026",
  role: "VIP Customer",
};

// 7. Recent Activity Timeline Data
export const RECENT_ACTIVITIES: ActivityItem[] = [
  {
    id: "act-1",
    title: "Order #FC-10245 delivered successfully",
    time: "10 mins ago",
    type: "delivered",
  },
  {
    id: "act-2",
    title: "Added Organic Bananas to cart",
    time: "2 hours ago",
    type: "cart",
  },
  {
    id: "act-3",
    title: "Updated default delivery address",
    time: "Yesterday",
    type: "address",
  },
  {
    id: "act-4",
    title: "Order #FC-10244 shipped via Express Courier",
    time: "2 days ago",
    type: "shipped",
  },
  {
    id: "act-5",
    title: "Added Fresh Hass Avocados to wishlist",
    time: "3 days ago",
    type: "wishlist",
  },
];
