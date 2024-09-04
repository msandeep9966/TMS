import { Component } from '@angular/core';
import { APIServiceService } from '../../apiservice.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-diplaycourses',
  standalone: true,
  imports: [JsonPipe, CardComponent],
  templateUrl: './diplaycourses.component.html',
  styleUrl: './diplaycourses.component.scss',
})
export class DisplaycoursesComponent {
  constructor(public r: Router, public o: APIServiceService) {}
  courses: any;
  GetCourses() {
    this.o.getCoursees().subscribe((res) => (this.courses = res));
  }
  SubmitCourses() {
    if (this.o.courses.length == 0) {
      console.error('Add cources to enroll');
      return; // Early exit if courseid is not provided
    }
    this.o.EnrollCourse(this.o.courses).subscribe((res) => {
      this.r.navigate(['/employee/pendingcourses']);
    });
    console.log(this.o.courses.length);
  }
}
