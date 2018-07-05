import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UkrCitysService {
  citys: Observable<any[]>;
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        this.citys = data;
    });

  }

  public getJSON(): Observable<any> { 
    return this.http.get("./assets/citys.json")
  }
}
