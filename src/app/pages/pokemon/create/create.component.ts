import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICPokemon } from 'src/app/interfaces/pokemon.interface';


interface UserFormControls {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  age: FormControl<number | null>;
}

@Component({
  selector: 'create-pokemon',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private pokemonCreate!: ICPokemon;
  
  formCreatePokemon!: FormGroup;
  
  @Input() set pokemon(pokemonD: ICPokemon) {
    this.pokemonCreate = pokemonD;
    this.formCreatePokemon.patchValue({...pokemonD})
   }

   @Output() submit = new EventEmitter<ICPokemon>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCreatePokemon = this.formBuilder.group({
      name:new FormControl(null, Validators.required),
      image:new FormControl(null, Validators.required),
      attack:new FormControl(null, Validators.required),
      defense:new FormControl(null, Validators.required),
      hp:new FormControl(null, Validators.required),
      type:new FormControl(null, Validators.required),
      idAuthor:new FormControl(null, Validators.required)
    })
  }



  /**
   * If the form is not valid, then it will be marked as dirty. If the form is valid, then the form
   * will be submitted
   */
  onSubmit(){
    if(!this.formCreatePokemon.valid){
      this.formCreatePokemon.dirty;
    }
    this.submit.emit(this.formCreatePokemon.value);
  }
}
