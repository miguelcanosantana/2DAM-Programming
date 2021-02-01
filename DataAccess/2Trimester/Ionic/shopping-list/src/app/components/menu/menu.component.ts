import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {}


  //AuthGuard will detect its not logged and redirect
  logout() {
    this.authService.logout().then(
      //() => this.router.navigateByUrl('/login')
      () => location.reload()
    );
    
  }

}
