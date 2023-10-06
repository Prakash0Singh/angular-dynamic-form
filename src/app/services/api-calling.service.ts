import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {
  httpHeaders:any
  constructor(public http: HttpClient) {
    this.httpHeaders=new HttpHeaders({
      'content-type':'application/json',
    })
  }
    
  getApiData(){
    return this.http.get('http://localhost:3000/users')
  }
  postApiData(createUser:object){
    return this.http.post('http://localhost:3000/users',createUser)
  }
  putApiData(userId:number,updatedUser:object){
    const editUrl='http://localhost:3000/users/'+userId
    return this.http.put(editUrl,updatedUser)
  }
  deleteApiData(userId:number)
  {
    const deleteUrl='http://localhost:3000/users/'+userId
    return this.http.delete(deleteUrl)
  }

  chartApiData(){
    return this.http.get('http://localhost:3000/sales')
  }

  postNewDetailChart(newData:object){
    return this.http.post('http://localhost:3000/sales',newData)
  }

  deleteChartData(userId:number)
  {
    const deleteUrl='http://localhost:3000/sales/'+userId
    return this.http.delete(deleteUrl)
  }

  putChartData(userId:number,updatedUser:object){
    const editUrl='http://localhost:3000/sales/'+userId
    return this.http.put(editUrl,updatedUser)
  }

// Demo Data Operation
  demoApiData(){
    return this.http.get('http://localhost:3000/demouser')
  }
  demoDelete(userId:number)
  {
    const deleteUrl='http://localhost:3000/demouser/'+userId
    return this.http.delete(deleteUrl)
  }
  addNewUser(createUser:object){
    return this.http.post('http://localhost:3000/demouser',createUser)
  }
  editUser(userId:number,updatedUser:object){
    const editUrl='http://localhost:3000/demouser/'+userId
    return this.http.put(editUrl,updatedUser)
  }

  getFormData(){
  
      return this.http.get('http://localhost:3000/data/0')
  }
}


// Extra Code-----
    // Headers are Immutables
    //  but we can edit it through new instance and using-append,set,has,get,keys,getAll,delete
    // adding customize Headers
    // httpHeaders=httpHeaders.set('customize','this is it')

    // return this.http.get("https://jsonplaceholder.typicode.com/users",{headers:httpHeaders})