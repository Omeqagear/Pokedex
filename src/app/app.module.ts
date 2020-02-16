import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonTopBarComponent } from './pokemon-top-bar/pokemon-top-bar.component';
import { PokemonSideComponent } from './pokemon-side/pokemon-side.component';
import { PokemonSideBarComponent } from './pokemon-side-bar/pokemon-side-bar.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SearchPipe } from './shared/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonTopBarComponent,
    PokemonSideComponent,
    PokemonSideBarComponent,
    PokemonDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
