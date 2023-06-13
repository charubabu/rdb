import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { MatDialog } from '@angular/material/dialog';



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

constructor(private employeeService: EmployeeService ,private dialog: MatDialog) { 
   
}

ngOnInit(): void {
  this.employeeService.getEmployees().subscribe(response => {
    this.Employees = response[3];});
    

 
    

    //for peers
    this.employeeService.getEmployeesdetails().subscribe(response => {
      const desiredIndex = 3; 
      if (response && response.length > desiredIndex) {
        const selectedEmployee = response[desiredIndex];
        const peer = selectedEmployee['Reporting Manager'];
        this.currentUser = selectedEmployee['Employee Name']
        this.Employees2 = response.filter(employee => ( employee?.['Reporting Manager'] === peer ));
      } else {
        // this.Employees = [];
        this.selectedEmployee = null;
      }
    });


    //for reportees
    this.employeeService.getEmployeesdetails().subscribe(response => {
      const desiredIndex = 3; 
      if (response && response.length > desiredIndex) {
        const selectedEmployee = response[desiredIndex];
        const report = selectedEmployee['Employee Name'];
        this.currentUser = selectedEmployee['Employee Name']

        this.Employees1 = response.filter(employee => ( employee?.['Reporting Manager'] === report ));

      } else {
        // this.Employees = [];
        this.selectedEmployee = null;
      }
    });
} 

openpop(empId:any) {   
  sessionStorage.setItem("empId",empId);
  this.dialog.open(EmployeeDetailsComponent,{width:'30%',height:'80%'});
}

}