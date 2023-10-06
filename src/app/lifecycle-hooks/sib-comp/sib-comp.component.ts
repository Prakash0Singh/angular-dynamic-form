import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sib-comp',
  templateUrl: './sib-comp.component.html',
  styleUrls: ['./sib-comp.component.css']
})
export class SibCompComponent implements OnInit {
  constructor(){
    // console.log('Constructor is Called');
  }
  ngOnInit(){
    // console.log('OnsInit hook is called');
  }
  someButton(){
    console.log('[OTHER COMPONENT] You Just Clicked me ');
  }
}
