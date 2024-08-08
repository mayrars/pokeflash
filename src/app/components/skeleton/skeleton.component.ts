import { Component, Input, OnInit } from '@angular/core';
import { skeletonModel } from '../../interfaces/skeleton.interface';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent implements OnInit {
  @Input() public count: number = 3;
  @Input() public theme: { [k: string]: string } | { [k: string]: string }[] = {};
  skeletonItems: skeletonModel[] = [];
  ngOnInit(): void {
    for (let i = 0; i < this.count; i++) {
      this.skeletonItems.push({
        style: !Array.isArray(this.theme) ? this.theme : this.theme[i] || this.theme[0] || {},
      })
    }
  }

}
