import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  message: string = '';
  b: boolean = false;
  hello: string = 'hello';
  isEmployee: any;

  constructor(public r: Router, public o: APIServiceService) {}

  applycss() {
    let a = {
      c: '',
    };
    if (this.b) {
      a['c'] = 'c1';
    } else {
      a['c'] = 'c2';
    }
    return a;
  }

  MyLoginFunction(frm: any) {
    if (frm.email == 'admin' && frm.password == 'admin') {
      sessionStorage.setItem('userType', frm.email);
      this.r.navigate(['/']).then(() => {
        window.location.reload();
      });
    } else {
      let body = {
        email: frm.email,
        password: frm.password,
      };
      this.o.login(body).subscribe({
        next: (res:any) => {
          this.isEmployee = res[0].isEmployee;
          console.log(res[0]);
          if (this.isEmployee) {
            sessionStorage.setItem('userType', 'employee');
            sessionStorage.setItem('employeeId', res[0].employeeId);
            sessionStorage.setItem('managerId', res[0].managerId);
            sessionStorage.setItem('userName', res[0].userName);
            this.r.navigate(['']).then(() => {
              window.location.reload();
            });
          } else {
            sessionStorage.setItem('userType', 'manager');
            sessionStorage.setItem('managerId', res[0].managerId);
            sessionStorage.setItem('userName', res[0].userName);
            this.r.navigate(['']).then(() => {
              window.location.reload();
            });
          }
        },
        error: (err) => {
          alert(err.error);
        },
      });
    }
  }
}
