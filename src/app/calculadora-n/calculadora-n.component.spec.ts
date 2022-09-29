import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraNComponent } from './calculadora-n.component';

describe('CalculadoraNComponent', () => {
  let component: CalculadoraNComponent;
  let fixture: ComponentFixture<CalculadoraNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
