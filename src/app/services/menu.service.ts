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
  items:Item[] = [];
  categories:Category[] = [];

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
        this.categories = mappedCategories;
        this.items = items;
  
        this.categoriesSubject.next(mappedCategories);
        this.itemsSubject.next(items);
      })
    );
  }

  getCategories() {
    return this.categories;
  }

  getItemsByCategory(categoryId: string) {
    return this.items.filter(i => i.categoryId === categoryId);
  }
}
