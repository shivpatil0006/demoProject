import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templateform2Component } from './templateform2.component';

describe('Templateform2Component', () => {
  let component: Templateform2Component;
  let fixture: ComponentFixture<Templateform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Templateform2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templateform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
