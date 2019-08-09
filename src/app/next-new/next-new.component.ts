import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-next-new',
  templateUrl: './next-new.component.html',
  styleUrls: ['./next-new.component.css']
})
export class NextNewComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    middleName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    dateOfBirth: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required)
  });

  constructor(
    private apiservice: RestApiService
  ) { }

  studentAdd(){
    this.apiservice.saveUserDetails(this.profileForm.value,'/save/').subscribe(res=>{
      console.log(res);
    })
    // this.router.navigate[('/contact')]
    console.log(this.profileForm.value)

  }

  ngOnInit() {
  }

}
