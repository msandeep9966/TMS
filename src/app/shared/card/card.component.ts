import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from '../../apiservice.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(public r: Router, public o: APIServiceService) {}

  @Input() courseId?: number;
  @Input() courseName?: string;
  @Input() startDate?: string;
  @Input() endDate?: string;
  @Input() status?: string;

  EnrollCourse(courseid?: number) {
    if (courseid == null) {
      console.error('Course ID is required to enroll in a course.');
      return; // Early exit if courseid is not provided
    }
    console.log('Enrolling in course with ID:', courseid);

    const enroll = {
      EmployeeId: 200,
      CourseId: courseid,
      ManagerId: 100,
    };

    this.o.EnrollCourse(enroll).subscribe((res) => {
      this.r.navigate(['/employee/pendingcourses']);
    });
  }

  CompeleteCourse() {
    this.o.CompleteCourse(200, 601).subscribe((res) => {
      this.r.navigate(['/employee/completedcourses']);
    });
  }
}
