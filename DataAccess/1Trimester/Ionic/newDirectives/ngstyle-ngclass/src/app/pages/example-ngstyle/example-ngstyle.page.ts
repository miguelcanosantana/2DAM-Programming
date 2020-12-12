import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ngstyle',
  templateUrl: './example-ngstyle.page.html',
  styleUrls: ['./example-ngstyle.page.scss'],
})
export class ExampleNgstylePage implements OnInit {

  color: String = "blue";

  constructor() { }

  ngOnInit() {
  }

  setColor(value) {
    this.color = value;
  }

}
