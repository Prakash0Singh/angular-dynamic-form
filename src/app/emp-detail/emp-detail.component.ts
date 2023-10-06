import { Component } from '@angular/core';
import { EmpRecordsService } from '../services/emp-records.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css'],
  providers:[EmpRecordsService]
})
export class EmpDetailComponent {
  constructor(private route:ActivatedRoute,private _empRecords:EmpRecordsService){}


  empRecord:any;

  ngOnInit():void{

    this.route.queryParams.subscribe(params => {
      let data = params;
      this.empRecord=data
      console.log(data);
      
      
      //  const arr=   this.route.snapshot.queryParamMap.get('id')
      //  console.log(arr,"This is the array");
      //  this.empRecord=arr;
      //  console.log(this.empRecord.name);
      
    });
    // this.route.queryParams.subscribe((v)=>{
    //   this.empRecord=JSON.parse(v['id']);
    //   // this.empRecord=v['id']
    //   console.log(this.empRecord+"This is not Object");
    // })


    // let emp=this._empRecords.EmpRecordsData
    // console.log(emp);
    // emp.filter((x:any)=>{
    //   if (x.empID==this.EmpID) {
    //   console.log(x,"This is the x");
    //   this.EmpName=x.name
    //   this.EmpPost=x.post
    //   this.EmpDepartment=x.department
    //   this.EmpBond=x.bond
    //   this.EmpDate=x.joining
    //   }
    // })
  }
}
