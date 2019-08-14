import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestApiService } from 'src/app/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  studentContact = new FormGroup({
    emailId: new FormControl('',Validators.required),
    contactNumber: new FormControl('',Validators.required),
    githubLink: new FormControl('',Validators.required),
    linkedLink: new FormControl('',Validators.required)
  });

  constructor(private apiservice: RestApiService,
    private router: Router) { }

  contactAdd(){
    if (this.studentContact.invalid){
      return;
    }
    this.apiservice.savecontactDetails(this.studentContact.value,'/contact/').subscribe(res=>{
      console.log(res);
      this.router.navigate(['/academic'])
    })
    console.log(this.studentContact.value)

  }

  ngOnInit() {
  }

}
