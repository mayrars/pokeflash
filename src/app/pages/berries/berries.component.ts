import { Component, OnInit } from '@angular/core';
import { Berry } from '../../interfaces/berry.interface';
import { PokemonService } from '../../services/pokemon.service';
import { NgClass } from '@angular/common';
import { SkeletonComponent } from '../../components/skeleton/skeleton.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CardComponent } from '../../components/card/card.component';
import { LimitSelectorComponent } from "../../components/limit-selector/limit-selector.component";

@Component({
  selector: 'app-berries',
  standalone: true,
  imports: [NgClass, SkeletonComponent, PaginationComponent, CardComponent, LimitSelectorComponent],
  templateUrl: './berries.component.html',
  styleUrl: './berries.component.scss'
})
export class BerriesComponent implements OnInit{
  berries?: Berry = {} as Berry;
  totalPages?: number;
  currentPage:number=1;
  itemsPerPage:number=24;
  totalResults: number | undefined = 0;
  limit?: number = 24;
  offset?: number = 0;
  constructor( private apiService: PokemonService){}
  ngOnInit(): void {
    //get first 24 pokemons
    this.apiService.getBerry(this.limit, this.offset).subscribe(
      (data) => {
        this.totalResults =data?.count;
        this.totalPages = data?.count!=undefined ? Math.ceil(data?.count/this.itemsPerPage) : 0;
        this.berries = data
      }
   )
  }
  changeLimit(limit:number){
    this.berries = {count: 0, next: '', previus: '', results: []}
    this.itemsPerPage = limit
    this.limit = limit
    this.offset =  this.limit!=undefined ? (this.currentPage*this.limit)+1 : 0
    this.apiService.getPokemons(limit, this.offset=0).subscribe({
      next: (data) => {
        this.currentPage=1
        this.offset=0
        this.totalResults =data?.count;
        this.totalPages = data?.count!=undefined ? Math.ceil(data?.count/this.itemsPerPage) : 0;
        this.berries = data
      }
    }
   )
  }
  changePage(page:number){
    this.berries = {count: 0, next: '', previus: '', results: []}
    const newOffset = this.limit!=undefined ? ((page-1)*this.limit)+1 : 0
    this.apiService.getPokemons(this.limit, newOffset).subscribe(data=>{
      this.currentPage =page;
      this.totalPages = data?.count!=undefined ? Math.ceil(data?.count/this.itemsPerPage) : 0;
      this.totalResults = data?.count;
      this.berries = data
    })
  }
}
