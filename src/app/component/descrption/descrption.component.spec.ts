import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrptionComponent } from './descrption.component';

describe('DescrptionComponent', () => {
  let component: DescrptionComponent;
  let fixture: ComponentFixture<DescrptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescrptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescrptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
