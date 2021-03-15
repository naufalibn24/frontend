import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RegisterService } from '../register/register.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerData: any = {};

  constructor(
    private route: Router,
    private registerservice: RegisterService
  ) {}

  ngOnInit() {}
  registerPost() {
    this.registerservice
      .postRegister(this.registerData)
      .subscribe((response: any) => {
        console.log(this.registerData, 'asd');
        console.log('xxx', response);
        if (response.success) {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil Register',
            text: 'Selamat Berbelanja' + ' ' + response.data.username,
          });
          this.route.navigate(['login']);
        }
      });
  }
}
