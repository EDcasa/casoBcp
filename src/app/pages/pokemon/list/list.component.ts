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
  @Output() editPokemonE = new EventEmitter<IPokemon>()

  imgDefault = "https://e7.pngegg.com/pngimages/902/338/png-clipart-poke-ball-open-wv-computer-wallpaper-desktop-wallpaper.png";
  constructor() { }

  ngOnInit(): void {
  }

  deletePokemon(pokemon:IPokemon){
    this.deletePokemonE.emit(pokemon.id);
  }

  editPokemon(pokemon:IPokemon){
    this.editPokemonE.emit(pokemon);
  }


}

