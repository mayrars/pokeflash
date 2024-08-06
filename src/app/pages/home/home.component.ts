import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../../interfaces/pokemons.interface';
import { PokemonService } from '../../services/pokemon.service';
import { CardComponent } from '../../components/card/card.component';
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, PaginationComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  pokemons?: Pokemons = {count: 0, next: '', previus: '', results: []}
  totalPages?: number;
  currentPage:number=1;
  itemsPerPage:number=24;
  totalResults: number | undefined = 0;
  limit?: number = 24;
  offset?: number = 0;
  constructor( private apiService: PokemonService){}
  ngOnInit(): void {
    //get first 24 pokemons
    this.apiService.getPokemons(this.limit, this.offset).subscribe(
      (data) => {
        this.totalResults =data?.count;
        this.totalPages = data?.count!=undefined ? Math.ceil(data?.count/this.itemsPerPage) : 0;
        this.pokemons = data
      }
   )
  }
  changeLimit(limit:number){
    this.pokemons = {count: 0, next: '', previus: '', results: []}
    this.itemsPerPage = limit
    this.limit = limit
    this.offset =  this.limit!=undefined ? (this.currentPage*this.limit)+1 : 0
    this.apiService.getPokemons(limit, this.offset=0).subscribe({
      next: (data) => {
        this.currentPage=1
        this.offset=0
        this.totalResults =data?.count;
        this.totalPages = data?.count!=undefined ? Math.ceil(data?.count/this.itemsPerPage) : 0;
        this.pokemons = data
      }
    }
   )
  }
  changePage(page:number){
    this.pokemons = {count: 0, next: '', previus: '', results: []}
    const newOffset = this.limit!=undefined ? ((page-1)*this.limit)+1 : 0
    this.apiService.getPokemons(this.limit, newOffset).subscribe(data=>{
      this.currentPage =page;
      this.totalPages = data?.count!=undefined ? Math.ceil(data?.count/this.itemsPerPage) : 0;
      this.totalResults = data?.count;
      this.pokemons = data
    })
  }
}
