// src/items/items.interface.ts

import { Item } from "./item.interface";

export interface Items {
  [key: number]: Item;  //Here, [key: number] is the key of type number and Item is the value associated with the key
}