import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderPayload } from '../models/orderPayload';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

placeOrder(storeId:string , date:string , order:OrderPayload) : Observable<any>
  {
    return this.http.post('https://odo-admin-app-default-rtdb.asia-southeast1.firebasedatabase.app/khokhaOrders/'+storeId+'/'+date+'.json', order);
  }

  decrementStock(payload:any) : Observable<any>
  {
    return this.http.post('https://updatestockforstore-jipkkwipyq-uc.a.run.app' , payload);
  }

  sendSalesReport(storeId:any , date:any , operation:any) : Observable<any>
  {
    const payload = {
      "storeId": storeId,
      "date": date,
      "operation": operation
    }
    return this.http.post("https://generateadminsummary-jipkkwipyq-uc.a.run.app" , payload);
  }
}
