import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
@Input() name: string = '';
@Input() userData!: {email: string, role: string};
@Input() userHelp: string = '';
@Input() userHelpData!: {email:string, role: string}

  constructor() {}

    ngOnInit(): void {

    }
}
