import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-cardhorizontal',
  standalone: true,
  imports: [RouterLink,TitleCasePipe],
  templateUrl: './cardhorizontal.component.html',
  styleUrl: './cardhorizontal.component.scss'
})
export class CardhorizontalComponent implements OnInit {
  @Input() poke: any;
  ngOnInit(): void {
    console.log(this.poke)
  }
}
