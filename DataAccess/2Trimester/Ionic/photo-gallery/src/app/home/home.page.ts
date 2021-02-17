import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photoPaths: SafeResourceUrl[] = []; //Array of photo paths

  constructor(private sanitizer: DomSanitizer) {}


  //Take a Picture
  async takePicture() {
    const image = await Camera.getPhoto({

      quality: 70,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    //If image exists, take image.webPath
    const path = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
    this.photoPaths.unshift(path); //Unshift adds the element at the start instead the end
  }


  //Remove Photo (Can also be done with index and position)
  removePhoto(path: SafeResourceUrl) {
    const i = this.photoPaths.indexOf(path);
    this.photoPaths.splice(i,1); //Delete on i pos 1 element
  }

}


