import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycoursesComponent } from './diplaycourses.component';

describe('DisplaycoursesComponent', () => {
  let component: DisplaycoursesComponent;
  let fixture: ComponentFixture<DisplaycoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaycoursesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplaycoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
