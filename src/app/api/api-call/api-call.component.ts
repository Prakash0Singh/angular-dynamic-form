import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCallingService } from 'src/app/services/api-calling.service';
import {Router} from '@angular/router';
import {SortUserPipe} from '../../pipes/sort-user.pipe'
// import { FilterPipe } from 'ngx-filter-pipe';


@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css'],
  // providers: [FilterPipe]
})
export class ApiCallComponent implements OnInit{
  // For Auth Guard canDeactivate
    redirectingAllowed=true
  
  unamePattern = "^[a-z0-9_-]{8,15}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  constructor(private formBuilder: FormBuilder, private _apiService: ApiCallingService,private _apiCalling: ApiCallingService,private router: Router,private _sortCustomPipe: SortUserPipe) {

    this.userDetailsMore=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:[''],
      age:['',[Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]+$")]],
      gender:['',[Validators.required]],
      address:this.formBuilder.group({
        streetaddress:['',[Validators.required,Validators.minLength(2)]],
        flatno:['',[Validators.required]],
        zipcode:['',[Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(6),Validators.minLength(6)]],
        city:['',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
        state:['',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      }),
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      createpassword:['',[Validators.required]],
      confirmpassword:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(10)]]
    })
  }
  hide=false;
  conhide=false;
  showspinner=false
  page:number=1;
  count:number=0;
  tabelSize:number=5;
  tabelSizes:number[]=[5,10,15]
  filterUserName=""
  confirmPas=false;
  showPass=false
  showSignUp=true;
  showUpdate=true;
  Heading="Sign Up Form"
  sortAZ:any;
  sortZA:any;
  showZAButton:boolean=false;
  allUser:any=[]
  userDetailsMore:FormGroup;
  editUserId:any=null;
  deleteUserId:any=null;
  deletingUserName:string=''
  userSearching:string=''
  ngOnInit(){
    this.showspinner=true
    setTimeout(() => {
      this.getapiData()
    }, 100);
  }
  getapiData(){
    this.showspinner=false
    this._apiCalling.getApiData().subscribe((data)=>{
      this.allUser=data
      this.sorttingTabel('az')
    
    })
  }
  setFormDeatil() {
      this._apiService.postApiData(this.userDetailsMore.value).subscribe((data=>{
      console.log(data);
      this.ngOnInit();
      this.userDetailsMore.reset();
      }))
  }

  show(){
    this.showPass=false
    this.confirmPas=false;
    this.showUpdate=false
    this.showSignUp=true
    this.Heading="Sign Up Form"
  }
  searchUser(event:any){
    console.log(event.value);
    this.userSearching=event.value
  }

  editData(userData:any){
    this.showPass=false;
    this.confirmPas=false;
    this.showSignUp=false;
    this.showUpdate=true;
    this.Heading="Edit Detail Form"
    console.log(userData);
    this.userDetailsMore.patchValue({
      firstName: userData.firstName,
      lastName:userData.lastName,
      age:userData.age,
      gender:userData.gender,
      address:{
      streetaddress:userData.address.streetaddress,
      flatno:userData.address.flatno,
      zipcode:userData.address.zipcode,
      city:userData.address.city,
      state:userData.address.state,
      },
      email:userData.email,
      createpassword:userData.createpassword,
      confirmpassword:userData.confirmpassword,
      phone:userData.phone,
    })
    console.log("Editing UserId - ",userData.id);
    this.editUserId=userData.id;
  }

  updatUserData(){
      this._apiService.putApiData(this.editUserId,this.userDetailsMore.value).subscribe((data=>{
        console.log(data);
        this.ngOnInit();
        this.userDetailsMore.reset()
      }))
      this.showPass=false;
      this.confirmPas=false;
  }
  deleteData(userId:number,userName:string){
    this.deleteUserId=userId
    console.log("Deleting userID - ",userId);
    this.deletingUserName=userName
  }
  confirmDelete(){
    this._apiService.deleteApiData(this.deleteUserId).subscribe((data=>{
      this.ngOnInit();
    }))
  }

  sorttingTabel(para:string){
  console.log("You Clicked on Sorting Button");  
  this.sortAZ=this._sortCustomPipe.transform(this.allUser,para)
  this.showZAButton=!this.showZAButton
  }
  onTabelDataChange(event:any){
    this.page=event;
    this.getapiData()
  }
  onTabelSizeChange(event:any):void{
    this.tabelSize=event.target.value;
    this.page=event;
    this.getapiData()
  }

  // marquee Function
  marqueeFullName:string='';
  marqueeCall(firstName:string,lastName:string){
    this.marqueeFullName=firstName+' '+lastName
    this.randomColor['color']=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    this.randomColor['font-size']=`${Math.floor(Math.random()*31)}px`;

  }
  randomColor={
    'color':"red",
    'font-size':'10px'
  }

  // ? Fro Angular Material Table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  ELEMENT_DATA:any= [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  dataSource = this.ELEMENT_DATA;

}
