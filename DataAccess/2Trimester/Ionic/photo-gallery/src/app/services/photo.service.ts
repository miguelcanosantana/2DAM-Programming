import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photoPaths: SafeResourceUrl[] = []; //Array of photo paths
  

  constructor() { }


  insertPhoto(path: SafeResourceUrl) {
    this.photoPaths.unshift(path);
  }


  //Remove Photo (Can also be done with index and position)
  removePhoto(path: SafeResourceUrl) {
    const i = this.photoPaths.indexOf(path);
    this.photoPaths.splice(i,1); //Delete on i pos 1 element
  }


  //Get Photos
  getPhotos() {
    return this.photoPaths;
  }
}
