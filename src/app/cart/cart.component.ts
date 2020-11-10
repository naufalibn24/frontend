import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../cart/cart.service';
import { Cart } from '../model/cart';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  carts: Cart;
  Jumlah: number = 0;
  constructor(private cartservice: CartService, private router: Router) {}

  ngOnInit() {
    const userId: String = localStorage.getItem('userId');
    this.cartservice.getCartId(userId).subscribe((result: any) => {
      if (result instanceof HttpErrorResponse) {
        if (result.status === 401) {
          this.router.navigate(['/login']);
        }
      } else {
        const cart = result.filter((e: any) => e.Checkout_Status === false);
        this.carts = cart;
      }
    });
  }

  deleteCart(cart: Cart) {
    Swal.fire({
      title: 'Apa Anda Yakin Hapus Produk?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartservice.deleteCartId(cart._id).subscribe(() => {
          window.location.reload();
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  postToCheckout(cart: Cart, jumlah: number) {
    const data: any = {
      Nama_Produk: cart.Nama_Produk,
      Harga_Produk: cart.Harga * jumlah,
      Id_Pesanan: cart._id,
      Id_User: cart.Id_user,
      Gambar: cart.Gambar,
      Jumlah: jumlah,
    };
    const id: any = cart.Id_user;
    this.cartservice.PostCheckoutId(id, data).subscribe((result: any) => {
      const status: any = result.success;
      if (status) {
        this.cartservice.UpdateCartId(cart._id, { Checkout_Status: true }).subscribe((result) => {
          this.router.navigate(['/checkout']);
        });
      }
    });
  }
}
