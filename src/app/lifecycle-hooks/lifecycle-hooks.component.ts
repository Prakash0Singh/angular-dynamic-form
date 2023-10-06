import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit,OnDestroy,DoCheck,OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
console: any;
// @Input() sample="Hello World"
  constructor(){console.log("[IN PARENT] Constructor ");}
  // @ViewChild('nameChange')nameChange:ElementRef | undefined
  parentVar=""
  cal=0;
  ngOnInit(): void {
    console.log("OnInit-[IN PARENT]");
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.sample);
    console.log("OnChange-[IN PARENT]");
  }
  ngDoCheck(): void {
    console.log("DoCheck-[IN PARENT]")
   this.cal+=1;
    // console.log("[IN PARENT] DoCheck-called every Change & after OnInit first run 456");
  }
  ngAfterContentInit(): void {
    console.log("After-Content-Init-[IN PARENT]");
    // console.log('Conent Child', this.contentParent);
  }
  ngAfterContentChecked(): void {
    console.log("AfterContent-Checked-[IN PARENT]")
  }
  ngAfterViewInit(): void {
    console.log("View-Init-[IN PARENT]");
  }
  ngAfterViewChecked(): void {
    console.log("After-View-Checked-[IN PARENT]");
  }
 ngOnDestroy(): void {
   console.log("Component Destory-[IN PARENT]");
 }
  value:string='Default Value'
  changeValue(para:any){
    this.value=para.value
  }
  showChild=true
}
