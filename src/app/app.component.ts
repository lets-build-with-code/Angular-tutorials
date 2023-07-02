
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


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
      last_name : ['Sha'],
      nominess: new FormArray([])
    })
  }


  get nominess(): FormArray {
    return this.personalForm.get('nominess') as FormArray
  }

  addNominess() {
    const nominessFormGroup = this.fb.group({
      name:[''],
      age :[''],
      relation:['']
    })
    this.nominess.push(nominessFormGroup);
  }

  removeNominess(index:number) {
    this.nominess.removeAt(index)
  }
  
 submitForm(){
  console.log("FormValue : ", this.personalForm.value);
 }

  } 


  