import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Tiago";
  age: number = 34;
  job = "Programador";
  hobbies= [ 'Correr', ' Jogar', ' Estudar', ' Assistir'];
  car = {
    name: "Polo",
    year: 2020,

  }

  constructor() {}
  

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.

    }


}
