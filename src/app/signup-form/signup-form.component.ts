import { Component} from '@angular/core';
import {  FormGroup, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  moreDeati: FormGroup; 
  constructor(private formBuilder: FormBuilder,private router:Router) {
  this.moreDeati = this.formBuilder.group({
    firstName: ['', [Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
    lastName:[''],
    email:['', [Validators.required,Validators.email]],
    crPass:['', [Validators.required]],
  })
}
  pMatch=false;
  showMsg= false;
  retFormDeatil() {
    if(this.moreDeati.valid){
    console.log(this.moreDeati.value,"This is form Data");
    console.log();
    this.moreDeati.reset()
    this.router.navigate(['/msg-page'])
  }
  if(this.moreDeati.value.firstName==""){
    this.showMsg=true;
  }
    // else{
    //   alert("Please Fill Complete Form..")
    // }
  }
  setValueData(){
    this.moreDeati.setValue({
      firstName:'Prakash',
      lastName : 'Singh',
      email:'singh@gmail.com',
      crPass:'Password',
    }) 
  }

}
