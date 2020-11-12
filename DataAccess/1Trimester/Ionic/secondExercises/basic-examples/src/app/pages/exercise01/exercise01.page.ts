import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise01',
  templateUrl: './exercise01.page.html',
  styleUrls: ['./exercise01.page.scss'],
})
export class Exercise01Page implements OnInit {

  a: number = 0;
  b: number = 0;
  displayState: number = 1;
  randomNumber: number = 0;
  randomCopy: number;

  constructor() { }

  ngOnInit() {
  }

  generateNumber() {
    this.randomNumber = +this.a + Math.floor(Math.random() * (this.b - this.a + 1));
    this.randomCopy = this.randomNumber;
  }

  //Alternate between max and min and number when clicked
  changeDisplay() {

    //From default to min
    if (this.displayState == 1) {
      this.randomNumber = this.a;
      this.displayState = 2;
    } else {
      this.randomNumber = this.b;
      this.displayState = 1;
    }

  }


}
