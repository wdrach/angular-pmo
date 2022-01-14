import { Component, OnInit, Input } from '@angular/core';
import { Order, OrderService } from '../order.service';

@Component({
  selector: 'pmo-order-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() order?: Order;
  orderTotal = 0.0;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    if (!this.order) {
      throw new Error('Order is not defined');
    }

    this.orderTotal = this.orderService.getTotal(this.order.items);
  }
}
