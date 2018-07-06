import { UserData } from './../users/shared/user-data';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CrudDBService {

  constructor( private db: AngularFireDatabase) { }

  // UPDATE USER DATA
  updateData(userID, data: UserData, url: string){
    this.db.object('/'+url+'/' + userID).update(data).then(val => {return true;})
  }
  // USE ON FIRST USER LOGIN
  initializeUser(userID, url: string){
    let userData2: UserData = {
      'UserID': userID,
      'First_Name': '' ,
      'Last_Name': '' ,
      'Phone': '' ,
      'City': '' ,
      'Contact_Address': '' ,
      'User_Role': 'User',
      'First_Login': Date.now(),
      'Last_Login': Date.now() ,
    }
    this.db.object('/'+url+'/' + userID).set(userData2).then(val => {return true;})
  }

  getUserData(userKey: string) : AngularFireObject<UserData>{
    return this.db.object(`/user/${userKey}`);
  }
}
