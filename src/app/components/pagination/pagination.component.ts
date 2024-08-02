import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit{
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemsPerPage: any;
  @Input() categoryId: any;
  @Output() OnClick: EventEmitter<number> = new EventEmitter();

  totalPages = 0
  pages:any = []
  ngOnInit(): void {
    if(this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage)
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1)
    }
  }
  pageClicked(page: number){
    console.log(page)
    if(page<=this.totalPages && page>=1)
      this.OnClick.emit(page)
  }
}
