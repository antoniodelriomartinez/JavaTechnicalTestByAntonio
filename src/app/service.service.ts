import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 // url: string = "http://localhost:8084/JavaTechnicalTestByAntonio/";
 url: string = "";
  constructor(private httpClient: HttpClient) { }

  getEvents(): Observable<any> {
    return this.httpClient.get(this.url + "ws/events.json");
  }

  getDeals(): Observable<any> {
    return this.httpClient.get(this.url + "ws/deals.json");
  }

  getCalculations(): Observable<any> {
    return this.httpClient.get(this.url + "ws/calculations.json");
  }

}
