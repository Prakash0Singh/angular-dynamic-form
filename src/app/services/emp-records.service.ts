import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpRecordsService {

  constructor() { }
  EmpRecordsData:any[]=[
    {empID:"QW21ES",name:"Max",post:"Employee",department:"Angular",bond:"incomplete",joining:"09-Jan-2023"},
    {empID:"PO42LF",name:"Rohit",post:"Manager",department:"Android & Web",bond:"incomplete",joining:"12-Dec-2022"},
    {empID:"VS42KN",name:"Shyam",post:"Employee",department:"Node",bond:"incomplete",joining:"23-Jun-2021"},
    {empID:"VC40XC",name:"Mohit",post:"Employee",department:"React",bond:"incomplete",joining:"31-Mar-2019"},
  ]

}
