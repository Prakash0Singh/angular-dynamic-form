import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor() { }
  myNumber:number[]=[]

  addnumber(para:number){
    this.myNumber.push(para)
  }
  getnumber(){
   return this.myNumber
  }
}
