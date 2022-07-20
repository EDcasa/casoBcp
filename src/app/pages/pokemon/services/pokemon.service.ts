import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICPokemon, IPokemon } from 'src/app/interfaces/pokemon.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  /**
   * The function getPokemon() returns an Observable of type IPokemon[]
   * @returns Observable<IPokemon[]>
   */
  getPokemon():Observable<IPokemon[]>{
    return this.http.get<IPokemon[]>("https://bp-pokemons.herokuapp.com/10?idAuthor=1");    
  }

  /**
   * It takes a pokemon object as a parameter, and returns an observable of type IPokemon
   * @param {ICPokemon} pokemon - ICPokemon - this is the pokemon object that we want to save.
   * @returns Observable<IPokemon>
   */
  savePokemon(pokemon:ICPokemon):Observable<IPokemon>{
      return this.http.post<IPokemon>("https://bp-pokemons.herokuapp.com/?idAuthor=1", pokemon);    
  }

  /**
   * It returns an Observable of type IPokemon, which is the interface we created earlier
   * @param {number} id - number - The id of the pokemon you want to get.
   * @returns An observable of type IPokemon
   */
  getPokemonId(id:number):Observable<IPokemon>{
    return this.http.get<IPokemon>(`https://bp-pokemons.herokuapp.com/${id}`);    
  }

  /**
   * This function takes in a pokemon object, and returns an observable of type IPokemon
   * @param {ICPokemon} pokemon - ICPokemon - the pokemon object that we want to update
   * @returns Observable<IPokemon>
   */
  updatePokemon(id:number,pokemon:IPokemon):Observable<IPokemon>{
    return this.http.put<IPokemon>(`https://bp-pokemons.herokuapp.com/${id}` , pokemon);    
  }


  /**
   * It deletes a pokemon from the database.
   * @param {number} id - number - the id of the pokemon to be deleted
   * @returns An observable of type IPokemon
   */
  deletePokemon(id:number):Observable<any>{
    return this.http.delete(`https://bp-pokemons.herokuapp.com/${id}`);    
  }

  searchPokemon(pokemons:IPokemon[], name:string){    
      return of(pokemons).pipe(
        map(p => {
          if (!name || name === '') {
            return p;
          }
          const filteredPokemons: IPokemon[] = [];
          p.filter(function(pokemon:IPokemon) {
            if (pokemon.name.toUpperCase().includes(name.toUpperCase())) {
              filteredPokemons.push(pokemon);
            }
          });
          
          return filteredPokemons;
        })
      );
  }
}
