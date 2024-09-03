import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from '../../apiservice.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-completedcourses',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './completedcourses.component.html',
  styleUrl: './completedcourses.component.scss',
})
export class CompletedcoursesComponent {
  constructor(public r: Router, public o: APIServiceService) {}
  completedcourses: any;
  GetCompletedCourses() {
    this.o
      .getEmpCompletedCourses(200)
      .subscribe((res) => (this.completedcourses = res));
  }
}
