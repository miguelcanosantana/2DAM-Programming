import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { listEmployees } from 'src/app/model/list-employees';

@Component({
  selector: 'app-example07',
  templateUrl: './example07.page.html',
  styleUrls: ['./example07.page.scss'],
})
export class Example07Page implements OnInit {

  //Imported from model/employee.ts
  employees: Employee[];

  
  constructor() { }

  ngOnInit() {

    //Imported from model/list-employees.ts
    this.employees = listEmployees;
  }

}
