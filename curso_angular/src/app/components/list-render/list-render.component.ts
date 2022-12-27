import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';

import { Animal, Carro } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = '';

  carros: Carro[] = [];

  carroDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
    this.getCarros();
  }

  ngOnInit(): void {
  }


  showAge(animal: Animal):void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}`;
  }

  showCarros(carro: Carro):void{
    this.carroDetails = ` O carro ${carro.marca} é ${carro.details}`
  }

  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();

  }

  getAnimals():void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  getCarros():void{
    this.listService.getAllCarros().subscribe((carros) => (this.carros = carros))
  }

}
