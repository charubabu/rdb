import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
  Employees: any;
  selectedEmployee: any;
  currentUser:any;
  Employees1:any;
  Employeesby:any;
  Employees2:any;
  logged:any;
  isReportees=true;


  employeeId = 19000005;
  employee3: any;
constructor(private employeeService: EmployeeService ,private router: Router) { 
   
}

ngOnInit(): void {
  this.logged = 3;

  

  this.employeeService.getEmployees().subscribe(response => {
    this.Employees = response[this.logged];});
  
    //for test 
    

    this.getEmployeeData();


    //for peers
    this.employeeService.getEmployeesdetails().subscribe(response => {
      const desiredIndex = this.logged; 
      if (response && response.length > desiredIndex) {
        const selectedEmployee = response[desiredIndex];
        const peer = this.employee3['Reporting Manager'];
        this.currentUser = this.employee3['Employee Name']
        this.Employees2 = response.filter(employee => ( employee?.['Reporting Manager'] === peer ));
      } else {
        // this.Employees = [];
        this.selectedEmployee = null;
      }
    });


    //for reportees
    this.employeeService.getEmployeesdetails().subscribe(response => {
      const desiredIndex = this.logged; 
      if (response && response.length > desiredIndex) {
        const selectedEmployee = response[desiredIndex];
        const report = this.employee3['Employee Name'];
        this.currentUser = this.employee3['Employee Name']

        this.Employees1 = response.filter(employee => ( employee?.['Reporting Manager'] === report ));

        if(this.Employees1.length == 0){
          this.isReportees = false;
        }
      } else {
        // this.Employees = [];
        this.selectedEmployee = null;
      }
    });

    
  
} 

openpop(empId:any) {   
  sessionStorage.setItem("empId",empId);
  this.router.navigateByUrl('/details');
}

getEmployeeData(): void {
  this.employeeService.getEmployeeById(this.employeeId).subscribe(
    (response: any[]) => {
      this.employee3 = response.find(emp => emp['Employee ID'] == this.employeeId);
    },
    (error: any) => {
      console.error('Error fetching employee data:', error);
    }

  );

}

}