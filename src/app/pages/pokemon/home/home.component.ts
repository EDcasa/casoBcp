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
        this.auxListPokemon = pokemons;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  createPokemon(pokemon:ICPokemon){
    this.pokemonService.savePokemon(pokemon).subscribe({
      next:(pokemon:IPokemon)=>{
        this.getPokemons();
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  loadInfoPokemon(pokemon:IPokemon){  
    this.isEditPokemon = true;
    this.editPokemonD = pokemon;
  }

  editPokemon(pokemon:IPokemon){
    this.pokemonService.updatePokemon(pokemon.id, pokemon).subscribe({
      next:(pokemon:IPokemon)=>{
        this.getPokemons();
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
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


