import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Key } from 'protractor';
import { runInThisContext } from 'vm';
const { Storage } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  word: string;
  loadedWord: string;
  atributo: object;
  constructor() {}

  async saveToDevice() {
    await Storage.set({key: 'word', value: this.word })
  }

  async loadFromDevice () {
    const {value} = await Storage.get({key: 'word'});
    this.word = value;
    this.atributo = await Storage.get({key: 'word'});
  }
    

}
