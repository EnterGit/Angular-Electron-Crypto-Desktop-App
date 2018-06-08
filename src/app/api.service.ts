import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'https://api.coinmarketcap.com/v2';

  payload;
  keys;

  private messageSource = new Subject();
  currentMessage = this.messageSource.asObservable();

  private keySource = new Subject();
  keyMessage = this.keySource.asObservable();

  private coinSource = new Subject();
  coinMessage = this.coinSource.asObservable();

  constructor(private http: HttpClient) { }

  initTicker() {
    this.http.get(this.URL + '/ticker/').subscribe(data => {
      this.payload = data;
      this.messageSource.next(this.payload);
      this.keys = Object.keys(this.payload.data);
      this.keySource.next(this.keys);
    });
  }

  coinDetail(detail) {
    this.coinSource.next(detail);
  }

}
