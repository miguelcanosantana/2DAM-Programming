import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { AuthService } from 'src/app/services/auth.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: Observable<Item[]>;

  constructor(
    private itemService: ItemService,
    public authService: AuthService,
    private router: Router
  ) {

    //Get list data when logged
    this.authService.getCurrentUser().subscribe(
      () => this.items = itemService.getItems()
    );
    
  }

  ngOnInit() {
  }


  addItem() {
    this.router.navigateByUrl('/create-item');
  }


  goEditItem(id: string) {
    this.router.navigateByUrl('/edit-item/' + id);
  }


}
