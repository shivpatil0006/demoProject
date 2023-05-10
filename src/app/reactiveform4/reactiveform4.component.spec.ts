import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveform4Component } from './reactiveform4.component';

describe('Reactiveform4Component', () => {
  let component: Reactiveform4Component;
  let fixture: ComponentFixture<Reactiveform4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reactiveform4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactiveform4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
