
import { Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { CrudDBService } from '../../sys-services/crud-db.service';
import { UserData } from './user-data';

@Injectable()
export class AuthService {
  
  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private crudDB: CrudDBService) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  currentUserObservable(): any {
    return this.afAuth.authState
  }
  emailSignup(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.authState = value
        console.log('Success!', value); 
        value.user.sendEmailVerification()
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((value) => { 
        this.authState = value;
        this.crudDB.getUserData(value.user.uid).valueChanges().subscribe(data=> {
          if(!data){
            this.crudDB.initializeUser(value.user.uid, '/user' );
          } else {
            let userData2: UserData = data;
            userData2.Last_Login = Date.now();
            this.crudDB.updateData(value.user.uid, userData2 , '/user');
          }
        });
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}