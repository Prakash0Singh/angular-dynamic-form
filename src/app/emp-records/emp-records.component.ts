import { Component } from '@angular/core';
import { EmpRecordsService } from '../services/emp-records.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-records',
  templateUrl: './emp-records.component.html',
  styleUrls: ['./emp-records.component.css'],
  providers:[EmpRecordsService]
})
export class EmpRecordsComponent {
constructor(private router:Router,private _empRecords:EmpRecordsService){}
dataRecords:any[]=[];
showData:any=[]
ngOnInit():void{
  this.dataRecords=this._empRecords.EmpRecordsData
  console.log(this.dataRecords);
}
empCard(Data:any){
console.log(Data,"This is tehe ");
this.showData=Data
}

empCard2(e:any){
  console.log("Employee Detail will be shown in Next page :",e);
  this.router.navigate(['/emp-detail'],{queryParams:{...e}})
}
clearRecord(){
  this.showData=''
}
}
