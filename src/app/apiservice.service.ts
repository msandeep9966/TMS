import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  constructor(public hc: HttpClient) { }

  login(body: any){
    return this.hc.post("https://localhost:7083/api/login/loginuser", body);
  }
}
