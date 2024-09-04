import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  courses: any;
  enrolledCourses: any;
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
  }

  enroll(courseId: any) {
    this.o
      .enrollCourse({
        courseId: courseId,
        employeeId: this.empid,
        managerId: this.mngid,
      })
      .subscribe((data) => {
        alert(data)
        this.o.getCoursesenrolled(this.empid).subscribe((data) => {
          this.enrolledCourses = data;
        });
      });
  }
}
