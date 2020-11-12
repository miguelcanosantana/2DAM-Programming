import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example06',
  templateUrl: './example06.page.html',
  styleUrls: ['./example06.page.scss'],
})
export class Example06Page implements OnInit {

  numbers: number[];
  fruits: string[];
  inputNumber: number;
  inputFruit: string;

  constructor() { }

  ngOnInit() {
    this.numbers = [1, 5, 8, 24, 32];
    this.fruits = ["pear", "apple", "melon", "watermelon"]
  }

  //Insert a number when key is pressed and clear text field
  insertNumber() {
    this.numbers.push(this.inputNumber);
    this.inputNumber = null;
  }

  //Insert a number when key is pressed and clear text field
  insertFruit() {
    this.fruits.push(this.inputFruit);
    this.inputFruit = null;
  }

}
