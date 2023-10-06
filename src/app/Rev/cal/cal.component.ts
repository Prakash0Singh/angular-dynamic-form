import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCallingService } from 'src/app/services/api-calling.service';
import {ThemePalette} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  editId: any;
  toggleButton:boolean=true;
  demodate:any;


constructor(private apiService:ApiCallingService,private formbuilder:FormBuilder,private _snackBar: MatSnackBar){
  this.demouserdata=this.formbuilder.group({
    name:['',[Validators.required]],
    age:['',[Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(2)],],
    number:['',[Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(10),Validators.minLength(10)]]
  })
}
demouserdata:FormGroup;
demoUserInfo:any;
  ngOnInit(): void {
    this.apiService.demoApiData().subscribe((data)=>{
      this.demoUserInfo=data
      console.log(data);
    })
  }
  displayForm(){
    this.toggleButton=true;
    this.demouserdata.reset()
  }
  // Delete user
  deletedemouser(para:any){
    console.log("You clicked Here",para.id);
    this.apiService.demoDelete(para.id).subscribe((data)=>{
      console.log("user deleted");
      this._snackBar.open('Data removed successfully ','', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration:4000
      });
      this.ngOnInit()
    })
  }
  // New User Data
  userNewData(){
   console.log(this.demouserdata.value);
   this.apiService.addNewUser(this.demouserdata.value).subscribe((data)=>{
    console.log("data successfully added");
    this.ngOnInit()
   })
   this.demouserdata.reset();
  }
  // Edit user Info
  editdemouser(para:any){
    this.demouserdata.patchValue({
      name:para.name,
      age:para.age,
      number:para.number
    })
    console.log(para.id);
    this.editId=para.id
    this.toggleButton=false
  }
  updateData(){
    this.apiService.editUser(this.editId,this.demouserdata.value).subscribe((data)=>{
      console.log("Data Edited Successfully");
      this._snackBar.open('Record updated successfully ','', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration:4000,
        panelClass :'text-center'
      });
      this.ngOnInit()
    })
  }
  data(para:any){
    // console.log(this.demodate);
    let preYear=para.getFullYear()
    let curYear=new Date().getFullYear()
    console.log(new Date().getFullYear());
    console.log(para.getFullYear());

    console.log(curYear-preYear);
  }

  // For Changing Theme Using Toggle Button

   color: ThemePalette = 'accent';

  //  sideNavbar
  events: string[] = [];
  opened: boolean | undefined;
  shouldRun=true

  openSnackBar() {
    this._snackBar.open('Copy Data Successfully', 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration:2000
    });
  }
  // Range in Angular Material
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
}

