import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { Pokemons } from '../../interfaces/pokemons.interface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent{
  searchForm!: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.searchForm= this.formBuilder.group({
      search: ['',[Validators.required,Validators.minLength(3)]]
    })
  }
  searchByName(event:any){
    //console.log('here')
    const value = event.target.value;
    if(value==null || value==''){
      console.log("sin resultados")
    }else{

    }
  }
  hasErrors(controlName: string,errorType: string){
    return this.searchForm.get(controlName)?.hasError(errorType) && this.searchForm.get(controlName)?.touched
  }
}
