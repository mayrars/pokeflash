import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class CardComponent implements OnInit, OnChanges{
  @Input() poke: any;
  @Input() position: string='';
  pokemon?: Pokemon = {} as Pokemon;
  loader: boolean = true;
  constructor( private apiService: PokemonService){}
  ngOnInit(): void {
    this.pokemon = {} as Pokemon;
    this.apiService.getSpeciesPokemon(this.poke.url).subscribe(
      (data) => {
        this.pokemon = data
        this.loader= false
      }
    )
  }
  ngOnChanges(): void {
    this.loader = true
    this.apiService.getSpeciesPokemon(this.poke.url).subscribe(
      (data) => {
        this.pokemon = data
        this.loader= false
      }
    )
  }
}
