import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Item } from '../models/item';

@Injectable({ providedIn: 'root' })
export class MenuService {
  categories: Category[] = [
    { id: 1, name: 'Burgers' },
    { id: 2, name: 'Fries' },
    { id: 3, name: 'Drinks' }
  ];

  items: Item[] = [
    { id: 1, categoryId: 1, name: 'Big Mac', price: 5, stock: 0 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 2, categoryId: 1, name: 'McChicken', price: 4, stock: 8  , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg"},
    { id: 3, categoryId: 1, name: 'Fries - Small', price: 2, stock: 15 , imageUrl: "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 4, categoryId: 1, name: 'Fries - Large', price: 3, stock: 12 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 5, categoryId: 1, name: 'Coke', price: 1.5, stock: 20 , imageUrl: "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 6, categoryId: 1, name: 'Sprite', price: 1.5, stock: 18 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
  ];

  getCategories() {
    return this.categories;
  }

  getItemsByCategory(categoryId: number) {
    return this.items.filter(i => i.categoryId === categoryId);
  }
}
