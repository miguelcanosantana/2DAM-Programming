import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.page.html',
  styleUrls: ['./example03.page.scss'],
})
export class Example03Page implements OnInit {

  n:number;

  constructor() { }

  ngOnInit() {
    this.n = 0;
  }

  //Method for generating random values (:void means if won't return anything, instead return void)
  newRandomValue(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
  }

  //Increase
  increaseValue(): void {
    this.n++
  }

  //Decrease
  decreaseValue(): void {
    this.n--
  }

   //Decrease
   resetValue(): void {
    this.n = 0;
  }

}
