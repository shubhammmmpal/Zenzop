
export const RouteString = {
  PRODUCTPAGE: "ProductPage",
  PRODUCTDETAILSPAGE: "ProductDetailsPage",
  CARTPAGE:'CartPage',
  ORDERPAGE:'OrderPage',
  TRACKORDER:'TrackOrderScreen',
  DELIVEREDPAGE:"DeliveredPage",
};

export const productsFruits = [
  {
    id: 1,
    title: 'Organic Banana',
    price: 0.27,
    unit: '1 banana',
    image: require("../assets/images/Banana.png"),
  },
  {
    id: 2,
    title: 'Medium Hass Avocado',
    price: 2.21,
    unit: '1 avocado',
    image: require("../assets/images/Avocado.png"),
  },
  {
    id: 3,
    title: 'Large Tomato Hot House',
    price: 1.04,
    unit: '1 tomato',
    image: require("../assets/images/tomato.jpg"),
  },
];

export const Beverages = [
  {
    id: 1,
    title: 'Coca-Cola Zero Sugar Cola Soda',
    price: 9.89,
    unit: '12 x 12 fl oz',
    image: require("../assets/images/coca.png"),
  },
  {
    id: 2,
    title: 'Simply Pulp Free Orange Juice',
    price: 5.49,
    unit: '52 fl oz',
    image: require("../assets/images/ornage.png"),
  },
  {
    id: 3,
    title: 'Signature Select Refreshed Purified Drinki...',
    price: 4.39,
    unit: '24 x 16.9 fl oz',
    image: require("../assets/images/refresher.jpg"),
  },
];
export const frozenFoods = [
  {
    id: 1,
    title: "T.G.I. Friday’s Boneless Chicken Bites",
    price: 10.44,
    unit: "15 oz",
    image: require("../assets/images/Frozen1.png"),
  },
  {
    id: 2,
    title: "Apple and Maple Frozen Sausages",
    price: 7.69,
    unit: "55 fl oz",
    image: require("../assets/images/Frozen2.png"),
  },
  {
    id: 3,
    title: "Top Rated Frozen Item",
    price: 8.49,
    unit: "52 fl oz",
    image: require("../assets/images/Frozen3.jpg"),
  }
];

export const pantry = [
  {
    id: 1,
    title: "Yogi Honey Chai Turmeric Vitality",
    price: 5.49,
    unit: "16 tea bags",
    image: require("../assets/images/Pantry1.png"),
  },
  {
    id: 2,
    title: "Pillsbury Sugarfree Chocolate Cake",
    price: 5.49,
    unit: "12.4 oz",
    image: require("../assets/images/Pantry2.png"),
  },
  {
    id: 3,
    title: "Pillsbury Family Milk Cake",
    price: 2.74,
    unit: "18.4 oz",
    image: require("../assets/images/Pantry3.jpg"),
  }
];

export const groceries = [
  {
    id: 1,
    title: "Doritos Nacho Cheese",
    price: 6.15,
    unit: "9.3 oz",
    image: require("../assets/images/Groceries1.png"),
  },
  {
    id: 2,
    title: "Wheat Thins Sundried Tomato & Basil",
    price: 5.49,
    unit: "8.5 oz",
    image: require("../assets/images/Groceries2.png"),
  },
  {
    id: 3,
    title: "Dorito Ranch Bag",
    price: 6.15,
    unit: "9.2 oz",
    image: require("../assets/images/Groceries3.jpg"),
  }
];

export const meatSeafood = [
  {
    id: 1,
    title: "Signature Farms Boneless Skinless Chicken Breast",
    price: 11.54,
    unit: "approx 1.5 lbs",
    image: require("../assets/images/Seafood1.png"),
  },
  {
    id: 2,
    title: "Boar’s Head Turkey Honey Maple Glazed",
    price: 7.69,
    unit: "12 oz",
    image: require("../assets/images/Seafood2.png"),
  },
  {
    id: 3,
    title: "Jennie-O 93% Lean Ground Turkey",
    price: 7.14,
    unit: "16 oz",
    image: require("../assets/images/Seafood3.jpg"),
  }
];

export const cheese = [
  {
    id: 1,
    title: "Open Nature Vegan non-Dairy",
    price: 5.49,
    unit: "8 oz",
    image: require("../assets/images/Cheese1.png"),
  },
  {
    id: 2,
    title: "Primo Taglio Herb & Garlic Brie Cheese",
    price: 7.69,
    unit: "approx 0.5 lb",
    image: require("../assets/images/Cheese2.png"),
  },
  {
    id: 3,
    title: "Tillamook Sharp Cheddar",
    price: 5.49,
    unit: "8 oz",
    image: require("../assets/images/Cheese3.jpg"),
  }
];

export const related = [
  {
    id: '1',
    image: require("../assets/images/related1.jpg"),
  },
  {
    id: '2',
    image: require("../assets/images/related2.jpg"),
  },
  {
    id: '3',
    image: require("../assets/images/related3.jpg"),
  },
  {
    id: '4',
    image: require("../assets/images/related4.jpg"),
  },
];


export const nutritionFacts = [
  {
    name: "Total Fat",
    amount: "0g",
    dailyValue: "0%",
    bold: false,
    children: [
      { name: "Saturated Fat", amount: "0g", dailyValue: "0%" },
    ],
  },
  {
    name: "Sodium",
    amount: "0mg",
    dailyValue: "0%",
    bold: true,
  },
  {
    name: "Total Carbohydrate",
    amount: "30g",
    dailyValue: "10%",
    bold: false,
    children: [
      { name: "Dietary Fiber", amount: "3g", dailyValue: "10%" },
      { name: "Sugars", amount: "19g", dailyValue: "" },
    ],
  },
  {
    name: "Protein",
    amount: "1g",
    dailyValue: "",
    bold: true,
  },
  { name: "Potassium", amount: "", dailyValue: "15%" },
  { name: "Calcium", amount: "", dailyValue: "0%" },
  { name: "Iron", amount: "", dailyValue: "2%" },
  { name: "Vitamin A", amount: "", dailyValue: "2%" },
  { name: "Vitamin C", amount: "", dailyValue: "15%" },
];
