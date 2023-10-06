import { Component, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, FormBuilder, NonNullableFormBuilder } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  constructor(private formBuilder: NonNullableFormBuilder) { }

  // Reactive Form Coding ------------------------------------------------------------------------------
  moreDeati = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    lastName: [''],
    age: ['', [Validators.required, Validators.min(10), Validators.max(99)]],
    city: ['', [Validators.required]],
    pincode: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    crPass: ['', [Validators.required]],
    conPass: ['', [Validators.required]],
  })
  retUserRecord: any = []
  pMatch = false;
  showRec = false;
  update = 0;
  updateButton = false;
  //   moreDeati=new FormGroup({
  //     firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //     lastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //     age:new FormControl(),
  //     email:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //     crPass:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //     conPass:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //     city: new FormControl('',[Validators.required]),
  //     pincode: new FormControl('',[Validators.required]),
  // }); 
  retFormDeatil() {
    if (this.moreDeati.get('crPass')?.value == this.moreDeati.get('conPass')?.value) {
      this.pMatch = false;
      // console.log(this.moreDeati.value);
      this.retUserRecord.push(this.moreDeati.value)
      this.showRec = true;
      // this.moreDeati.setValue({
      //   firstName:'',
      //   lastName :'',
      //   age:'',
      //   city:'',
      //   pincode:'',
      //   email:'',
      //   crPass:'',
      //   conPass:'',
      // })
      this.moreDeati.reset()

    }
    else {
      this.pMatch = true;
    }
  }
  setValueData() {
    this.moreDeati.setValue({
      firstName: 'Prakash',
      lastName: 'Singh',
      age: '20',
      city: 'Jaipur',
      pincode: '302021',
      email: 'singh@gmail.com',
      crPass: 'Password',
      conPass: 'Password',
    })
  }
  reactiveFormEdit(index: number) {
    this.update = index;
    console.log(this.update);
    this.moreDeati.setValue({
      firstName: this.retUserRecord[index].firstName,
      lastName: this.retUserRecord[index].lastName,
      age: this.retUserRecord[index].age,
      city: this.retUserRecord[index].city,
      pincode: this.retUserRecord[index].pincode,
      email: this.retUserRecord[index].email,
      crPass: this.retUserRecord[index].crPass,
      conPass: this.retUserRecord[index].conPass,
    })
    this.updateButton = true;
  }
  reactiveFormDelete(index: number) {
    this.retUserRecord.splice(index, 1)
    if (this.retUserRecord.length == 0) {
      this.showRec = false;
    }
  }
  reactiveFormUpdate(e: any) {
    if (this.moreDeati.get('crPass')?.value == this.moreDeati.get('conPass')?.value) {
      this.pMatch = false;
      console.log(e.value);
      this.retUserRecord[e.value] = this.moreDeati.value;
      this.updateButton = false;
      this.moreDeati.reset()
    }
    else {
      this.pMatch = true;
    }
  }

  resetFormValue() {
    this.moreDeati.reset()
  }
}
