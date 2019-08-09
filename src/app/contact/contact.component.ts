import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestApiService } from 'src/app/rest-api.service';

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

  constructor(private apiservice: RestApiService) { }

  contactAdd(){
    this.apiservice.savecontactDetails(this.studentContact.value,'/contact/').subscribe(res=>{
      console.log(res);
    })
    console.log(this.studentContact.value)

  }

  ngOnInit() {
  }

}
