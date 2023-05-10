import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templateform3Component } from './templateform3.component';

describe('Templateform3Component', () => {
  let component: Templateform3Component;
  let fixture: ComponentFixture<Templateform3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Templateform3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templateform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
