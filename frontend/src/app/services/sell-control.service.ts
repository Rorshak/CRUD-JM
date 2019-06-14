import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellControl } from '../models/sell-control';

@Injectable({
  providedIn: 'root'
})
export class SellControlService {

  selectedSellControl: SellControl;
  sellControls: SellControl[];
  readonly URL_API = 'http://localhost:3000/api/sell-control';
  //Comunicacion de app con el servidor
  constructor(private http: HttpClient) {
    this.selectedSellControl = new SellControl();
  }

  postSellControl(sellControl: SellControl) {
    return this.http.post(this.URL_API, sellControl);
  }

  getSellControls() {
    return this.http.get(this.URL_API);
  }

  putSellControl(sellControl: SellControl) {
    return this.http.put(this.URL_API +     `/${sellControl._id}`, sellControl);
  }

  deleteSellControl(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
