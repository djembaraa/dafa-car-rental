export interface Vehicle {
  id: number;
  name: string;
  type: "car" | "bike";
  price: number;
  image: string;
  seats: number;
  transmission: "Matic" | "Manual";
  fuel: string;
  year: number;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Toyota Alphard Transformer",
    type: "car",
    price: 2500000,
    image: "/images/alphard.png", 
    seats: 7,
    transmission: "Matic",
    fuel: "Bensin",
    year: 2024,
  },
  {
    id: 2,
    name: "Honda Civic Turbo",
    type: "car",
    price: 1200000,
    image: "/images/civic.png",
    seats: 5,
    transmission: "Matic",
    fuel: "Pertamax",
    year: 2023,
  },
  {
    id: 3,
    name: "Suzuki Jimny 5-Door",
    type: "car",
    price: 1500000,
    image: "/images/jimny.png",
    seats: 4,
    transmission: "Manual",
    fuel: "Bensin",
    year: 2024,
  },
  {
    id: 4,
    name: "Hyundai Ioniq 5",
    type: "car",
    price: 1800000,
    image: "/images/ioniq.png",
    seats: 5,
    transmission: "Matic",
    fuel: "Electric",
    year: 2024,
  },
  // --- BIKES ---
  {
    id: 5,
    name: "Vespa Sprint S",
    type: "bike",
    price: 250000,
    image: "/images/vespa.png",
    seats: 2,
    transmission: "Matic",
    fuel: "Pertamax",
    year: 2023,
  },
  {
    id: 6,
    name: "Kawasaki Ninja ZX-25R",
    type: "bike",
    price: 500000,
    image: "/images/ninja.png",
    seats: 2,
    transmission: "Manual",
    fuel: "Pertamax Turbo",
    year: 2022,
  },
  {
    id: 7,
    name: "Honda PCX 160",
    type: "bike",
    price: 150000,
    image: "/images/pcx.png",
    seats: 2,
    transmission: "Matic",
    fuel: "Bensin",
    year: 2023,
  },
  {
    id: 8,
    name: "Yamaha XMAX Connected",
    type: "bike",
    price: 350000,
    image: "/images/xmax.png",
    seats: 2,
    transmission: "Matic",
    fuel: "Bensin",
    year: 2024,
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Dimas Anggara",
    role: "Family Vacation",
    text: "Sewa Alphard disini sangat memuaskan. Mobil bersih, wangi, dan driver on-time. Anak-anak senang!",
    rating: 5,
    avatar: "/images/avatar1.png",
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Solo Traveler",
    text: "Sewa Vespa buat keliling kota seharian seru banget. Proses booking cepat, ga ribet pakai KTP doang.",
    rating: 5,
    avatar: "/images/avatar2.png",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Business Trip",
    text: "Harga kompetitif dibanding rental lain. Civic-nya kondisi prima, AC dingin. Recommended buat urusan bisnis.",
    rating: 4,
    avatar: "/images/avatar3.png",
  },
  {
    id: 4,
    name: "Jessica Tan",
    role: "Honeymoon",
    text: "Pelayanan ramah banget adminnya. Jimny-nya keren buat foto-foto di gunung. Makasih GoRent!",
    rating: 5,
    avatar: "/images/avatar4.png",
  },
];