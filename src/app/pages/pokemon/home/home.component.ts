import { Component, OnInit } from '@angular/core';
import { ICPokemon, IPokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPokemon!: IPokemon[];
  auxListPokemon!: IPokemon[];
  editPokemonD!:IPokemon;
  isEditPokemon:boolean=false;
  constructor(private pokemonService: PokemonService) { }

  //todo: implement button to create new Pokemon emmit event
  ngOnInit(): void {
    this.getPokemons();
  }

  //check if can emmit event to deletePokemon
  deletePokemon(eve: number) {
    this.pokemonService.deletePokemonById(eve).subscribe({
      next: (res: any) => {
        this.getPokemons();
      },
      error: (err => {

      })
    });
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe({
      next: (pokemons: IPokemon[]) => {
        this.listPokemon = pokemons;
        this.auxListPokemon = pokemons;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  loadInfoPokemon(pokemon:IPokemon){
    this.isEditPokemon = true;
    this.editPokemonD = pokemon;
  }

  showCreatePokemon(){
    this.isEditPokemon = false;
  }

  filteredPokemonName(event:Event){
    this.pokemonService.searchPokemon(this.auxListPokemon, (event.target as HTMLInputElement).value).subscribe({
      next:(pokemon:IPokemon[])=>{
          this.listPokemon = pokemon;
      }
    })
  }
}


