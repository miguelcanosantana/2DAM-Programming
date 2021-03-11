import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { PhotoRecord } from '../model/photo-record';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  photos: PhotoRecord[] = [];//Array of photos
  

  constructor() { }


  insertPhoto(path: SafeResourceUrl) {
    const record: PhotoRecord = {
      path: path,
      date: new Date(),
    };
    this.photos.unshift(record);
    console.log(path);
  }


  //Remove Photo (Can also be done with index and position)
  removePhoto(path: SafeResourceUrl) {
    const i = this.photos.map(p => p.path).indexOf(path);
    this.photos.splice(i,1); //Delete on i pos 1 element
  }


  //Get Photos
  getPhotos() {
    return this.photos;
  }
}
