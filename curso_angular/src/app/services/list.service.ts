import { Injectable } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name)

  }


}
