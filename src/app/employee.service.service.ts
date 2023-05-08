import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  constructor(private http: HttpClient) {}

  addEmployee(employee: Employee) {
    const url = 'http://localhost:9091/emp';
    return this.http.post<any>(url, employee);
  }
}
