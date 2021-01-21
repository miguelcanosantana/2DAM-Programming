import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../model/item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private db: AngularFirestore) { }


  //Take and item and try to save it in the FireStore
  public addItem(item: Item): Promise<DocumentReference> {
    return this.db.collection('items').add(item);
  }


  //Update item knowing it's Id
  public updateItemById(id: string, item: Item): Promise<void> {
    return this.db.collection('items').doc(id).set(item);
  }


  //Get item knowing it's Id
  public getItemById(id: string): Observable<Item> {
    return this.db.collection('items').doc<Item>(id).valueChanges();
  }


  //Get all elements when a change is made in FireStore, return an Array
  public getItems(): Observable<Item[]> {
    return this.db.collection<Item>('items').snapshotChanges()
               .pipe(
                 map(
                   snaps => snaps.map(
                     snap => <Item> <unknown>{
                       itemId, snap,: .payload.doc.id
                     } {
                     ...snap.payload.doc.data().name //As Item
                    }
                   )
                 )
               );
  } 


}
