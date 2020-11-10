import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { QuoteService } from './quote.service';
import { Router } from '@angular/router';
import { Produk } from '../model/produk';
import { Carousell } from '../model/carousell';
import Swal from 'sweetalert2';
import { result } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  public detail = 'Detail';
  public data: any = {};
  public userId: any = '';
  public tokens: any = '';
  carousells: Carousell[];
  produks: Produk[];
  constructor(private quoteService: QuoteService, private router: Router) {}

  ngOnInit() {
    const user = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    this.tokens = token;
    this.userId = user;

    this.quoteService.getProduk().subscribe((produks) => {
      this.produks = produks;
    });

    this.getCarousell();
  }

  public goToDetail = function (data: any): void {
    this.router.navigate(['home/detail'], { queryParams: { idDetail: data } });
  };

  buyPost(data: any) {
    const datas: any = {
      Nama_Produk: data.Nama_barang,
      Harga: data.harga,
      Gambar: data.gambar,
    };
    console.log('post', datas);
    if (!this.tokens) {
      this.router.navigate(['login']);
    } else {
      this.quoteService.postSell(this.userId, datas).subscribe((result) => {
        console.log('xxx', result);
        if (result.succes) {
          Swal.fire({
            icon: 'success',
            title: 'Sukses Menyimpan',
            text: 'Berhasil Menambahakn Ke Cart!',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Gagal Menyimpan',
            text: 'Gagal Menambahakn Ke Cart!',
          });
        }
      });
    }
  }

  getCarousell() {
    this.quoteService.getCarousell().subscribe((result: any) => {
      this.carousells = result.data;
      console.log('crs', result.data);
    });
  }
}
