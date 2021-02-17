import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class CameraService {

  imageOptions = {
      quality: 70,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
  }


  constructor(private sanitizer: DomSanitizer) { }


  //Take a Picture
  async takePicture():Promise<SafeResourceUrl> {

    const image = await Camera.getPhoto(this.imageOptions);
    //If image exists, take image.webPath
    return this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
  }
}
