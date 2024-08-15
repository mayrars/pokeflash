import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, output, Output } from '@angular/core';

@Component({
  selector: 'app-limit-selector',
  standalone: true,
  imports: [NgClass],
  templateUrl: './limit-selector.component.html',
  styleUrl: './limit-selector.component.scss'
})
export class LimitSelectorComponent implements OnInit, OnChanges{
  @Input() limit: any;
  //OnClick = output<number>
  @Output() OnClick: EventEmitter<number> = new EventEmitter();

  constructor(){}
  ngOnInit(): void {
  }
  ngOnChanges(): void {
  }
  changeLimit(limit: number){
    this.OnClick.emit(limit)
  }
}
