import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: Observable<Item[]>; //[] for getting an array of items

  //Impoprt the service for getting and adding items
  constructor(private itemService: ItemService) {

    this.items = itemService.getItems();

   }


  ngOnInit() {
  }


  //Create Item and add it passing it to the service
  addItemFromService() {

    //Item
    const newItem = {
      name: 'pipas',
      imageUrl: 'https://alandalusclub.com/wp-content/uploads/2020/06/PIPAS-GADITANAS-AGUASAL-comprar.jpg',
      quantity: 10
    }

    //Pass to the service
    this.itemService.addItem(newItem);

  }


}
