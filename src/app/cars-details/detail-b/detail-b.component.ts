import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { CarNameService } from 'src/app/services/car-name.service';

@Component({
  selector: 'app-detail-b',
  templateUrl: './detail-b.component.html',
  styleUrls: ['./detail-b.component.css'],
  providers:[CarNameService]
})
export class DetailBComponent {
  constructor (private route:ActivatedRoute,private carInfo:CarNameService){}
  CarID:any;
  CarImage:any;
  CarDetail:any;
  CarName:any;
  ngOnInit(){
    this.CarID=this.route.snapshot.paramMap.get('id');
    let car=this.carInfo.MyCars
    car.filter((x:any)=>{
      if(x.id==this.CarID){
        console.log(x,"This is the x");
         this.CarDetail=x.detail
        this.CarName=x.name
        this.CarImage=x.img
      }
    })
  }  
}
