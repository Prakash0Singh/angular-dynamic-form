import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-firebase-api',
  templateUrl: './firebase-api.component.html',
  styleUrls: ['./firebase-api.component.css']
})
export class FirebaseApiComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private firebaseService: FirebaseService) { }

  firebaseAuth: any = this.formbuilder.group({
    userid: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  products = [
    { name: 'Hi', about: "Hello World" }
  ]

  ngOnInit(): void {
    if (localStorage.getItem('_token')) {
      this.firebaseService.getalldata().subscribe({
        next: (res: any) => {
          console.log(res)
        }
      })

    }
  }

  userlogin() {
    if (this.firebaseAuth.valid) {

      this.firebaseService.getUserlogin(this.firebaseAuth.value.userid, this.firebaseAuth.value.password).subscribe({
        next: (res: any) => {
          console.log(res)
          localStorage.setItem("_token", res.idToken)
        }
      })
    }
  }

}
