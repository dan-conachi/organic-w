import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient: HttpClient) { }
 
  public save(data : Map<String, any>) {return this.httpClient.post(`${environment.apiUrl}vendor/`, data)};  
  public getVendorsByAccount() {return this.httpClient.get(`${environment.apiUrl}vendor/account`)};  
}
