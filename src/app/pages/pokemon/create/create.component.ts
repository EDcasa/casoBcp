import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICPokemon, IPokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'create-pokemon',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private pokemonCreate!: IPokemon;
  
  formCreatePokemon!: FormGroup;
  @Input() stateFormPokemon!:boolean;
  @Output() resetForm = new EventEmitter();

  @Input() set pokemon(pokemonD: IPokemon) {
    this.pokemonCreate = pokemonD;
    this.formCreatePokemon?.patchValue({...pokemonD})
   }

   @Output() submit = new EventEmitter<ICPokemon>();
   @Output() submitEdit = new EventEmitter<IPokemon>();
   

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCreatePokemon = this.formBuilder.group({
      id:new FormControl(null, Validators.required),
      name:new FormControl(null, Validators.required),
      image:new FormControl(null, Validators.required),
      attack:new FormControl(0, Validators.required),
      defense:new FormControl(0, Validators.required),
      hp:new FormControl(20, Validators.required),
      type:new FormControl("Fuego", Validators.required),
      idAuthor:new FormControl(1, Validators.required)
    })
  }



  /**
   * If the form is not valid, then it will be marked as dirty. If the form is valid, then the form
   * will be submitted
   */
  onSubmit(){
    if(!this.formCreatePokemon.valid){
      this.formCreatePokemon.markAllAsTouched();
    }
    if(!this.stateFormPokemon){
      this.submit.emit(this.formCreatePokemon.value);
    }else{
      this.submitEdit.emit(this.formCreatePokemon.value);
    }
  }

  ngOnChanges(){
    if(!this.stateFormPokemon){
        //Here you can reset your form
        this.formCreatePokemon?.reset();
    }
 }

}
