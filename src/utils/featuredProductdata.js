import product1 from '../assets/bedsheet-product.jpg'
import product2 from '../assets/duvet.jpg'
import product3 from '../assets/bedsheet-product9.jpg'
import product4 from '../assets/bedsheet-product6.jpg'
import product5 from '../assets/duvet5.jpg'
import product6 from '../assets/bedsheet-product1.jpg'
import product7 from '../assets/duvet2.jpg'
import product8 from '../assets/bedsheet-product12.jpg'
import product9 from '../assets/duvet4.jpg'
import product10 from '../assets/bedsheet-product13.jpg'

import bestImg1 from '../assets/White-Foreign-duvet1.jpg';
import bestImg2 from '../assets/featured-pillow.jpg';
import bestImg3 from '../assets/darkbrown-Foreign-duvet.jpg';
import bestImg4 from '../assets/dark-Foreign-duvet2.jpg';
import bestImg5 from '../assets/Feathered-Sleeping-pillows.jpg';
import bestImg6 from '../assets/Foreign-Pink-Duvet.jpg';

export const featuredProductdata = [
  // 1. Pillow
  {
    id: 2,
    name: "Feathered Sleeping pillows",
    price: "11,500",
    star: "⭐⭐⭐⭐",
    img: bestImg2,
    quantity: 10, 
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
    selectColor: [
      { text: 'red' },
      { text: 'blue' },
      { text: 'black' },
    ],
    description: "Sink into the soft cushions of the Luxury Sofa, made with high-quality materials and elegant design to transform any room.",
    reviews: [
      { rating: 5, text: "Absolutely love this pillow! It's so comfortable and supportive." },
      { rating: 4, text: "Great quality and design. Perfect for my bedroom." }
    ]
  },

  // 2. Bedsheet
  {
    id: 303,
    name: "Onion Pink Duvet set",
    price: "40000 - ₦50,000",
    star: "⭐⭐⭐⭐",
    img: product3,
    quantity: 1, 
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
    selectSize: [
      { text: '3/6', price: 40000 },
      { text: '4/6', price: 43000 },
      { text: '6/7', price: 45000 },
      { text: '7/7', price:50000},
    ],
    description: "Elegant and soft fabric bedsheet.",
    reviews: [
      { rating: 5, text: "This bedsheet is so soft and luxurious!" },
      { rating: 4, text: "Beautiful design and great quality." }
    ]
  },

  // 3. Duvet
  {
    id: 1,
    name: "White Foreign Duvet",
    price: "28,000 - ₦40,000",
    star: "⭐⭐⭐⭐",
    img: bestImg1,
    quantity: 6,
    description: "Various sizes of quality white duvets.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
    selectColor: [
      { text: 'White' },
      { text: 'blue' },
      { text: 'black' },
    ],
    selectSize: [
      { text: '3/6', price: 28000 },
      { text: '4/6', price: 33000 },
      { text: '6/7', price: 38000 },
      { text: '7/7', price: 40000 },
    ],
  },

  // 4. Pillow
  {
    id: 5,
    name: "Swish Living Fiber pillows",
    price: "₦13,000",
    star: "⭐⭐⭐⭐",
    img: bestImg5,
    quantity: 1,
    description: "Durable fiber pillows for better sleep.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
    selectColor: [
      { text: 'red' },
      { text: 'blue' },
      { text: 'black' },
    ],
  },

  // 5. Duvet
  {
    id: 606,
    name: "Black Duvet Set",
    price: "₦120,000",
    star: "⭐⭐⭐⭐",
    img: product6,
    quantity: 1,
    description: "Elegant and soft fabric bedsheet.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
  },

  // 6. Duvet
  {
    id: 3,
    name: "Ash Foreign Duvet",
    price: "₦28,000 - ₦40,000",
    star: "⭐⭐⭐⭐",
    img: bestImg3,
    quantity: 6,
    description: "Ash colored duvets in all sizes.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
    selectColor: [
      { text: 'White' },
      { text: 'blue' },
      { text: 'black' },
    ],
    selectSize: [
      { text: '3/6', price: 28000 },
      { text: '4/6', price: 33000 },
      { text: '6/7', price: 38000 },
      { text: '7/7', price: 40000 },
    ],
  },

  // 7. Pillow (repeat)
  {
    id: 2,
    name: "Feathered Sleeping pillows",
    price: "₦11,500",
    star: "⭐⭐⭐⭐",
    img: bestImg2,
    quantity: 10,
    description: "Soft and supportive pillows for a restful sleep.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
    selectColor: [
      { text: 'red' },
      { text: 'blue' },
      { text: 'black' },
    ],
  },

  // 8. Bedsheet
  {
    id: 1001,
    name: "Bedsheet",
    price: "₦620,000",
    star: "⭐⭐⭐⭐",
    img: product10,
    quantity: 1,
    description: "Top luxury bedsheet with high thread count.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
  },

  // 9. Duvet
  {
    id: 4,
    name: "Dark Foreign Duvet",
    price: "₦28,000 - ₦40,000",
    star: "⭐⭐⭐⭐",
    img: bestImg4,
    quantity: 10,
    description: "Premium dark duvets in multiple sizes.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
    selectColor: [
      { text: 'White' },
      { text: 'blue' },
      { text: 'black' },
    ],
    selectSize: [
      { text: '3/6', price: 28000 },
      { text: '4/6', price: 33000 },
      { text: '6/7', price: 38000 },
      { text: '7/7', price: 40000 },
    ],
  },

  // 10. Pillow (repeat again)
  {
    id: 5,
    name: "Swish Living Fiber pillows",
    price: "₦13,000",
    star: "⭐⭐⭐⭐",
    img: bestImg5,
    quantity: 1,
    description: "Durable fiber pillows for better sleep.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
    selectColor: [
      { text: 'red' },
      { text: 'blue' },
      { text: 'black' },
    ],
  },

  // 11. Bedsheet
  {
    id: 808,
    name: "Bedsheet",
    price: "₦50,000",
    star: "⭐⭐⭐⭐",
    img: product8,
    quantity: 15,
    description: "Affordable yet high-quality bedsheet.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
  },

  // 12. Duvet
  {
    id: 6,
    name: "Pink Foreign Duvet",
    price: "₦28,000 - ₦40,000",
    star: "⭐⭐⭐⭐",
    img: bestImg6,
    quantity: 1,
    description: "Lovely pink duvets in different sizes.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
    selectColor: [
      { text: 'red' },
      { text: 'blue' },
      { text: 'black' },
    ],
    selectSize: [
      { text: '3/6', price: 28000 },
      { text: '4/6', price: 33000 },
      { text: '6/7', price: 38000 },
      { text: '7/7', price: 40000 },
    ],
  },

  // 13. Bedsheet
  {
    id: 101,
    name: "White Foreign Feathered Duvet",
    price: "₦120,000",
    star: "⭐⭐⭐⭐",
    img: product1,
    quantity: 1,
    description: "Feather-filled comfort duvet in white.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
  },

  // 14. Duvet
  {
    id: 202,
    name: "Duvet",
    price: "₦150,000",
    star: "⭐⭐⭐⭐",
    img: product2,
    quantity: 1,
    description: "High quality duvet with luxury softness.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
  },

  // 15. Duvet
  {
    id: 505,
    name: "Duvet",
    price: "₦720,000",
    star: "⭐⭐⭐⭐",
    img: product5,
    quantity: 1,
    description: "Imported top-tier duvet for luxury homes.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
  },

  // 16. Duvet
  {
    id: 707,
    name: "Duvet",
    price: "₦120,000",
    star: "⭐⭐⭐⭐",
    img: product7,
    quantity: 6,
    description: "Standard duvet with extra fluff.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
  },

  // 17. Duvet
  {
    id: 909,
    name: "Duvet",
    price: "₦220,000",
    star: "⭐⭐⭐⭐",
    img: product9,
    quantity: 1,
    description: "Mid-tier pricing with premium value.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
  },

  // 18. Duvet
  {
    id: 404,
    name: "Duvet",
    price: "₦50,000",
    star: "⭐⭐⭐⭐",
    img: product4,
    quantity: 1,
    description: "Budget-friendly duvet, great for guests.",
    addCart: "Add to Cart",
    removeCart: 'Remove Cart',
  },
];
