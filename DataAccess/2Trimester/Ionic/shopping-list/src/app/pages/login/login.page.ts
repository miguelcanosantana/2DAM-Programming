import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async login() {
    await this.authService.login("tideclima@gmail.com", "patatilla");
    console.log("logged");
    this.authService.getCurrentUser().subscribe(
      data => this.user = data
    );
  }

}
