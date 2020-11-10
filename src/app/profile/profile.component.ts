import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { finalize } from 'rxjs/operators';
import { GetProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public data: any = {};
  constructor(private profileservice: GetProfileService) {}
  // getData(){
  //   this.profileservice
  //   .getData()
  //   .pipe(
  //     finalize(()=>{
  //       console.log('done')
  //     })
  //   )
  //   .subscribe((response: any )=>{
  //     console.log('res', response)
  //     this.data = response
  //   })
  // }

  // getDataId(){
  //   this.profileservice
  //   .getDataId()
  //   .pipe(
  //     finalize(()=>{
  //       console.log('done')
  //     })
  //   )
  //   .subscribe((response: any )=>{
  //     console.log('xxx', response)
  //     this.id = response
  //   })
  // }
  getId() {
    const userId: String = localStorage.getItem('userId');
    this.profileservice.getDataId(userId).subscribe((response: any) => {
      this.data = response;
    });
  }

  ngOnInit() {
    // this.getData();
    // this.getDataId()
    this.getId();
  }
}
