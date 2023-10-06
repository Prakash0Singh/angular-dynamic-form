import { Component, OnInit, ViewChild } from '@angular/core';
import { WebSOCKETService } from '../services/websocket.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent implements OnInit {

  title = 'socketrv';
  content = '';
  received :any[]= [];
  sent :any[]= [];
  socket=new WebSocket('wss://139.59.73.87:3333/api/');
  constructor( ){}

  
  ngOnInit(){
    this.socket.addEventListener('message',(res)=>{
      console.log(res.data);
      this.received.push(res.data)
    }) 
  }

  sendMsg() {
    this.sent.push(this.content)
    this.socket.send(this.content);   


  }
  newConnection(){
    this.socket=new WebSocket('wss://socketsbay.com/wss/v2/1/demo/',["soap", "wamp"] );
  }

  closeConnection(){
    this.socket.close()
  }


  
}
