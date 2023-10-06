import { Component } from '@angular/core';
import {TestingServicesService} from '../services/testing-services.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  msg:string="";
  constructor(private sampleService:TestingServicesService){
    console.log(sampleService.showMsg());
    this.msg=sampleService.showMsg();
  }
  ngOnInit(){
    this.msg=this.sampleService.showMsg();
  }
}
