import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoissonComponent } from './add-boisson.component';

describe('AddBoissonComponent', () => {
  let component: AddBoissonComponent;
  let fixture: ComponentFixture<AddBoissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
