import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoissonComponent } from './display-boisson.component';

describe('DisplayBoissonComponent', () => {
  let component: DisplayBoissonComponent;
  let fixture: ComponentFixture<DisplayBoissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBoissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
