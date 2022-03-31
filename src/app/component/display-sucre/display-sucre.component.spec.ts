import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySucreComponent } from './display-sucre.component';

describe('DisplaySucreComponent', () => {
  let component: DisplaySucreComponent;
  let fixture: ComponentFixture<DisplaySucreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySucreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySucreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
