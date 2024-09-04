import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(public hc: HttpClient) { }

  getEmployees(id: number){
    return this.hc.get(`https://localhost:7083/api/Manager/getemployees?id=${id}`);
  }

  getEmpCourses(empId: number) {
    return this.hc.get(`https://localhost:7083/api/Manager/getempcourses?id=${empId}`);
  }

  approveCourse(body: any){
    return this.hc.put(`https://localhost:7083/api/Manager/approvecourse`, body);
  }
}
