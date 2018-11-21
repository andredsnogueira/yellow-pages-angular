import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getCompanies() {
    // TODO: API Endpoint
  }

  getMostPopularCompanies() {
    // TODO: API Endpoint
  }

  getCategories() {
    // TODO: API Endpoint
  }
}
