import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  name: string = '';
  toDisplay:boolean = false;

  constructor(){}

  ngOnInit(): void { }

  showMessage(): void {
    this.show = !this.show; //toggle
  }

  handleClick() {
    this.toDisplay = !this.toDisplay;
    this.name = 'TiagoFlix';
  }

}
