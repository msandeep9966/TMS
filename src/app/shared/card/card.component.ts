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
  courses: any[] = [];
  @Input() courseId?: number;
  @Input() courseName?: string;
  @Input() startDate?: string;
  @Input() endDate?: string;
  @Input() status?: string;
  @Input() enrollmentId?: number;

  CompeleteCourse(enrollmentId?: number) {
    const EmployeeId = sessionStorage.getItem('employeeId');

    this.o
      .CompleteCourse(Number(EmployeeId), Number(enrollmentId))
      .subscribe((res) => {
        this.r.navigate(['/employee/completedcourses']);
      });
  }

  CancelCourse(enrollmentid?: number) {
    console.log('Cancelling course with enrollment ID:', enrollmentid);
    const EmployeeId = sessionStorage.getItem('employeeId');
    const cancelledCourse = {
      EmployeeId: EmployeeId,
      EnrollmentId: enrollmentid,
    };

    this.o.CancelCourse(cancelledCourse).subscribe((res) => {
      this.r.navigate(['/employee/courses']);
    });
  }

  AddtoEnrollmentCart(
    CourseId?: number,
    courseName?: string,
    startDate?: string,
    endDate?: string
  ) {
    const EmployeeId = Number(sessionStorage.getItem('employeeId'));
    const ManagerId = Number(sessionStorage.getItem('managerId'));
    if (this.o.courses.length === 0) {
      this.o.courses.push({
        EmployeeId: EmployeeId,
        CourseId: CourseId,
        CourseName: courseName,
        StartDate: startDate,
        EndDate: endDate,
        ManagerId: ManagerId,
      });

      console.log('Course added successfully.', this.o.courses.length);
      console.log('Course ID:', this.o.courses[0].EmployeeId);
      console.log('Course ID:', this.o.courses[0].ManagerId);
    } else {
      if (startDate != null && endDate != null) {
        // Flag to check if there is any overlap
        let isOverlapping = false;
        let OverlapperCourse = '';
        // Iterate over existing courses to check for overlap
        for (let course of this.o.courses) {
          if (
            (startDate >= course.StartDate && startDate <= course.EndDate) || // New course start date overlaps with existing course
            (endDate >= course.StartDate && endDate <= course.EndDate) || // New course end date overlaps with existing course
            (startDate <= course.StartDate && endDate >= course.EndDate) // New course completely overlaps an existing course
          ) {
            OverlapperCourse = course.CourseName;
            isOverlapping = true;
            break;
          }
        }

        if (!isOverlapping) {
          // If no overlap, add the new course
          this.o.courses.push({
            EmployeeId: EmployeeId,
            ManagerId: ManagerId,
            CourseId: CourseId,
            CourseName: courseName,
            StartDate: startDate,
            EndDate: endDate,
          });

          console.log('Course added successfully.', this.o.courses.length);
          console.log('Course ID:', this.o.courses[0].EmployeeId);
          console.log('Course ID:', this.o.courses[0].ManagerId);
        } else {
          // Handle the case where there is an overlap
          alert(
            `The course ${courseName} overlaps with an existing course ${OverlapperCourse}.`
          );
        }
      }
    }
  }
}
