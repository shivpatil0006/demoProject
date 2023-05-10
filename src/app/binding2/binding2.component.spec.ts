import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding2Component } from './binding2.component';

describe('Binding2Component', () => {
  let component: Binding2Component;
  let fixture: ComponentFixture<Binding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Binding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
