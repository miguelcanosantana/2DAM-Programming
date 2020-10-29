import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise02',
  templateUrl: './exercise02.page.html',
  styleUrls: ['./exercise02.page.scss'],
})
export class Exercise02Page implements OnInit {

  inches: number;
  cents: number;
  meters: number;

  constructor() { }

  ngOnInit() {
  }


  //Given a type sets other types values
  convert(fromType) {

    if (fromType == "inch") {
      this.cents = this.inches * 2.54;
      this.meters = this.cents / 100;

    }

    if (fromType == "cm") {
      this.inches = this.cents / 2.54;
      this.meters = this.cents / 100; 
      
    }

    if (fromType == "m") {
      this.cents = this.meters * 100;
      this.inches = this.cents / 2.54;
      
    }

  }
  

}
