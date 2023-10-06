import { Component,ViewChild,AfterViewInit, OnInit, ChangeDetectorRef, Input } from '@angular/core';
@Component({
  selector: 'app-sibling-comp',
  templateUrl: './sibling-comp.component.html',
  styleUrls: ['./sibling-comp.component.css']
})
export class SiblingCompComponent implements OnInit,AfterViewInit {

  constructor(){}

  @Input() parentData:string='';

  ngOnInit(): void {

  }
  
  ngAfterViewInit(): void {

  }

}
