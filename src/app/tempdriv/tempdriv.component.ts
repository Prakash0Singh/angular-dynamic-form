import { Component ,ViewChild} from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tempdriv',
  templateUrl: './tempdriv.component.html',
  styleUrls: ['./tempdriv.component.css']
})
export class TempdrivComponent {
  
  showTodoRecords=false;
  updateIndex=0;
  @ViewChild('tempFormData') formTemp : NgForm|any;

  moreDeati: FormGroup; 
  constructor(private formBuilder: FormBuilder) {
  this.moreDeati = this.formBuilder.group({
    firstName: ['', [Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
    lastName:[''],
    age:['',[Validators.required,Validators.min(10),Validators.max(99)]],
    city: ['',[Validators.required]],
    pincode: ['',[Validators.required]],
    email:['', [Validators.required,Validators.email]],
    crPass:['', [Validators.required]],
    conPass:['', [Validators.required]],
  })
}

userRecords: any = []
cityOption = ["Jaipur", "Delhi"];
showRecords = false;
templateUpdate=0
templateupdateButton:boolean=false

// Tempalte Driven form Submit fuction 
onSubmit() {

  console.log(this.templateupdateButton);
  console.log(this.formTemp.value);

  this.userRecords.push(this.formTemp.value)
  console.log(this.userRecords);
  this.formTemp.reset();
  this.showRecords = true
}
deleteFormDetail(index:number){
  this.userRecords.splice(index, 1)
  if (this.userRecords.length == 0) {
    this.showRecords =false;
  }
}
editFormDetail(index:number){

 this.userRecords[index]
 this.formTemp.setValue(this.userRecords[index])
 this.templateUpdate=index;
 this.templateupdateButton=true;
 console.log(this.templateupdateButton);
 console.log(this.formTemp.setValue(this.userRecords[index]));
}

templateFormUpdate(index:any){
  // this.pMatch=false;
  // console.log(e.value);
  this.userRecords[index.value] = this.formTemp.value;
  this.templateupdateButton= false;
  this.formTemp.reset()
  }
}
