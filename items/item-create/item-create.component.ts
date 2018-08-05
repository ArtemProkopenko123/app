import { AuthService } from './../../users/shared/auth.service';

import { Component, OnInit  } from '@angular/core';
import { UkrCitysService } from '../../sys-services/ukr-citys.service';
import { NgForm } from '@angular/forms';
import { CrudDBService } from '../../sys-services/crud-db.service';
import { AngularFireStorage } from 'angularfire2/storage';




@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit  {
  private submited: boolean = false;
  error: string = null;
  private userKey:string;
  files: Object[] = [];
  constructor(private citySvc: UkrCitysService, 
              private crud: CrudDBService,
              private authSvc: AuthService,
              private storage: AngularFireStorage) {

    this.authSvc.currentUserObservable().subscribe(authVal => {
      if(!authVal) window.location.replace('/login'); 
      else this.userKey = authVal.uid;
    });

  }
  getFiles(event){ 
    this.files.push( event.target.files); 

    
} 


  ngOnInit(){
    
  }




    /** Phone field pattern */ 
    keyPress(event: any) {
      const pattern = /[0-9\+\-\ ]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }

    
  onSubmit(form: NgForm){

    //this.crud.submitData(form.controls)
    form.value.userKey = this.userKey;
    form.value.DateSubmit = Date.now();

    this.crud.submitData(this.userKey, form.value, 'item2');

    /* FILE UPLOADER
    this.files.forEach(data => {
      this.storage.upload("items/"+ this.userKey + "/" + data["0"].name ,data["0"] );
    });
    */
  }
    
}