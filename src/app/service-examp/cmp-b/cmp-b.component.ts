import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
  // providers:[DemoService]
})
export class CmpBComponent {
  constructor(private _demoServices:DemoService){}
  lisdata:number[]=[];
  ngOnInit(){
    this.lisdata=this._demoServices.getnumber();
  }
  numAdd(e:any){
    console.log(e);
    this._demoServices.addnumber(e)
  }
}
