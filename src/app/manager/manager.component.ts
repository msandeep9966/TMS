import { Component, NgModule } from '@angular/core';
import { ManagerService } from '../manager.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss',
})
export class ManagerComponent {
  employees: any;
  employeeCourses: any;
  mngidstring: any = sessionStorage.getItem('managerId');
  mngid: number = parseInt(this.mngidstring);
  rejectedReason: any;
  constructor(public o: ManagerService) {
    this.o.getEmployees(this.mngid).subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
  }

  getEmpCourses(empId: number) {
    this.o.getEmpCourses(empId).subscribe((data) => {
      console.log(data);
      this.employeeCourses = data;
    });
  }

  approveCourse(courseId: number, employeeId: number) {
    var body = {
      courseId: courseId,
      managerId: this.mngid,
      employeeId: employeeId,
      accepted: true,
    };
    this.o.approveCourse(body).subscribe((data) => {
      console.log(data);
    });
  }

  rejectCourse(courseId: number, reason: string, employeeId: number) {
    var body = {
      courseId: courseId,
      employeeId: employeeId,
      accepted: false,
      managerId: this.mngid,
      rejectionReason: reason,
    };
    this.o.approveCourse(body).subscribe((data) => {
      console.log(data);
    });
  }
  alerter(str: string) {
  }
}
