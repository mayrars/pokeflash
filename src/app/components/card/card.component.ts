import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TitleCasePipe, RouterLink,NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() poke: any;
  @Input() position: string='';
  pokemon?:Pokemon;
  constructor( private apiService: PokemonService){}
  ngOnInit(): void {
    this.apiService.getSpeciesPokemon(this.poke.url).subscribe(
        (data) => {
          this.pokemon = data
        }
    )
  }
}
