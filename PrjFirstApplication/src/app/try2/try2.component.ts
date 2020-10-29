import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try2',
  templateUrl: './try2.component.html',
  styleUrls: ['./try2.component.css']
})
export class Try2Component implements OnInit {

    name:string;
    age :number;
    


  constructor() { }

  ngOnInit(): void {
  }

}
