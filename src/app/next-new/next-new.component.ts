import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { RestApiService } from 'src/app/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-new',
  templateUrl: './next-new.component.html',
  styleUrls: ['./next-new.component.css']
})
export class NextNewComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    middleName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    dateOfBirth: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required])
  });

  constructor(
    private apiservice: RestApiService,private router: Router
  ) { }

  studentAdd(){
    if (this.profileForm.invalid){
      return;
    }
    console.log(this.profileForm.value)
    this.apiservice.saveUserDetails(this.profileForm.value,'/save/').subscribe(res=>{
      console.log(res);
    this.router.navigate(['/contact'])  
    })  
    
  }

  ngOnInit() {
  }

  // registerUser(){
  //   let requiredData={
  //     fname: this.profileForm.controls['firstName'].value,
  //     mname: this.profileForm.controls['middleName'].value,
  //     lname: this.profileForm.controls['lastName'].value,
  //     loc: this.profileForm.controls['location'].value,
  //     dob: this.profileForm.controls['dateOfBirth'].value,
  //     sex: this.profileForm.controls['gender'].value
  //   }
  // }

}
