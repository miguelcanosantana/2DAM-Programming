import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor (
    private authService: AuthService,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }


  //Try to login and redirect to List
  async login() {

    try {

      await this.authService.login(this.email, this.password);
      console.log("logged");
      //this.authService.getCurrentUser().subscribe( data => this.user = data );
      this.router.navigateByUrl('/list');
    } catch (error) {
      console.log(error);
      this.presentAlert(error.message);
    }
  }


  //Alert when login fails
  async presentAlert(error) {
    const alert = await this.alertController.create({
      header: 'Failed Login',
      message: error,
      buttons: ['Ok']
    });

    await alert.present();
  }


  //Register
  goToRegister() {
    this.router.navigateByUrl('/register')
  }

}
