import { Component, OnInit } from '@angular/core';
import { SibCompComponent } from '../sib-comp/sib-comp.component';

@Component({
  selector: 'app-temp-comp',
  templateUrl: './temp-comp.component.html',
  styleUrls: ['./temp-comp.component.css'],
  providers:[SibCompComponent]
})
export class TempCompComponent implements OnInit {
constructor(private _sibComp:SibCompComponent){
  navigator.mediaDevices.getUserMedia({audio:true,video:true}).then((stream)=>{console.log(stream);})
}

ngOnInit(){
 console.log("This is NgOnInit");
}
}
