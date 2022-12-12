import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  someText = "TESTANDO O PIPE OPERATOR";
  today = new Date()

  messages: any[] = ['Message 0'];
  messageMapping:
    { [k: string]: string } = { '=0': 'No messages.', '=1': 'One message.', 'other': '# messages.' };

  constructor() { }

  ngOnInit(): void { }

}
