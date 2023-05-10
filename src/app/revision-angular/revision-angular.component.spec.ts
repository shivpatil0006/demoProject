import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionAngularComponent } from './revision-angular.component';

describe('RevisionAngularComponent', () => {
  let component: RevisionAngularComponent;
  let fixture: ComponentFixture<RevisionAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
