import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() pokemonsList!:IPokemon[];
  @Output() deletePokemonE = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  deletePokemon(pokemon:IPokemon){
    this.deletePokemonE.emit(pokemon.id);
  }

}
