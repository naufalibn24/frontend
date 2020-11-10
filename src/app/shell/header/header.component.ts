import { Component, OnInit } from '@angular/core';
import { KategoriService } from '../header/header.service';
import { Kategori } from '../../model/kategori';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  kategories: Kategori[];
  constructor(private kategoriservice: KategoriService, private router: Router) {}

  ngOnInit() {
    this.getKategori();
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  getKategori() {
    this.kategoriservice.getKategori().subscribe((response) => {
      this.kategories = response;
    });
  }

  logOut() {
    let keysToRemove = ['userId', 'token'];
    for (const key of keysToRemove) {
      localStorage.removeItem(key);
    }
    this.router.navigate(['/home']);
  }
}
