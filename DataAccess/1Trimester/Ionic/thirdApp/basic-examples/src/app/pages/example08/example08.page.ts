import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example08',
  templateUrl: './example08.page.html',
  styleUrls: ['./example08.page.scss'],
})
export class Example08Page implements OnInit {

  temperature: number = 24;

  constructor() { }

  ngOnInit() {
  }

  //Change Temperature the input value
  changeValue(value: number): void {
    this.temperature += value;
  }

}
