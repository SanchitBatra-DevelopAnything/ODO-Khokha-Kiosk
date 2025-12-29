import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Item } from '../models/item';
import { BehaviorSubject, forkJoin, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MenuService {

  constructor(private http: HttpClient) {
    
  }
  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  private itemsSubject = new BehaviorSubject<Item[]>([]);

  categories$ = this.categoriesSubject.asObservable();
  items$ = this.itemsSubject.asObservable();

  loadMenu() {
    return forkJoin({
      categories: this.http.get<Record<string, { categoryName: string }>>('https://odo-admin-app-default-rtdb.asia-southeast1.firebasedatabase.app/khokhaCategories.json'),
      items: this.http.get<Item[]>('https://getitemsbykhokhastore-jipkkwipyq-uc.a.run.app?storeId=Store1')
    }).pipe(
      tap(({ categories, items }) => {
        const mappedCategories: Category[] = Object.entries(categories).map(
          ([id, value]) => ({
            id,
            name: value.categoryName
          })
        );
  
        this.categoriesSubject.next(mappedCategories);
        this.itemsSubject.next(items);
      })
    );
  }
  


  categories: Category[] = [
    { id: "1", name: 'Burgers' },
    { id: "2", name: 'Fries' },
    { id: "3", name: 'Drinks' }
  ];

  items: Item[] = [
    { id: 1, categoryId: "1", name: 'Big Mac', price: 5, stock: 0 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 2, categoryId: "1", name: 'McChicken', price: 4, stock: 8  , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg"},
    { id: 3, categoryId: "1", name: 'Fries - Small', price: 2, stock: 15 , imageUrl: "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" },
    { id: 4, categoryId: "1", name: 'Fries - Large', price: 3, stock: 12 , imageUrl : "https://5.imimg.com/data5/SELLER/Default/2025/2/492380758/DX/BH/GM/82981234/redbull-kratingdaeng.jpeg" }
  ];

  getCategories() {
    return this.categories;
  }

  getItemsByCategory(categoryId: string) {
    return this.items.filter(i => i.categoryId === categoryId);
  }
}
