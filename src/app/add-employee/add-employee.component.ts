import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { EmployeeServiceService } from '../employee.service.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private empService: EmployeeServiceService) {}

  empId!: any;
  empForm!: NgForm;

  ngOnInit(): void {}

  submit(addEmployee: NgForm) {
    this.empForm = addEmployee;
    console.log('submitted the form !!', addEmployee.value);
    this.empId = uuid.v4();
    // this.empForm = [...this.empForm, this.empId];
  }

  addEmployee() {
    this.empService.addEmployee(this.empForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Some Error Occurred !!');
      }
    );
  }
}
