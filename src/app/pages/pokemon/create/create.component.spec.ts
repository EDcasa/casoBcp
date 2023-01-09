import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { By } from '@angular/platform-browser';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [ CreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Would be existing component', () => {
    const fixture = TestBed.createComponent(CreateComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })


  it('Check if form is valid', () => {
    const fixture = TestBed.createComponent(CreateComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.formCreatePokemon;
    const pokemonName = app.formCreatePokemon.controls['name'];
    const pokemonImage = app.formCreatePokemon.controls['image'];
    pokemonName.setValue('Pikachu');
    pokemonImage.setValue('https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png');
    expect(form.invalid).toBeFalse();
  })

  // it('Send form when valid', () => {
  //   const fixture = TestBed.createComponent(CreateComponent);
  //   const app = fixture.componentInstance;
  //   fixture.detectChanges();
    
  //   const pokemonName = app.formCreatePokemon.controls['name'];
  //   const pokemonImage = app.formCreatePokemon.controls['image'];
  //   const pokemonAttack = app.formCreatePokemon.controls['attack'];
  //   const pokemonDefense = app.formCreatePokemon.controls['defense'];
  //   pokemonName.setValue('Pikachu');
  //   pokemonImage.setValue('https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png');
  //   pokemonAttack.setValue(50);
  //   pokemonDefense.setValue(80);
  //   //TODO: check response Pokemon
  //   const responsePokemon:IPokemon = {
  //     "id":42,
  //     "name":"Pikachu",
  //     "image":"https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
  //     "attack":50,
  //     "defense":80,
  //     "hp":100,
  //     "type":"Fuego",
  //     "id_author":1,
  //   };
  //   const btnSubmit = fixture.debugElement.query(By.css('button.btn-save'))
  //   btnSubmit.nativeElement.click();
  //   expect(app.unitTestResponse).toEqual(responsePokemon);
  // })
  
});
