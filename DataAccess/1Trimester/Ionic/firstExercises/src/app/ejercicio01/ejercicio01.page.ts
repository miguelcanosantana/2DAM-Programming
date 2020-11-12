import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit {

  name = '';

  constructor() { }

  ngOnInit() {
  }

  showName(input) {
    this.name = input;
  }

  cleanName() {
    this.name = '';
  }
}
