import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from '../../pokemon/pokemon.component';
import { PokemonDetailsComponent } from 'src/app/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: PokemonComponent, pathMatch: 'full' },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'detail/:id', component: PokemonDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
