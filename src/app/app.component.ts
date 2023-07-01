
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent {
  personalForm!:FormGroup
  constructor(private fb : FormBuilder) {
    this.personalForm = this.fb.group({
      first_name : ['Sun'],
      last_name : ['Sha']
    })
  }


  updateFormByPatchValue() {
     this.personalForm.patchValue({first_name:'John', last_name:'Mark'})
  }

  updateFormBySetValue() {
    this.personalForm.setValue({first_name:'Roger', last_name:'Smith'})
 }

 submitForm(){
  console.log("FormValue : ", this.personalForm.value);
 }
  } 


  