import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../restaurant/restaurant.service';

export interface Item {
  name: string;
  price: number;
}

export interface Order {
  _id: string;
  name: string;
  address: string;
  phone: string;
  status: string;
  items: Array<Item>;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders() {
    return this.httpClient.get('/api/orders') as Observable<Config<Order>>;
  }

  createOrder(order: Order): Observable<Order> {
    const orderData = Object.assign({}, order);
    orderData.status = 'new';
    return this.httpClient.post('/api/orders', orderData) as Observable<Order>;
  }

  updateOrder(order: Order, action: string) {
    const orderData = Object.assign({}, order);
    orderData.status = action;
    return this.httpClient.put('/api/orders/' + orderData._id, orderData);
  }

  deleteOrder(id: string) {
    return this.httpClient.delete('/api/orders/' + id);
  }

  getTotal(items: Array<Item>) {
    let total = 0.0;
    items.forEach((item: Item) => {
      total += item.price;
    });
    return Math.round(total * 100) / 100;
  }

}
