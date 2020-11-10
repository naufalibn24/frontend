import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '@env/environment';
import { finalize } from 'rxjs/internal/operators/finalize';
import { DetailService } from '../detail/detail.service';
import { DetailsProduk } from '../model/detailProduk';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  version: string | null = environment.version;
  public id: string = '';
  detailProduk: DetailsProduk;
  constructor(private route: ActivatedRoute, private detailservice: DetailService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params.idDetail;
    });
    this.getDetail();
  }
  getDetail() {
    console.log('id', this.id);
    this.detailservice
      .getDetailId(this.id)
      .pipe(
        finalize(() => {
          console.log('done');
        })
      )
      .subscribe((response: any) => {
        this.detailProduk = response;
      });
  }
}
