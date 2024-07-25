import { Component, inject } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  pokemon?: Pokemon
  pokemonname: string = '';
  specie:any
  private _router = inject(ActivatedRoute);
  constructor( private apiService: PokemonService) {}
  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this.pokemonname = params['name'];
      this.apiService.getPokemon(this.pokemonname).subscribe(
          (data) => {
            this.pokemon = data
            this.getSpecies(data?.species.name)
          }
      )
    })
  }
  getSpecies(specieName: string | undefined):any{
    this.apiService.getSpecies(specieName).subscribe(
      (data) => {
        this.specie = data
      }
    )
  }
}
