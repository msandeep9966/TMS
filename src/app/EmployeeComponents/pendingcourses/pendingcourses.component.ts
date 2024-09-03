import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from '../../apiservice.service';
import { JsonPipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-pendingcourses',
  standalone: true,
  imports: [JsonPipe, CardComponent],
  templateUrl: './pendingcourses.component.html',
  styleUrl: './pendingcourses.component.scss',
})
export class PendingcoursesComponent {
  constructor(public r: Router, public o: APIServiceService) {}
  pendingcourses: any;
  GetPendingCourses() {
    this.o
      .getEmpPendingCourses(200)
      .subscribe((res) => (this.pendingcourses = res));
  }
}
