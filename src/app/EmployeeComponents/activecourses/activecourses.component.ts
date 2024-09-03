import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from '../../apiservice.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-activecourses',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './activecourses.component.html',
  styleUrl: './activecourses.component.scss',
})
export class ActivecoursesComponent {
  constructor(public r: Router, public o: APIServiceService) {}
  activecourses: any;
  GetActiveCourses() {
    this.o
      .getEmpActiveCourses(200)
      .subscribe((res) => (this.activecourses = res));
  }
}
