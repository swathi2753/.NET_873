import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatype',
  templateUrl: './datatype.component.html',
  styleUrls: ['./datatype.component.css']
})
export class DatatypeComponent implements OnInit {

  name:string = "swathi";
  age:number;
  hobbies:string[];
  marks:Array<number>;
  Istrue:boolean;
  student:object;
  tupleval:[string,number,boolean];
  dynamicvalue:any;

  picture = "assets/images/bird1.jpg";

  constructor() { 
  this.age = 25;
  this.hobbies = ["Playing","Singing"];
  this.marks =[89,90,78];
  this.Istrue=false;
  this.tupleval =["swathi",25,true];
  this.student ={fathername:"Bimal",City:"Calicut"}
  this.dynamicvalue = "Hi!!";
  this.dynamicvalue = true;

  }
  ngOnInit() {
  }

}
