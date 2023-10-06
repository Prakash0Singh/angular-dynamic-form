import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustPipePipe } from '../pipes/cust-pipe.pipe';
@Component({
  selector: 'app-pipes-examp',
  templateUrl: './pipes-examp.component.html',
  styleUrls: ['./pipes-examp.component.css']
})
export class PipesExampComponent {
  constructor (private datePipe:DatePipe,private cStom:CustPipePipe){
    this.currDate=this.datePipe.transform(Date.now(),'yyyy-MM-dd')
    this.custMM=this.cStom.transform(2,87)
  }
  show=true
  custMM:any;
  todayDate=Date()
  currDate:any;
title="Angular Developer"
defination="A pipe takes in data as input and transforms it into an output."
definationPart2="The pipe's purpose is to allow the transformation of an existing value and reusability!"
userData={name:'prakash',id:'1291TP',department:'Angular Developer'}
detail="this is just for use of tittlecase pipe in angular"

ruppess=1
dollar=78
}
