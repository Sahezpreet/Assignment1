import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  academic = new FormGroup({
    college: new FormControl('',Validators.required),
    degree: new FormControl('',Validators.required),
    yearFrom: new FormControl('',Validators.required),
    yearTo: new FormControl('',Validators.required)
  });

  constructor(private apiservice: RestApiService) { }

  addAcademic(){
    if (this.academic.invalid){
      return;
    }
    this.apiservice.saveacademicDetails(this.academic.value,'/academic/').subscribe(res=>{
      console.log(res);
    })
    console.log(this.academic.value)
  }

  ngOnInit() {
  }

}
