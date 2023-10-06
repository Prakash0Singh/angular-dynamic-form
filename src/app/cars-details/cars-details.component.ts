import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { CarNameService } from '../services/car-name.service';
@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css'],
  providers:[CarNameService]
})
export class CarsDetailsComponent {
  constructor (private route:ActivatedRoute,private carInfo:CarNameService){}
  CarID:any;
  CarImage:any;
  CarDetail:any;
  CarName:any;

  ngOnInit(){
    this.route.queryParams.subscribe((value:any)=>{
      console.log(value,"This is value");
      this.CarID=value['id']
      console.log(this.CarID);
    })

    let para=this.CarID
    console.log(para,"This is para");
    
    let car=this.carInfo.MyCars
    car.filter((x:any)=>{
      if(x.id==para){
        console.log(x,"This is the x");
         this.CarDetail=x.detail
        this.CarName=x.name
        this.CarImage=x.img
      }
    })
  
  }
}
