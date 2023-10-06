import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarNameService {

  constructor() { }
  MyCars=[
    {"id":1,"name":"Lamborghini","img":"https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=600","detail":"Lamborghini was founded in 1963 by Ferruccio Lamborghini. He became rich building Tractors after the Second World War. He founded Lamborghini because he wanted to build a good touring car to compete against the cars of makers such as Ferrari."},
    {"id":2,"name":"Land Rover", "img":"https://images.pexels.com/photos/4062200/pexels-photo-4062200.jpeg?auto=compress&cs=tinysrgb&w=600","detail":"The Land Rover Range Rover (generally known simply as the Range Rover) is a 4x4 motor car produced by Land Rover, a marque and sub-brand of Jaguar Land Rover. The Range Rover line was launched in 1970 by British Leyland and is now in its fifth generation.Additional models have been launched under the Range Rover name, including the Range Rover Sport, Range Rover Evoque, and Range Rover Velar."},
    {"id":3,"name":"BMV","img":"https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600","detail":"Bayerische Motoren Werke AG, abbreviated as BMW,German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria. The corporation was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945."},
    {"id":4,"name":"Ferrari", "img":"https://images.pexels.com/photos/2664399/pexels-photo-2664399.jpeg?auto=compress&cs=tinysrgb&w=600","detail":"Ferrari is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari (1898-1988) in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni, the company built its first car in 1940, and produced its first Ferrari-badged car in 1947."},
  ]
}
