import { Component, inject, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  private _route = inject(ActivatedRoute)
  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params) => {
      }
    })
  }
}
