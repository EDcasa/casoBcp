import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICPokemon, IPokemon } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'create-pokemon',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private pokemonCreate!: IPokemon;

  formCreatePokemon!: FormGroup;
  initialValues!: IPokemon;
  @Input() stateFormPokemon!: boolean;
  

  @Input() set pokemon(pokemonD: IPokemon) {
    this.pokemonCreate = pokemonD;
    this.formCreatePokemon?.patchValue({ ...pokemonD })
  }

  @Output() reloadTable = new EventEmitter<any>();
  @Output() submitEdit = new EventEmitter<IPokemon>();

  unitTestResponse!:IPokemon;

  constructor(
    private formBuilder: FormBuilder,
    private _pokemonService: PokemonService 
    ) { }

  ngOnInit(): void {
    this.formCreatePokemon = this.formBuilder.group({
      id:[],
      name: [undefined, [Validators.required]],
      image: [undefined, [Validators.required]],
      attack: [0, [Validators.required]],
      defense: [0, [Validators.required]],
      hp: [100, [Validators.required]],
      type: new FormControl("Fuego",[Validators.required]),
      idAuthor: [1, [Validators.required]]
    })
    this.initialValues = this.formCreatePokemon.value;
  }

  /**
   * If the form is not valid, then it will be marked as dirty. If the form is valid, then the form
   * will be submitted
   */
  onSubmit() {
    if (!this.formCreatePokemon.valid) {
      return this.formCreatePokemon.markAllAsTouched();
    }
    if (!this.stateFormPokemon) {     
        this.createPokemon(this.formCreatePokemon.value); 
    } else {
      this.editPokemon(this.formCreatePokemon.value);
    }
    this.formCreatePokemon?.reset(this.initialValues);
  }

  cancel() {
    this.formCreatePokemon.reset(this.initialValues);    
    this.stateFormPokemon = false;
  }
  
  createPokemon(pokemon:ICPokemon){
    console.log("in createPokemon");
    
    this._pokemonService.savePokemon(pokemon).subscribe({
      next:(pokemon:IPokemon)=>{
        this.unitTestResponse = pokemon;
        console.log("message saved");
        this.reloadTable.emit();
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  
  editPokemon(pokemon:IPokemon){
    this._pokemonService.updatePokemonById(pokemon.id, pokemon).subscribe({
      next:(pokemon:IPokemon)=>{
        console.log("Pokemon updated");
        this.reloadTable.emit();
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

}
