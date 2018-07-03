import { ItemService } from './../shared/item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item = null;
  private uid ;
  constructor(private itmSvc: ItemService ,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.uid = params['item'];
  });
   }

  ngOnInit() {
    this.itmSvc.getItem(this.uid).valueChanges().subscribe(val => { this.item = val;});
  }

}


