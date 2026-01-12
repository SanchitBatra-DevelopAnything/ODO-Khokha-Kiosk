import { Component } from '@angular/core';
import { Category } from './models/category';
import { Item } from './models/item';
import { MenuService } from './services/menu.service';
import { CartItem } from './models/cart-item';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { OrderPayload } from './models/orderPayload';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: Category[] = [];
  items: Item[] = [];
  selectedCategoryId$ = new BehaviorSubject<string | null>(null);
  filteredItems$ = combineLatest([
    this.menuService.items$,
    this.selectedCategoryId$
  ]).pipe(
    map(([items, categoryId]) => {
      if (!categoryId) return [];
      return items.filter(item => item.categoryId === categoryId);
    })
  );
  
  categories$ = this.menuService.categories$;
  items$ = this.menuService.items$;


  cart: CartItem[] = [];
  selectedPaymentMethod: 'UPI' | 'CASH' | null = null;
  isLoading = false;

  constructor(private menuService: MenuService , private apiService:ApiService) {}

  ngOnInit() {
    this.menuService.loadMenu().subscribe();
  }

  selectCategory(category: Category) {
    this.selectedCategoryId$.next(category.id);
    // this.items = this.menuService.getItemsByCategory(category.id);
  }

  addToCart(item: Item) {
    const cartItem = this.cart.find(ci => ci.item.id === item.id);
  
    if (cartItem) {
      this.incrementCartItem(cartItem);
    } else {
      if (item.stock > 0) {
        this.cart.push({ item, quantity: 1 });
      } else {
        alert('Item out of stock!');
      }
    }
  }

  incrementCartItem(ci: CartItem) {
    if (ci.quantity < ci.item.stock) {
      ci.quantity++;
    } else {
      alert('Cannot add more, stock limit reached!');
    }
  }

  decrementCartItem(ci: CartItem) {
    if (ci.quantity > 1) {
      ci.quantity--;
    } else {
      this.removeFromCart(ci);
    }
  }
  

  removeFromCart(ci: CartItem) {
    this.cart = this.cart.filter(x => x !== ci);
  }

  get total() {
    return this.cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  }

  placeOrder() {
    if (!this.selectedPaymentMethod) {
      alert('Please select a payment method');
      return;
    }
  
    if (this.cart.length === 0) {
      alert('Cart is empty');
      return;
    }
    this.isLoading = true;
  
    const orderPayload = this.buildOrderPayload();
    const stockPayload = this.buildStockUpdatePayload(orderPayload, 'Store1');
    const date = this.getTodayDate(); // DD-MM-YYYY
  
    this.apiService.decrementStock(stockPayload).subscribe({
      next: () => {
        // ✅ Stock successfully decremented → place order
        this.apiService.placeOrder('Store1', date , orderPayload).subscribe({
          next: () => {
            alert(`Order placed successfully with payment method: ${this.selectedPaymentMethod}`);
            // ✅ REFRESH MENU (updated stock)
            this.menuService.loadMenu().subscribe();
            this.cart = [];
            this.selectedPaymentMethod = null;
          },
          error: (err) => {
            console.error('Order placement failed', err);
            alert(`Order failed. Error code: ${err?.status || 'UNKNOWN'}`);
          },
          complete: () => { this.isLoading = false; }
        });
      },
      error: (err) => {
        console.error('Stock decrement failed', err);
        alert(`Stock update failed. Error code: ${err?.status || 'UNKNOWN'}`);
      }
    });
  }
  

  getImageUrl(name: string) {
    const query = encodeURIComponent(name + " food item");
    return `https://source.unsplash.com/featured/300x300/?${query}`;
  }

  isAddDisabled(item: Item): boolean {
    const cartItem = this.cart.find(ci => ci.item.id === item.id);
    const qtyInCart = cartItem ? cartItem.quantity : 0;
    return item.stock === 0 || qtyInCart >= item.stock;
  }

  buildOrderPayload(): OrderPayload {
    const items = this.cart.map(ci => ({
      itemId: ci.item.id,
      itemName: ci.item.name,
      quantity: ci.quantity,
      totalAmount: ci.item.price * ci.quantity
    }));
  
    return {
      items,
      orderTotal: this.total,
      paymentType: this.selectedPaymentMethod!
    };
  }

  buildStockUpdatePayload(orderPayload: any, storeId: string) {
    return {
      storeId: storeId,
      items: orderPayload.items.map((item: any) => ({
        itemId: item.itemId,
        qty: item.quantity
      })),
      operation: 'subtract'
    };
  }

  getTodayDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  sendSalesReport() {
    const date = this.getTodayDate(); // DD-MM-YYYY
    this.isLoading = true;
  
    this.apiService.sendSalesReport('Store1', date, 'aggregate')
      .subscribe({
        next: () => {
          alert('Sales report sent successfully');
        },
        error: (err) => {
          console.error('Sales report sending failed', err);
          alert(`Sales report sending failed. Error code: ${err?.status || 'UNKNOWN'}`);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }
  
  
}
