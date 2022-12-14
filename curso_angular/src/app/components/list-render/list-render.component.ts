import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';

import { Animal, Carro } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal [] = [
    { name: "Turca", type: "Dog", age: 4 },
    { name: "Tom", type: "Cat", age: 10 },
    { name: "Frida", type: "Dog", age: 5 },
    { name: "Bob", type: "Horse", age: 2 },
  ]

  animalDetails = '';

  carros: Carro[] = [
    { marca: 'Gol', age: 2010, details: 'Completo' },
    { marca: 'Polo', age: 2012, details: 'Sem Dh' },
    { marca: 'Savero', age: 2017, details: 'Sem AR' },
    { marca: 'Palio', age: 2009, details: 'Básico' },
    { marca: 'Hb20', age: 2020, details: 'Completo' },
  ]

  carroDetails = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }


  showAge(animal: Animal):void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}`;
  }

  showCarros(carro: Carro):void{
    this.carroDetails = ` O carro ${carro.marca} é ${carro.details}`
  }

  removeAnimal(animal: Animal){
    console.log('Removendo animal');
    this.animals = this.listService.remove(this.animals, animal)

  }
}
