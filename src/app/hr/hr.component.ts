import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [DatePipe, NgFor, FormsModule, NgIf, CommonModule],
  templateUrl: './hr.component.html',
  styleUrl: './hr.component.scss',
})
export class HrComponent {
  employees: any;

  constructor(public o: APIServiceService) {
    this.o.getCourses().subscribe({
      next: (res) => {
        this.employees = res;
      },
    });
  }

  onSubmit(value: any) {
    let body = {
      CourseName: value.CourseName,
      StartDate: value.StartDate,
      EndDate: value.EndDate,
    };
    this.o.addcourse(body).subscribe((res) => {
      alert(res);
      this.o.getCourses().subscribe({
        next: (res) => {
          this.employees = res;
        },
      });
    });
  }
}
