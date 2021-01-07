import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicComponent } from './components/comic/comic.component';
import { ComicsComponent } from './components/comics/comics.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';


const routes: Routes = [
  { path: 'comics', component:ComicsComponent},
  { path: 'comic/:id', component: ComicComponent},
  { path: 'personajes', component:PersonajesComponent},
  { path: 'personaje/:id', component: PersonajeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'comics'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
