import { TestBed } from '@angular/core/testing';
import { ICPokemon, IPokemon, IResponseDeletePokemon } from 'src/app/interfaces/pokemon.interface';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';


describe('PokemonService', () => {
  let service: PokemonService;
  let iPokemon: IPokemon[] = [];
  let iPokemonSave: IPokemon = {} as IPokemon;
  let iPokemonDelete: IResponseDeletePokemon = {} as IResponseDeletePokemon;
  let httpController: HttpTestingController;
  let url: string = "https://bp-pokemons.herokuapp.com/";
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonService);
    httpController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getPokemon and return an array of Pokemons', () => {
    service.getPokemon().subscribe(pokemon => {
      expect(pokemon).toEqual(iPokemon);
    })
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}?idAuthor=1`,
    });
    req.flush(iPokemon);
  })

  it('should savePokemon and return an Pokemon', (done) => {
    let pokemonTest:ICPokemon ={
      name: 'Pokemon 1',
      image: 'https://gooogle.com',
      attack: 10,
      defense: 10,
      hp: 10,
      type: 'Fire',
      idAuthor: 1
    }
    service.savePokemon(pokemonTest).subscribe(pokemon => {
      expect(pokemon).toEqual(iPokemonSave);      
    })
    const req = httpController.expectOne({
      method: 'POST',
      url: `${url}?idAuthor=1`,
    });
    req.flush(iPokemonSave);
    done();
  })

  it('should getPokemonId return an Pokemon by id', (done) => {
    let id = 1081;
    service.getPokemonId(id).subscribe(pokemon => {
      expect(pokemon).toEqual(iPokemonSave);      
    })
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}${id}`,
    });
    req.flush(iPokemonSave);
    done();
  })


  it('should updatePokemon return an Pokemon by id', (done) => {
    let pokemonTest:IPokemon ={
      name: 'Pokemon 1',
      image: 'https://gooogle.com',
      attack: 10,
      defense: 10,
      hp: 10,
      type: 'Fire',
      id: 1081,
      id_author: 0
    }
    service.updatePokemon(pokemonTest.id,pokemonTest).subscribe(pokemon => {
      expect(pokemon).toEqual(iPokemonSave);      
    })
    const req = httpController.expectOne({
      method: 'PUT',
      url: `${url}${pokemonTest.id}`,
    });
    req.flush(iPokemonSave);
    done();
  })


  it('should deletePokemon return an Pokemon by id', (done) => {
    let id = 1081;
    service.deletePokemon(id).subscribe(pokemon => {
      expect(pokemon).toEqual(iPokemonDelete);      
    })
    const req = httpController.expectOne({
      method: 'DELETE',
      url: `${url}${id}`,
    });
    req.flush(iPokemonDelete);
    done();
  })


  it('should searchpokemon by name and return an List Pokemon', (done) => {
    let name = "fuego";
    service.getPokemon().subscribe({
      next:(pokemonL:IPokemon[]) => {
        service.searchPokemon(pokemonL, name).subscribe(pokemons=>{
          expect(pokemons).toEqual(iPokemon);      
        })
    }
  })
  const req = httpController.expectOne({
    method: 'GET',
    url: `${url}?idAuthor=1`,
  });
  req.flush(iPokemon);
    done();
  })


});
