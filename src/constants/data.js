import images from './images';

const mains = [
  {
    title: 'Filet Mignon',
    price: '$50',
    tags: 'USDA Prime Beef | 8 oz',
  },
  {
    title: 'Lobster Thermidor',
    price: '$60',
    tags: 'Maine Lobster | Cream Sauce',
  },
  {
    title: 'Seared Ahi Tuna',
    price: '$45',
    tags: 'Sushi Grade Tuna | Wasabi Aioli',
  },
  {
    title: 'Wild Mushroom Risotto',
    price: '$35',
    tags: 'Arborio Rice | Truffle Oil',
  },
  {
    title: 'Gourmet Wagyu Burger',
    price: '$30',
    tags: 'Wagyu Beef | Brioche Bun',
  },
];


const sides = [
  {
    title: 'Truffle Fries',
    price: '$12',
    tags: 'Hand-Cut | Parmesan',
  },
  {
    title: 'Grilled Asparagus',
    price: '$10',
    tags: 'Lemon Zest | Olive Oil',
  },
  {
    title: 'Creamed Spinach',
    price: '$10',
    tags: 'Fresh Spinach | Cream Sauce',
  },
  {
    title: 'Roasted Brussels Sprouts',
    price: '$12',
    tags: 'Balsamic Glaze | Bacon Bits',
  },
  {
    title: 'Garlic Mashed Potatoes',
    price: '$9',
    tags: 'Yukon Gold Potatoes | Garlic Butter',
  },
];

const wines = [
  {
    title: 'Chardonnay Reserve',
    price: '$45',
    tags: 'US | Bottle',
  },
  {
    title: 'Pinot Grigio',
    price: '$40',
    tags: 'IT | Bottle',
  },
  {
    title: 'Merlot Classic',
    price: '$50',
    tags: 'FR | Bottle',
  },
  {
    title: 'Craft Lager',
    price: '$35',
    tags: 'DE | 750 ml',
  },
  {
    title: 'India Pale Ale (IPA)',
    price: '$38',
    tags: 'UK | 750 ml',
  },
];


const cocktails = [
  {
    title: 'Margarita',
    price: '$12',
    tags: 'Tequila | Lime | Salt',
  },
  {
    title: 'Old Fashioned',
    price: '$14',
    tags: 'Bourbon | Sugar | Bitters',
  },
  {
    title: 'Martini',
    price: '$13',
    tags: 'Gin | Vermouth | Olive',
  },
  {
    title: 'Mojito',
    price: '$11',
    tags: 'Rum | Mint | Lime | Soda',
  },
  {
    title: 'Negroni',
    price: '$15',
    tags: 'Gin | Campari | Vermouth',
  },
];


const awards = [
  {
    imgUrl: images.award02,
    title: 'Elegant Dining',
    subtitle: 'Recognizes luxurious ambiance and exceptional service.',
  },
  {
    imgUrl: images.award01,
    title: 'Culinary Innovation',
    subtitle: 'Honors creativity in dishes and techniques.',
  },
  {
    imgUrl: images.award05,
    title: 'Excellence in Hospitality',
    subtitle: ' Acknowledges outstanding service and atmosphere.',
  },
  {
    imgUrl: images.award03,
    title: 'Environmental Sustainability',
    subtitle: 'Celebrates commitment to eco-friendly practices.',
  },
];

export default { wines, cocktails, awards, mains, sides };
