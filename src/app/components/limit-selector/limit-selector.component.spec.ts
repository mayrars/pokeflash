import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitSelectorComponent } from './limit-selector.component';

describe('LimitSelectorComponent', () => {
  let component: LimitSelectorComponent;
  let fixture: ComponentFixture<LimitSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
