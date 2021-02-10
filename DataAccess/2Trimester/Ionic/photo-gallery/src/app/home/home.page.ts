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

  photoPath: SafeResourceUrl;

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
    this.photoPath = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));

    //var imageUrl = image.webPath;
    //imageElement.src = imageUrl;
  }
}


