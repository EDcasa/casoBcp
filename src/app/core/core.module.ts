import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonModule } from '../pages/pokemon/pokemon.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PokemonModule
  ],
  exports:[
    PokemonModule
  ]
})
export class CoreModule { }
