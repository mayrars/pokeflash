import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardhorizontalComponent } from './cardhorizontal.component';

describe('CardhorizontalComponent', () => {
  let component: CardhorizontalComponent;
  let fixture: ComponentFixture<CardhorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardhorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardhorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
