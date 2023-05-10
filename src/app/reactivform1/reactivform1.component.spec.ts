import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivform1Component } from './reactivform1.component';

describe('Reactivform1Component', () => {
  let component: Reactivform1Component;
  let fixture: ComponentFixture<Reactivform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reactivform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
