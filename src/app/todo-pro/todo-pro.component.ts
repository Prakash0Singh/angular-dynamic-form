import { Component } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validator, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-pro',
  templateUrl: './todo-pro.component.html',
  styleUrls: ['./todo-pro.component.css']
})
export class TodoProComponent {
  todolist: FormGroup;
  todoRecords: any[] = [];
  showTodoRecords = false;
  updateIndex = 0;
  addBtn = true;
  updateBtn = false;
  // Template Driven form Variables
  tempShowRecords = false;
  tempTodoArray: any[] = [];
  templateTitleValue:any;
  templateDetailValue:any;
  templatModel={
    title:"",
    detail:"",
  }
  tempAddBtn=true;
  tempUpdateBtn=false;
  tempUpdateIndex=0;
  // Reactive Form To-do List

  constructor(private formBuilder: FormBuilder) {

    this.todolist = this.formBuilder.group({
      title: ['', [Validators.required]],
      detail: ['', [Validators.required]]
    })
  }

  todolistData() {
    console.log(this.todolist.value);
    this.todoRecords.push(this.todolist.value)
    this.showTodoRecords = true;
    this.todolist.reset()
  }
  removeRecord(para: number) {
    // console.log(para); - for index number
    this.todoRecords.splice(para, 1)
    if (this.todoRecords.length == 0) {
      this.showTodoRecords = false;
    }
  }
  editRecord(para: number) {
    console.log(para);
    console.log(this.todoRecords[para]);
    this.todolist.patchValue({
      'title': this.todoRecords[para].title,
      'detail': this.todoRecords[para].detail,
    })
    this.updateIndex = para;
    //  this.todoRecords.splice(para,1)
    this.addBtn = false;
    this.updateBtn = true;
  }
  updateToDoList(i: any) {
    // console.log(i.target.value)
    this.todoRecords[i.target.value] = this.todolist.value;
    this.addBtn = true;
    this.updateBtn = false;
    this.todolist.reset()
  }

  // Template Driven To-do List 

  tempToDO() {  
    if (this.templatModel.title.length>0 && this.templatModel.detail.length>0) {
      this.tempTodoArray.push(this.templatModel);
      this.tempShowRecords = true;
      // e.reset()
      this.templatModel={
        title:'',
        detail:"",
      }
    }
    else{
      alert("Can't Submit Empty To-do")
    }
  }
  tempRemoveRecord(index:number){
    this.tempTodoArray.splice(index,1)
    if(this.tempTodoArray.length==0){
      this.tempShowRecords=false;
    }
  }
  tempEditRecord(index:number){
    console.log(this.tempTodoArray[index]);
    this.templatModel={
      title:this.tempTodoArray[index].title,
      detail:this.tempTodoArray[index].detail,
    }
    this.tempAddBtn=false;
    this.tempUpdateBtn=true;
    this.tempUpdateIndex=index;
    }
    tempUpdateTodo(v:any){
      console.log(v.target.value);
     this.tempTodoArray[v.target.value]=this.templatModel;
      this.templatModel={
        title:'',
        detail:'',
      }
      this.tempAddBtn=true;
      this.tempUpdateBtn=false;
    }

}
