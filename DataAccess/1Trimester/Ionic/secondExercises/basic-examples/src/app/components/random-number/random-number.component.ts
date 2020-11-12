import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss'],
})
export class RandomNumberComponent implements OnInit {

  //When random-number componed is invoked from a page, it will gener
  n: number;

  constructor() { }

  ngOnInit() {
    this.n = Math.floor(Math.random() * 10 + 1);
  }

}
