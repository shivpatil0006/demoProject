import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulaRevisionComponent } from './angula-revision.component';

describe('AngulaRevisionComponent', () => {
  let component: AngulaRevisionComponent;
  let fixture: ComponentFixture<AngulaRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulaRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngulaRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
