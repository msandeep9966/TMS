import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingcoursesComponent } from './pendingcourses.component';

describe('PendingcoursesComponent', () => {
  let component: PendingcoursesComponent;
  let fixture: ComponentFixture<PendingcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingcoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
