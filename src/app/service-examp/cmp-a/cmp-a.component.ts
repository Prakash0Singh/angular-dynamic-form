import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'],
  // providers: [DemoService]
})
export class CmpAComponent {
  constructor(private _demoService: DemoService) { }
  listData:number[]=[];
  ngOnInit(){
    this.listData=this._demoService.getnumber();
  }

  numadd(e: any){
    console.log(e);
    this._demoService.addnumber(e)
  }
}
