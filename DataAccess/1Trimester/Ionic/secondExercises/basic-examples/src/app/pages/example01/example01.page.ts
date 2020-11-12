import { Component, OnInit } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { doesNotReject } from 'assert';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.page.html',
  styleUrls: ['./example01.page.scss'],
})
export class Example01Page implements OnInit {

  //Variables but also ATTRIBUTES OF CLASS
  x: number;
  y: number;
  word: string;
  person: object;

  constructor() { }

  ngOnInit() {

    //To refer attributes
    this.x = 23;
    this.y = 9;
    this.word = "wonderful";
    //Use a json for defining the person object
    this.person = {
      name: "Jonn Doe",
      job: "full-stack developer",
      salary: 200
    };


  }

}
