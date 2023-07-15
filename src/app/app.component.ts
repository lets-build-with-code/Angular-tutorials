
import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


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
      nominess: new FormArray([]),
    })
  }


  get nominess(): FormArray {
    return this.personalForm.get('nominess') as FormArray
  }

  addNominess() {
    const nominessFormGroup = this.fb.group({
      name:[''],
      age :[''],
      relation:[''],
      address: new FormArray([])
    })
    this.nominess.push(nominessFormGroup);
  }

  removeNominess(nominessIndex:number) {
    this.nominess.removeAt(nominessIndex)
  }

  getAddress(nominessIndex:number): FormArray {
    return this.nominess.at(nominessIndex).get('address') as FormArray
  }
  
 addAddress(nominessIndex:number) {
    const addressFormGroup = this.fb.group({
      street_name:[''],
      city : [''],
      state : [''],
      country : [''],
      zipcode : ['']
    })

    this.getAddress(nominessIndex).push(addressFormGroup);
 }

 removeAddress(nominessIndex:number, addressIndex:number) {
   this.getAddress(nominessIndex).removeAt(addressIndex)
 }
 
 submitForm(){
  console.log("FormValue : ", this.personalForm.value);
 }

  } 


  