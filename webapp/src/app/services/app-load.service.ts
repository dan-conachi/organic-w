import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(private httpClient: HttpClient) { }
  
  getSettings(): Promise<any> {
    const promise = this.httpClient.get(`${environment.apiUrl}init`)
      .toPromise()
      .then(settings => {
        return settings;
      });

    return promise;
  }
}
