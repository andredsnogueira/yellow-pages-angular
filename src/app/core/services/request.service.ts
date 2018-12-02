import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.http.get(environment.apiUrl + '/companies');
  }

  getMostPopularCompanies() {
    // TODO: API Endpoint
  }

  getLocations() {
    return this.http.get(environment.apiUrl + '/companies/parish');
  }
}
