import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor() { }
  userData:any="tempdata";
  data:any={
    email:'testing@gmail.com',
    pass:'111111'
  }
  
  gettoken(){  
    if (this.data.email==this.userData.email)  return true
    else return false  
  }

  senddata(newdata:any){
    this.userData=newdata
  }
}
