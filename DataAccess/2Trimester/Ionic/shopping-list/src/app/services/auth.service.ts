import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  public login(email: string, password: string
              ): Promise<auth.UserCredential> {
    
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public getCurrentUser(): Observable<User> {
    return this.afAuth.authState;
  }


}
