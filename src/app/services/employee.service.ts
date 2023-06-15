import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'http://localhost:4500/employee'; 

  private apiurl = `http://nhsappchna6210.cscidp.net/rdb/api/employee`;
  

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.employeesUrl);
  }

  //test
  getEmployeesdetails(): Observable<any[]> {
    return this.http.get<any[]>(this.employeesUrl);
  }

  // getEmployeeById(employeeid: number) : Observable<any[]> {
  //   return this.http.get<any[]> (this.employeesUrl);
  // }

  getEmployeeById(employeeId1: number): Observable<any> {
    const url = `http://nhsappchna6210.cscidp.net/rdb/api/employee/`+employeeId1; 
    return this.http.get<any>(url);
  }


  //for api
  getData(employeeId1: number): Observable<any> {
    const url = `http://nhsappchna6210.cscidp.net/rdb/api/employee/`+employeeId1; 
    return this.http.get<any>(url);
  }

  // getData(employeeId1: string){
  //   return this.http.get(`${this.apiurl}/${employeeId1}`)

  // }

  getReportee(employeeId1: number,reportees:any): Observable<any> {
    const url = `http://nhsappchna6210.cscidp.net/rdb/api/Team/`+employeeId1+"?mode="+reportees
    return this.http.get<any>(url);
  }

  getPeer(employeeId1: number,peer:any): Observable<any> {
    const url = `http://nhsappchna6210.cscidp.net/rdb/api/Team/`+employeeId1+"?mode="+peer
    return this.http.get<any>(url);
  }

}
