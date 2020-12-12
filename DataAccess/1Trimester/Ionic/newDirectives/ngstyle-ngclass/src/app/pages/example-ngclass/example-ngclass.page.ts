import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ngclass',
  templateUrl: './example-ngclass.page.html',
  styleUrls: ['./example-ngclass.page.scss'],
})
export class ExampleNgclassPage implements OnInit {

  temperature: number = 25;

  constructor() { }

  ngOnInit() {
  }

}
