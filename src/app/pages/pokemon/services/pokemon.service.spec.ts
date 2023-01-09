import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


describe('PokemonService TDD to HTTP status OK and BAD', () => {
  let service: PokemonService;
  let httpClientSpy: { post: jasmine.Spy, get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
    service = new PokemonService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Would be return Pokemon Object', (done: DoneFn) => {
    const mockPokemon = {
      "id": 45, //Todo: check next id or fail test
      "name": "Pokemon 1",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
      "attack": 10,
      "defense": 10,
      "hp": 100,
      "type": "Fire",
      "idAuthor": 1
    }

    const mockResultPokemon = {
      "name": "Pokemon 1",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
      "attack": 10,
      "defense": 10,
      "hp": 100,
      "type": "Fire",
      "id_author": 1
    }

    httpClientSpy.post.and.returnValue(of(mockPokemon));

    service.savePokemon(mockResultPokemon).subscribe({
      next: (pokemon) => {
        expect(pokemon).toEqual(mockPokemon)
        done()
      },
      error: (err) => {
        console.log(err);
      }
    })

  });

  //Todo: OK
  it(`Should return error 400`, (done: DoneFn) => {
    const mockPokemon = {
      name: 'Pokemon 1',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
      attack: 10,
      defense: 10,
      hp: "test", //Todo: send string to test Bad Request
      type: 'Fire',
      idAuthor: 1
    }

    const error400 = new HttpErrorResponse({
      error: "Invalid data, check the information send",
      status: 400, statusText: 'Bad Request'
    })

    httpClientSpy.post.and.returnValue(throwError(error400))
    service.savePokemon(mockPokemon).subscribe({
      next: (pokemon) => { },
      error: (err: any) => {
        expect(err.status).toEqual(400);
        done()
      }
    })

  })


  //Todo: OK
  it('Should return Pokemon Object By id', (done: DoneFn) => {
    const mockPokemon = {
      "id": 44,
      "name": "Pokemon 1",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
      "attack": 10,
      "defense": 10,
      "hp": 100,
      "type": "Fire",
      "idAuthor": 1
    }

    httpClientSpy.get.and.returnValue(of(mockPokemon));

    service.getPokemonById(44).subscribe({
      next: (pokemon) => {
        expect(pokemon).toEqual(mockPokemon)
        done()
      },
      error: (err) => {
        // console.log(err);
      }
    })

  });

  //Todo: OK
  it('Should return Array Pokemon', (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(of(true));

    service.getPokemons().subscribe({
      next: (pokemon) => {
        expect(true).toEqual(true)
        done()
      },
      error: (err) => {
        // console.log(err);
      }
    })

  });


  it('Should return search Pokemon By name', (done: DoneFn) => {

    const resultSearchPokemon = [{
      "id": 30,
      "name": "Pidgey",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
      "attack": 27,
      "defense": 24,
      "hp": 100,
      "type": "Fuego",
      "idAuthor": 1
  }]

    httpClientSpy.get.and.returnValue(of(resultSearchPokemon));

    service.getPokemons().subscribe({
      next: (pokemons) => {
        service.searchPokemon(pokemons, "Pidgey").subscribe(pokemon=>{
          expect(pokemon).toEqual(resultSearchPokemon);
          done()
        })
      }
    })

  });

});
