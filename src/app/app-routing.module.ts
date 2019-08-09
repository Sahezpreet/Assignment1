import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NextNewComponent } from './next-new/next-new.component';
import { ContactComponent } from './contact/contact.component';
import { CollegeComponent } from './college/college.component';



const routes: Routes = [
  { path: "", redirectTo: "mypage", pathMatch: "full"},
  { path: "mypage", component : NextNewComponent},
  { path: "contact", component : ContactComponent},
  { path: "academic", component : CollegeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
