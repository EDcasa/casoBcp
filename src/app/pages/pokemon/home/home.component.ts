import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPokemon: IPokemon[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  deletePokemon(eve: number) {
    this.pokemonService.deletePokemon(eve).subscribe({
      next: (res: any) => {
        this.getPokemons();
      },
      error: (err => {

      })
    });
  }

  getPokemons() {
    this.pokemonService.getPokemon().subscribe({
      next: (pokemons: IPokemon[]) => {
        this.listPokemon = pokemons;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
}
