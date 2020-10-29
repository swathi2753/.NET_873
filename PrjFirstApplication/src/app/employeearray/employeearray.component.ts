import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeearray',
  templateUrl: './employeearray.component.html',
  styleUrls: ['./employeearray.component.css']
})
export class EmployeearrayComponent implements OnInit {

  people:any[]=[
    {"name":"Swathi","age":23,"dept":"HR"},
    {"name":"Sree","age":26,"dept":"HR"},
    {"name":"Aami","age":25,"dept":"Finance"},
    {"name":"Vinnu","age":24,"dept":"Development"},
  ];

  constructor() { }

  ngOnInit() {
  }


}
