import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { JSONForm } from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authservice:AuthServiceService,private formBuilder: FormBuilder,private router:Router ,private http:HttpClient,private httpBackend: HttpHandler){
    this.loginFom = this.formBuilder.group({
      email:[''],
      pass:['']
    })
    localStorage.setItem('user',JSON.stringify({email: 'testing@gmail.com', pass: '111111'}))
  }

  newHttpClient = new HttpClient(this.httpBackend);
  
  JSONForm!:JSONForm

  loginFom:FormGroup
  loginData(){
    console.log(this.loginFom.value);
    this.authservice.senddata(this.loginFom.value)
    this.router.navigateByUrl("/home");  
  }

  ngOnInit(): void {
    this.http.get('../../assets/form_control.json').subscribe((data:any)=>{
      this.JSONForm=data
    })
  }

}

