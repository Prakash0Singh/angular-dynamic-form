import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  constructor(){  
    console.log("[IN CHILD] Constructor");
  }
  called=0
  childValue=""
  preValue:any;
  curValue:any;
  @Input() submitedValue:any;
  @ContentChild('contentParent') contentParent!:ElementRef;
  myChildColor={
    'background-color':'red',
    'color':'black'
  }
  ngOnInit(){
    console.log("[IN CHILD] ngOnInit");
    // console.log('Conent Child', this.contentParent);
  }

  ngOnChanges(changes: SimpleChanges): void { 
    this.myChildColor['background-color']=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    console.log("[IN CHILD] ngOnChanges");
    // console.log(changes);
    this.preValue=changes['submitedValue'].previousValue
    this.curValue=changes['submitedValue'].currentValue;
  }


  ngDoCheck(): void {
  console.log("[IN CHILD]DoCheck")
  //  console.log("[IN CHILD]DoCheck - every Change & after OnInit first run");
    this.called+=1
    // console.log('Conent Child', this.contentParent);
  }
  ngAfterContentInit(): void {
    console.log("[IN CHILD]After-Content-Init",this.contentParent.nativeElement.style.color="red");
    // console.log('Conent Child', this.contentParent);
  }
  ngAfterContentChecked(): void {
    console.log("[IN CHILD]AfterContent-Checked")
    // console.log("ngAfterContent-Checked is called here");
  }
  ngAfterViewInit(): void {
    
    console.log("[IN CHILD]After View-Init");
  }
  ngAfterViewChecked(): void {
    console.log("[IN CHILD]After-View-Checked");
  }
  ngOnDestroy(): void {
    this.submitedValue=undefined
    console.log("Also emptying Variabels used in this component- ",this.submitedValue);
    console.log("[IN CHILD]OnDestory");
    alert("Are you Sure you want to Exit")
  }
}
