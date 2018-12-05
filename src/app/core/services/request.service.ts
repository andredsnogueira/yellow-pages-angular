import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.http.get(environment.apiUrl + '/companies');
  }

  getCompany(id) {
    return this.http.get(environment.apiUrl + '/companies/' + id);
  }

  getMostPopularCompanies() {
    return this.http.get(environment.apiUrl + '/companies/top_five');
  }

  getLocations() {
    return this.http.get(environment.apiUrl + '/companies/cities');
  }

  getSearchedCompanies(name?, city?) {
    if (name && city) {
      return this.http.get(
        environment.apiUrl + '/companies/search?name=' + name + '&city=' + city
      );
    } else if (name) {
      return this.http.get(
        environment.apiUrl + '/companies/search?name=' + name
      );
    } else if (city) {
      return this.http.get(
        environment.apiUrl + '/companies/search?city=' + city
      );
    }
    return this.getCompanies();
  }
  postCompany(name, address, contact, city, postalCode, long, lat) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.apiUrl + '/companies', {
      name,
      address,
      contact,
      city,
      postalCode,
      long,
      lat
    });
  }

  deleteCompany(id) {
    return this.http.delete(environment.apiUrl + '/companies/' + id);
  }
}
