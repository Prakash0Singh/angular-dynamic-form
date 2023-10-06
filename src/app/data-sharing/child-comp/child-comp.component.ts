import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-children-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildrenCompComponent {

  @Input() parentData:string='';
  @Output() sendData=new EventEmitter<string>();
  userString=''
  Yo="This is the useCase of View Child"
  sendingData(){
    this.sendData.emit(this.userString)
  }
}
