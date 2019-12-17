import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private httpClient: HttpClient) { }

  public getIndustries() {return this.httpClient.get(`${environment.apiUrl}industry`)};
  public getCompanyTypes() {return this.httpClient.get(`${environment.apiUrl}company-type`)};
  public getCurrencies() {return this.httpClient.get(`${environment.apiUrl}currency`)};
  public getCountries() {return this.httpClient.get(`${environment.apiUrl}country`)};
  public getTimezones() {return this.httpClient.get(`${environment.apiUrl}timezone`)};

  public saveSettings(data: Map<string, any>) {return this.httpClient.post(`${environment.apiUrl}account`, data)};
  public getSettings() {return this.httpClient.get(`${environment.apiUrl}account`)};

  //misc stuff here
  public getMisc() {return this.httpClient.get(`${environment.apiUrl}misc`)};
  public saveMisc(data: Map<string, any>) {return this.httpClient.post(`${environment.apiUrl}misc`, data)};
}
