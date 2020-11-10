import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  version: string | null = environment.version;
  public loginData: any = {};

  constructor(private loginservice: LoginService, private route: Router) {}
  ngOnInit() {}

  loginsPost() {
    this.loginservice.postLogin(this.loginData).subscribe((response: any) => {
      if (response.success) {
        localStorage.setItem('token', response.tokens);
        localStorage.setItem('userId', response.data._id);
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Login',
          text: 'Selamat Datang' + ' ' + response.data.username,
        });
        this.route.navigate(['home']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email Dan Password Tidak Cocok',
          footer: '<a href>Why do I have this issue?</a>',
        });
      }
    });
  }
}
