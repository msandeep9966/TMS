import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  value: any;
  redirectUrl: any;
  loggedIn: boolean = false;

  constructor(){
    this.value = sessionStorage.getItem('userType');
    switch (this.value) {
      case "employee":
        this.loggedIn = true;
        this.redirectUrl = '/employee';
        break;
      case "manager":
        this.loggedIn = true;
        this.redirectUrl = '/manager';
        break;
      case "admin":
        this.loggedIn = true;
        this.redirectUrl = '/hr';
        break;

      default:
        this.loggedIn = false;
        break;
    }
  }

  logout(){
    sessionStorage.removeItem("userType");
    window.location.reload();
  }
}
