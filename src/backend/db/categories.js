import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fruits & vegetables",
    description: "Fruits and Vegetables",
  },
  {
    _id: uuid(),
    categoryName: "dairy & breakfast",
    description:"Dairy & Breakfast"
  },
  {
    _id: uuid(),
    categoryName: "snacks & bakery",
    description: "Snacks and Bakery"
  },
  {
    _id: uuid(),
    categoryName: "beverages",
    description: "Cold drink & Juices"
  },
  {
    _id: uuid(),
    categoryName: "sweets",
    description: "Sweets"
  }
];
