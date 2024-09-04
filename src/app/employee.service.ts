import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public hc: HttpClient) { }

  getCourses(){
    return this.hc.get("https://localhost:7083/api/Course/getcourses");
  }

  enrollCourse(body: any){
    return this.hc.post("https://localhost:7083/api/Employee/enrollcourse", body, {
      responseType: 'text'
    });
  }

  getCoursesenrolled(empid: number){
    return this.hc.get(`https://localhost:7083/api/Employee/getcoursesbyempid?empid=${empid}`);
  }

  cancelCourse(body: any){
    return this.hc.post("https://localhost:7083/api/Employee/cancelcourse", body, {
      responseType: 'text'
    });
  }

  getPendingCourses(empid: number){
    return this.hc.get(`https://localhost:7083/api/Employee/getpendingcourse?empid=${empid}`);
  }

  getActiveCourses(empid: number){
    return this.hc.get(`https://localhost:7083/api/Employee/getactivecourse?empid=${empid}`);
  }

}
