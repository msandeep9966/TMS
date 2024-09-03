import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivecoursesComponent } from './activecourses.component';

describe('ActivecoursesComponent', () => {
  let component: ActivecoursesComponent;
  let fixture: ComponentFixture<ActivecoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivecoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
