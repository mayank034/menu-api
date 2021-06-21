// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
 import { BaseItem, Item } from "./item.interface";
 import { Items } from "./items.interface";

/**
 * In-Memory Store
 */
 let items: Items = {
    1: {
      id: 1,
      name: "Burger",
      price: 599,
      description: "Tasty",
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
      id: 2,
      name: "Pizza",
      price: 299,
      description: "Cheesy",
      image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
      id: 3,
      name: "Tea",
      price: 199,
      description: "Informative",
      image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
  };

/**
 * Service Methods
 */
 export const findAll = async (): Promise<Item[]> => Object.values(items);  //Async functions will always return a value. Using async simply implies that a promise will be returned 
 console.log(Object.values(items));
 export const find = async (id: number): Promise<Item> => items[id];

 export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);  //await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value. You can use await when calling any function that returns a Promise, including web API functions.

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};


export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];   //The JavaScript delete operator removes a property from an object
};