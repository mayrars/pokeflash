import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../../interfaces/pokemons.interface';
import { PokemonService } from '../../services/pokemon.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  pokemons?: Pokemons
  limit?: number
  offset?: number
  constructor( private apiService: PokemonService){}
  ngOnInit(): void {
    this.apiService.getPokemons(this.limit=24, this.offset=0).subscribe({
      next: (data) => {
        this.pokemons = data
      }
    }
   )
  }
  changeLimit(limit:number){
    this.apiService.getPokemons(limit, this.offset=0).subscribe({
      next: (data) => {
        this.pokemons = data
      }
    }
   )
  }
}
