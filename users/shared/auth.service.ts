
import { Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {
  
  public user:  Observable<firebase.User> = null;

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  signup(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value); 
        value.user.sendEmailVerification()
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => { this.user =  this.afAuth.user;
        
        return true;
        
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut().then(this.user=null);
  }
}