import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  url = 'https://ngrx-angualr-default-rtdb.firebaseio.com/'

  getUserlogin(email: string, password: string) {
    let data = { email, password, returnSecureToken: true }
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBllkNUPp_DWtcPbNGzGeK2XTWH8oY-gxE`, data)
  }

  addnewdata(data: any) {
    return this.http.post(`${this.url}data.json`, data)
  }

  getalldata() {
    let authtoken: any = localStorage.getItem('_token')
    return this.http.get(`${this.url}data.json`, { params: { token: authtoken } })
  }


}
