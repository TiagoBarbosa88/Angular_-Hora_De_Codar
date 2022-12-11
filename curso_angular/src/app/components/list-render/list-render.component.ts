import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "Turca", type: "Dog"},
    {name: "Tom", type: "Cat"},
    {name: "Frida", type: "Dog"},
    {name: "Bob", type: "Horse"},
  ]

  carros = [
    {marca: 'Gol', ano: 2010, detalhes: 'Completo'},
    {marca: 'Polo', ano: 2012, detalhes: 'Sem Dh'},
    {marca: 'Savero', ano: 2017, detalhes: 'Sem AR'},
    {marca: 'Palio', ano: 2009, detalhes: 'Básico'},
    {marca: 'Hb20', ano: 2020, detalhes: 'Completo'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
