import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  constructor(public hc: HttpClient) {}
  courses: any[] = [];

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
      enroll,
      {
        headers: {
          'Content-Type': 'application/json', // Ensure the content type is JSON
        },
      }
    );
  }

  CompleteCourse(empid?: number, enrollMentId?: number) {
    return this.hc.put(
      `https://localhost:7083/api/Employee/completecourse?empid=${empid}&enrollMentId=${enrollMentId}`, // Empty body
      {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'text',
      }
    );
  }

  Addcourse(body: any) {
    return this.hc.post('https://localhost:7083/api/Course/addcourse', body, {
      responseType: 'text',
    });
  }

  CancelCourse(cancelCourse: any) {
    return this.hc.post(
      `https://localhost:7083/api/Employee/cancelcourse`,
      cancelCourse
    );
  }

  // GoingToBeEnrolled(
  //   CourseId?: number,
  //   courseName?: string,
  //   startDate?: string,
  //   endDate?: string
  // ) {
  //   this.courses.push({
  //     courseId: CourseId,
  //     courseName: courseName,
  //     startDate: startDate,
  //     endDate: endDate,
  //   });
  //   // this.courses.forEach((course) => {
  //   //   console.log('Course ID:', course.courseId);
  //   //   console.log('Course Name:', course.courseName);
  //   // });
  //   return this.courses.length;
  // }
}
