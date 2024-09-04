import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [JsonPipe, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {}
