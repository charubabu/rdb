import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'http://localhost:4500/employee'; 

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.employeesUrl);
  }

  //test
  getEmployeesdetails(): Observable<any[]> {
    return this.http.get<any[]>(this.employeesUrl);
  }

  getEmployeeById(employeeid: number) : Observable<any[]> {
    return this.http.get<any[]> (this.employeesUrl);
  }
}
