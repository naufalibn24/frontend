import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdukService } from '../Produk/produk.service';
import { DetailsProdukKategori } from '../model/detailProdukKategori';
import { QuoteService } from '../home/quote.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.scss'],
})
export class ProdukComponent implements OnInit {
  public detail = 'Detail';
  id: any;
  search: string = '';
  produkKategori: DetailsProdukKategori[];
  userId: any = '';
  tokens: any = '';
  constructor(
    private route: ActivatedRoute,
    private produkservice: ProdukService,
    private quoteService: QuoteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.produkservice.getProduk(this.id).subscribe((response) => {
        this.produkKategori = response;
      });
    });
    const user = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    this.tokens = token;
    this.userId = user;
  }
  public goToDetail = function (data: any): void {
    this.router.navigate(['home/detail'], { queryParams: { idDetail: data } });
  };

  onSearch() {
    if (this.search != '') {
      const produks = this.produkKategori.filter((e) => {
        return e.Nama_barang.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      });
      this.produkKategori = produks;
    } else {
      this.ngOnInit();
    }
  }
  buyPost(data: any) {
    const datas: any = {
      Nama_Produk: data.Nama_barang,
      Harga: data.harga,
      Gambar: data.gambar,
    };
    if (!this.tokens) {
      this.router.navigate(['login']);
    } else {
      this.quoteService.postSell(this.userId, datas).subscribe((result) => {
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
}
