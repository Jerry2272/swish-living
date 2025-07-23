import relatedImg1 from '../assets/item-1.jpg';
import relatedImg2 from '../assets/item-1.jpg';
import relatedImg3 from '../assets/item-1.jpg';
import relatedImg4 from '../assets/item-1.jpg';

export const newArrival = [
  {
    id: 17,
    name: "Modern Bookshelf",
    price: "95000",
    star: "⭐⭐⭐⭐⭐",
    img: relatedImg1,
    addCart: "Add to Cart",
    quantity: 1,
    discount: 15,
    reviews: [
      { rating: 5, text: "Looks amazing and stores so many books!" },
      { rating: 4, text: "Great value for the price." }
    ],
    description:
      "This modern bookshelf is perfect for showcasing your favorite reads and decor items. Sturdy, stylish, and space-saving.",
      removeCart: 'Remove Cart'
  },
  {
    id: 102,
    name: "Minimalist Center Table",
    price: "62000",
    star: "⭐⭐⭐⭐",
    img: relatedImg2,
    addCart: "Add to Cart",
    quantity: 1,
    description:
      "A simple yet elegant center table that fits beautifully in both classic and modern living rooms.",
      removeCart: 'Remove Cart'
  },
  {
    id: 103,
    name: "Premium Office Chair",
    price: "180000",
    star: "⭐⭐⭐⭐⭐",
    img: relatedImg3,
    addCart: "Add to Cart",
    quantity: 1,
    discount: 5,
    description:
      "Ergonomically designed office chair for long hours of comfort. Perfect for remote work or gaming setups.",
      removeCart: 'Remove Cart'
  },
  {
    id: 104,
    name: "Velvet Ottoman",
    price: "50000",
    star: "⭐⭐⭐⭐",
    img: relatedImg4,
    addCart: "Add to Cart",
    quantity: 1,
    description:
      "Soft velvet ottoman that doubles as seating and storage. A must-have addition to any living space.",
      removeCart: 'Remove Cart'
  }
];
