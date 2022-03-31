import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSucreComponent } from './admin-sucre.component';

describe('AdminSucreComponent', () => {
  let component: AdminSucreComponent;
  let fixture: ComponentFixture<AdminSucreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSucreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSucreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
