import { Component, effect, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { Pokemons, Result } from '../../interfaces/pokemons.interface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { NgClass } from '@angular/common';
import bootstrap from '../../../main.server';
import { Modal } from 'bootstrap';
import { debounceTime, pipe } from 'rxjs';
import { RouterLink } from '@angular/router';
import { url } from 'node:inspector';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, RouterLink, CardComponent],
templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  searchForm!: FormGroup
  pokemons?:Pokemons;
  searchResults?:any[]=[]
  @ViewChild("exampleModal") modal?: ElementRef;
  @ViewChild("Results") results!:ElementRef
  images?:string
  position: string='horizontal'
  constructor(private apiService: PokemonService, private formBuilder: FormBuilder) {
    this.searchForm= this.formBuilder.group({
      search: ['',[Validators.required,Validators.minLength(3)]]
    })
    effect(() => {
      this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe((value) =>{
        this.searchByName(value.search)
      })
    })
  }
  ngOnInit(): void {
    this.apiService.getPokemons(100000,0).subscribe({
      next: (data) => {
        this.pokemons = data
      }
    })
  }
  searchByName(name:string){
    if(name==null || name==''){
      this.modal?.nativeElement.classList.add('show')
    }else{
      this.searchResults= this.pokemons?.results?.filter(pokemon => pokemon?.name?.includes(name))
    }
  }
  hasErrors(controlName: string,errorType: string){
    return this.searchForm.get(controlName)?.hasError(errorType) && this.searchForm.get(controlName)?.touched
  }
}
