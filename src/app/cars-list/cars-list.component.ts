import { Component } from '@angular/core' ;
import { Router } from '@angular/router';
import { CarNameService } from '../services/car-name.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
  providers:[CarNameService]
})
export class CarsListComponent {
  constructor (private router:Router,private carlist:CarNameService){}
  carDetailList:any []=[]
  ngOnInit(){
    this.carDetailList=(this.carlist.MyCars)
    console.log(this.carDetailList);
  }
  CarClick1(para:any){
    console.log(para.target.alt);
    this.router.navigate(['/car-detail'],{queryParams:{id:para.target.alt}})
  }

}
