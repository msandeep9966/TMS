import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  constructor(public hc: HttpClient) {}

  login(body: any) {
    return this.hc.post('https://localhost:7083/api/login/loginuser', body);
  }

  getCoursees() {
    return this.hc.get('https://localhost:7083/api/Course/getcourses');
  }

  getEmpPendingCourses(empid: number) {
    return this.hc.get(
      `https://localhost:7083/api/Employee/getpendingcourse?empid=${empid}`
    );
  }
  getEmpActiveCourses(empid: number) {
    return this.hc.get(
      `https://localhost:7083/api/Employee/getactivecourse?empid=${empid}`
    );
  }
  getEmpCompletedCourses(empid: number) {
    return this.hc.get(
      `https://localhost:7083/api/Employee/getcompletedcourse?empid=${empid}`
    );
  }

  EnrollCourse(enroll: any) {
    return this.hc.post(
      `https://localhost:7083/api/Employee/enrollcourse`,
      enroll
    );
  }

  CompleteCourse(empid: number, enrollMentId: number) {
    return this.hc.put(
      `https://localhost:7083/api/Employee/completecourse?empid=${empid}&enrollMentId=${enrollMentId}`,
      {}, // Empty body
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
