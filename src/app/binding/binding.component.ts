import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  variable1="Hello world using"
  link="https://images.unsplash.com/photo-1676452457948-7d02dff1eb43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  variable2=true
  v=typeof(this.variable2)
  userName:any;
  userName1:any;
  selectedValue:any;
  callAlert(name:any) {
    // alert("Event in Angular !!!")
    this.variable2=!this.variable2
    this.userName=""
    this.variable1=`Hello This is ${name}`
  }
  selectValue(eve:any){
    this.selectedValue=eve.target.value
    // console.log(eve.target.value,"This is the value");
    
  }
  randomColor(e:any){
    let colorList=["red","green","blue","white","LightCoral","LightSalmon","DarkOrange","DarkKhaki","DarkViolet","MediumSlateBlue","PaleGreen","SpringGreen"]
  e.target.parentElement.style.background=colorList[Math.floor(Math.random() * colorList.length)];
  // e.target.parentElement.style.background=
    let red=Math.floor(Math.random() *256);
    let green=Math.floor(Math.random() * 256);
    let blue=Math.floor(Math.random() * 256);
    console.log(red,green,blue);
      // e.target.parentElement.style.background=rgb()

  }

  topicName:any;
  enterdValue(e:any){
    if (e.target.value!=null) {
      this.topicName=`https://source.unsplash.com/random/?${e.target.value}&auto=format&fit=crop&w=500&q=80`
    }
    // <img src="https://source.unsplash.com/random/?Cryptocurrency/" alt="crypto"/>
  }
  fistValue:number=0;
  secondValue:number=0;
  resultTotal:number=0;
  showData:any;
  userValuess:any
  selectOperation(e:any){
   if (e.target.value=="+") {
    this.resultTotal= Number(this.fistValue)+Number(this.secondValue)
    console.log(this.resultTotal,"This is plus");
    
   }
   else if (e.target.value=="-") {
    this.resultTotal= Number(this.fistValue-this.secondValue)
    console.log(this.resultTotal,"This is total");
    
   }
   else if(e.target.value=="*"){
  this.resultTotal=  Number(this.fistValue)*Number(this.secondValue)
   }
  }

  selectNumber(event:any){
    if(event.target.name === 'first'){
      this.fistValue=event.target.value
    }
    if (event.target.name=="second") {
      this.secondValue=event.target.value
    }
  }
  imageOpacity(event:any){
    let randomNumber=Math.random() * 1
    console.log(event.target.style.opacity=randomNumber.toFixed(1))
  }
  fFamily(e:any){
    e.target.nextSibling.style.fontFamily=e.target.value
    this.showData=e.target.value
  }
}
