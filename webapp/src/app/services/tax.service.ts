import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor(private httpClient: HttpClient) { }

  public getTaxes() {return this.httpClient.get(`${environment.apiUrl}tax`)};
  public getTaxesByUser() {return this.httpClient.get(`${environment.apiUrl}tax/user`)};
  public deleteTaxe(id) {return this.httpClient.delete(`${environment.apiUrl}tax/${id}`)};
  public saveTaxeByUser(data: Map<String, any>) {return this.httpClient.post(`${environment.apiUrl}tax/user`, data)};
}
