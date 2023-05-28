
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent {

  customForm:FormGroup = new FormGroup({
    age : new FormControl('',[Validators.required, Validators.min(5), Validators.max(100), this.ageValidator])
  })


ageValidator(control:FormControl) {
  return (control.value >= 25) ? {ageLimitExceed : true}: null
}

  submitAge(){
    console.log("FormGroup : ", this.customForm, "Form Values : ", this.customForm.value)
  }
}
