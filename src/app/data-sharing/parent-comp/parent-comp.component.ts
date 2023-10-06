import { Component,ViewChild,AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChildrenCompComponent } from "../child-comp/child-comp.component";
@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements AfterViewInit,OnInit{
  ngOnInit(): void {
  }
constructor(private ref: ChangeDetectorRef){

}

@ViewChild(ChildrenCompComponent) child: any;

  passingData=""
  parentData:string=""
  valueFromViewChild:string=''
  value=''
  transferData(){
    console.log("Data");
    this.parentData=this. passingData;
  }
  // ? Getting Data from Child Component
  sendData(value:string){
    this.value=value
  }
  ngAfterViewInit(): void {
    this.valueFromViewChild=this.child.Yo
    this.ref.detectChanges();

  }
}
