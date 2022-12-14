import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { EventosComponent } from './components/eventos/eventos.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent },
  {path: 'list', component: ListRenderComponent },
  {path: 'eventos', component: EventosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
