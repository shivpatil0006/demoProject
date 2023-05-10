import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCrudComponent } from './my-crud.component';

describe('MyCrudComponent', () => {
  let component: MyCrudComponent;
  let fixture: ComponentFixture<MyCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
