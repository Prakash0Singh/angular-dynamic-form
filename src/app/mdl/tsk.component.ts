import { Component } from '@angular/core';

@Component({
  selector: 'app-tsk',
  templateUrl: './tsk.component.html',
  styleUrls: ['./tsk.component.css']
})
export class TskComponent {
  userName:any;
  Circuit="Reverse Circuit"
  selectCar:any;
  selectTrack:any;
  carsSlt(e:any){
    this.selectCar=e.target.value
  }
  track(e:any){
    this.selectTrack=e.target.value
  }
 a:any;
 b:any;
 c:any;
  ability(e:any){
 
    if (e.target.checked) {
      if (e.target.id=="time") {
        this.a=e.target.name
      }
      if (e.target.id=="nitro") {
        this.b=e.target.name
      }
      if (e.target.id=="damage") {
        this.c=e.target.name
      }
    }
    else{
      if (e.target.id=="time") {
        this.a=""
      }
      if (e.target.id=="nitro") {
        this.b=""
      }
      if (e.target.id=="damage") {
        this.c=""
      }
    }
  }
  
}
