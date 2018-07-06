
import { Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { CrudDBService } from '../../sys-services/crud-db.service';
import { UserData } from './user-data';

@Injectable()
export class AuthService {
  
  public user/*:  Observable<firebase.User>*/ = null;

  constructor(private afAuth: AngularFireAuth, private crudDB: CrudDBService) {
    this.user = this.afAuth.auth.currentUser;
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
      .then(value => { 
        this.user =  this.afAuth.user;
        this.crudDB.getUserData(value.user.uid).valueChanges().subscribe(data=> {
          if(!data){
            this.crudDB.initializeUser(value.user.uid, '/user' );
          } else {
            let userData2: UserData = data;
            userData2.Last_Login = Date.now();
            this.crudDB.updateData(value.user.uid, userData2 , '/user');
          }
        });
        return true;
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
      console.log(this.user);
  }

}