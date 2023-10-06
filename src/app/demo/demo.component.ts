import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<h3>Component Template </h3><p>This is Sample Template in Angualr To check Template in Componet</p>`,
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css','./custom.css'],
})
export class DemoComponent {
  shapeClass:any;
  ColorChange:any;
  yourName="Prakash"
  welcMsg="Types of Directives";
  strVariable1=false;
  showMsg:string=""
  showData:any;
  itemName:string="";
  itemPostion:string=""
  selectName:string=""
  itemDetail:string="";
  font: any;
  howBox=false
  fontSize=100;

  firstButton(){
    this.showMsg="You have done Component Directive."
  }
  checkingCon(p:boolean){
    this.strVariable1=p
  }
  items=["words","counting","in","break"]
  objItems=[
    {name:"Mark",
    email:"a@gmail.com",
    city:"Jaipur"},
    {name:"Yoda",
    email:"b@gmail.com",
    city:"Jaipur"},
    {name:"Stark",
    email:"c@gmail.com",
    city:"Pune"}
  ]
  tutionfee=[{name:"Rahul",paid:false,fee:1000},{name:"Mohit",paid:true,fee:2100},{name:"Rohan",paid:false,fee:2000},{name:"Sohan",paid:true,fee:500}];
  showAllDetails=true
  listItems=[
    {name:'Noemi Willis',field:"Software Engineer",image:"https://randomuser.me/api/portraits/men/67.jpg",detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed consequuntur facere nihil veritatis nulla laborum aperiam, harum illo similique."},
    {name:'Regina Barnes',field:"Web Developer",image:"https://randomuser.me/api/portraits/men/32.jpg",detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed consequuntur facere nihil veritatis nulla laborum aperiam, harum illo similique."},
    {name:'Haylee Brady',field:"App Developer",image:"https://randomuser.me/api/portraits/women/27.jpg",detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed consequuntur facere nihil veritatis nulla laborum aperiam, harum illo similique."},
    {name:'Ryder Marks',field:"System Tester",image:"https://randomuser.me/api/portraits/men/75.jpg",detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed consequuntur facere nihil veritatis nulla laborum aperiam, harum illo similique."},
    {name:'Eliezer Harper',field:"SEO",image:"https://randomuser.me/api/portraits/women/26.jpg",detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed consequuntur facere nihil veritatis nulla laborum aperiam, harum illo similique."},
  ];
  showMeData(e:any){
      this.listItems.filter((x:any)=>{
        if(e.target.value == x.name){
          this.itemName=x.name
          this.itemPostion=x.field
          this.itemDetail=x.detail
          console.log(x);
        }
      })
  }
  myIconStyles={
    'font-size':`${this.fontSize}px`,
    'color':`rgb(0,0,0)`
  }
  someList=[
    {name:'Star',title:'bi bi-star-fill'},
    {name:"Square",title:"bi bi-square-fill"},
    {name:"Triangle",title:"bi bi-triangle-fill"},
    {name:"Circle",title:"bi bi-circle-fill"},
    {name:"Pentagon",title:"bi bi-pentagon-fill"},
    {name:"Hexagon",title:"bi bi-hexagon-fill"},  
    {name:"Octagon",title:"bi bi-octagon-fill"},  
  ]
  showShape(e:any){
    this.howBox=true
    console.log(e.target.value);
    this.someList.filter((sh:any)=>{
      if (e.target.value== sh.name) {
      this.shapeClass=sh.title
      }
    })
  }
  increaseFont(){
    this.fontSize+=10
    this.myIconStyles['font-size']=`${this.fontSize}px`
  }
  decreaseFont(){
    this.fontSize-=10
    this.myIconStyles['font-size']=`${this.fontSize}px`
  }
  radomColorChange(){
    this.myIconStyles['color']=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
  }

}