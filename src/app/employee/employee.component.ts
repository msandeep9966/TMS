import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  courses: any;
  enrolledCourses: any;
  activeCourses: any;
  pendingCourses: any;
  approvedCourses: any;
  empidstring: any = sessionStorage.getItem('employeeId');
  mngidstring: any = sessionStorage.getItem('managerId');
  empid: any = parseInt(this.empidstring);
  mngid: any = parseInt(this.mngidstring);

  constructor(public o: EmployeeService) {
    this.o.getCourses().subscribe((data) => {
      this.courses = data;
    });
    this.o.getCoursesenrolled(this.empid).subscribe((data) => {
      this.enrolledCourses = data;
    });
    this.o.getPendingCourses(this.empid).subscribe((data) => {
      this.pendingCourses = data;
    });
    this.o.getActiveCourses(this.empid).subscribe((data) => {
      this.activeCourses = data;
    });
  }

  enroll(courseId: any) {
    this.o
      .enrollCourse({
        courseId: courseId,
        employeeId: this.empid,
        managerId: this.mngid,
      })
      .subscribe((data) => {
        this.o.getCoursesenrolled(this.empid).subscribe((data) => {
          this.enrolledCourses = data;
        });
      });
  }

  cancel(enrollmentId: any) {
    this.o
      .cancelCourse({
        enrollmentId: enrollmentId,
        employeeId: this.empid,
      })
      .subscribe((data) => {
        this.o.getCoursesenrolled(this.empid).subscribe((data) => {
          this.enrolledCourses = data;
        });
      });
  }
}
