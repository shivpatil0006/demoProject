import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveform3Component } from './reactiveform3.component';

describe('Reactiveform3Component', () => {
  let component: Reactiveform3Component;
  let fixture: ComponentFixture<Reactiveform3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reactiveform3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactiveform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
