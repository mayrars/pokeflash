import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Pokemons } from '../interfaces/pokemons.interface';
import { Specie } from '../interfaces/specie.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = 'https://pokeapi.co/api/v2/';
  constructor(private http:HttpClient) { }
  getPokemons(limit:number=24, offset:number=0):Observable<Pokemons | undefined>{
    return this.http.get<Pokemons>(`${this.url}pokemon?limit=${limit}&offset=${offset}`).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }
  getSpeciesPokemon(link:string):Observable<Pokemon | undefined>{
    return this.http.get<Pokemon>(link).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }
  getPokemon(name: string):Observable<Pokemon | undefined>{
    return this.http.get<Pokemon>(`${this.url}pokemon/${name}`).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }
  getSpecies(name: string | undefined):Observable<Specie | undefined>{
    return this.http.get<Specie>(`${this.url}pokemon-species/${name}`).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }
}
