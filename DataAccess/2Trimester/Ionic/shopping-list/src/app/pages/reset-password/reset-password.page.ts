import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {


  email: string;


  constructor(
    private authService: AuthService,
    private router: Router) { }


  ngOnInit() {
  }


  //Reset Password
  reset() {
    this.authService.resetPassword(this.email);
    this.router.navigateByUrl('/login');
  }

}
