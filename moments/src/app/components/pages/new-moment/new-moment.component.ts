import { Moment } from './../../../Moment';
import { MomentService } from 'src/app/services/moment.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = "Compartilhar!"

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append('title', moment.title)
    formData.append('description', moment.description)

    if(moment.image){
      formData.append('image', moment.image)
    }

    // Todo

    // enviar para o service
    await this.momentService.createMoment(formData).subscribe();

    // exibir msg

    // redirect

  }

}
