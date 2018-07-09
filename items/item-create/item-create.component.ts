
import { Component, OnInit } from '@angular/core';
import { UkrCitysService } from '../../sys-services/ukr-citys.service';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit  {

  fieldValue;

  constructor(private citySvc: UkrCitysService) {}
  ngOnInit(){

  }

  setValue(event){
    console.log(event.target.getAttribute("div-value"));
   
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }
}