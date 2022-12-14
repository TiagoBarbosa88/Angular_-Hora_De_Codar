import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Joaquim";
  userHelp = 'Tiago';

  userData = {
    email: 'joaquim@email.com',
    role: 'Admin',
  }

  userHelpData = {
    email: 'tiago@email.com',
    role: 'Programador '
  }

  title = 'curso_angular';
}
