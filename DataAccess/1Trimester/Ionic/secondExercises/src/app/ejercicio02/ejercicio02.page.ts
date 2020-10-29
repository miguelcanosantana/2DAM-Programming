import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  name = '';
  buttonMessage = 'ShowName';

  constructor() { }

  ngOnInit() {
  }

  toggleName(input) {

    //If name is clean, assign input to name and show clean button
    if (this.name === '') {
      this.name = input;
      this.buttonMessage = 'Clean the Screen';

    } else { //Clean name and changes buton to show
      this.name = '';
      this.buttonMessage = 'Show the name';
    }
  }
}
