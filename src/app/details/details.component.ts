import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  userDetailsForm!:FormGroup;
  isFormDirty:boolean = false;

  constructor(private fb : FormBuilder) {
    this.userDetailsForm = this.fb.group({
      username : [''],
      registration_no : ['']
    })
  }

  checkFormStatus() {
    this.isFormDirty = this.userDetailsForm.dirty;
  }
  submit() {
    console.log("user's detail form value : ", this.userDetailsForm.value)
  }
}
