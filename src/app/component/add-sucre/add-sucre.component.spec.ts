import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSucreComponent } from './add-sucre.component';

describe('AddSucreComponent', () => {
  let component: AddSucreComponent;
  let fixture: ComponentFixture<AddSucreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSucreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSucreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
