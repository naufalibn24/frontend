import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from './checkout.service';
import { Checkout } from '../model/checkout';
import { Total } from '../model/totalHarga';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(private checkoutservice: CheckoutService, private route: Router) {}
  checkouts: Checkout;
  totals: Total;
  public alamat: any = {};
  public alamats: any = {};
  ngOnInit() {
    const userId: String = localStorage.getItem('userId');
    this.checkoutservice.getCheckoutId(userId).subscribe((result: any) => {
      if (result instanceof HttpErrorResponse) {
        if (result.status === 401) {
          this.route.navigate(['/login']);
        }
      } else {
        console.log('result', result.data);
        this.checkouts = result.data;
        this.totals = result.jumlah;
      }
    });
  }
  postAlamat() {
    const userId: String = localStorage.getItem('userId');
    this.checkoutservice.postAlamat(this.alamat).subscribe((result: any) => {
      if (result.status === true) {
        const id = result.data._id;
        this.checkoutservice.getAlamat(id).subscribe((result: any) => {
          this.alamats = result.data;
        });
      }
    });
  }
}
