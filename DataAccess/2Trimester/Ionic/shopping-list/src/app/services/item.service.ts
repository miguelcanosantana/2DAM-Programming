import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private db: AngularFirestore) { }


  //Take and item and try to save it in the FireStore
  public addItem(item: Item): Promise<DocumentReference> {
    return this.db.collection('items').add(item);
  }


  //Get all elements when a change is made in FireStore, return an Array
  public getItems(): Observable<Item[]> {
    return this.db.collection<Item>('items').valueChanges(); //Specify with <Item>
  } 


}
