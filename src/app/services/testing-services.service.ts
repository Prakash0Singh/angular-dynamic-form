import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingServicesService {

  constructor() { }
  showMsg(){
    return "Services Introduction in Angular"
  }
}
